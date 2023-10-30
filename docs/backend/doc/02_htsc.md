# 介绍

## 获取当前登录用户的信息

### 获取当前登录用户
```java
AuthUser user = SecurityUtil.getLoginUser();
```

### 获取当前登录用户的角色列表
```java
List<SysRole> roles = SecurityUtil.getLoginUserRoles();
```


## 权限注解
项目中使用到了`Sa-Token`，它提供了一系列的注解，方便我们控制访问权限。

### @SaCheckPermission
当前登录用户必须有指定的功能权限才能访问

示例：以下代码表示当前登录用户必须有`system:user:list`权限才能访问
```java
@SaCheckPermission("system:user:list")
@GetMapping
public ResultBody list(...) {
    return ResultBody.ok().data(...);
}
```

### @SaCheckRole
当前登录用户必须有指定的角色才能访问

示例：以下代码表示当前登录用户必须有`ceo`角色才能访问
```java
@SaCheckRole("ceo")
@GetMapping
public ResultBody list(...) {
    return ResultBody.ok().data(...);
}
```

### @SaIgnore
被注解的方法不会进行鉴权

示例：以下代码表示访问该接口不需要鉴权
```java
@SaIgnore
@GetMapping
public ResultBody list(...) {
    return ResultBody.ok().data(...);
}
```

想要了解更详细的内容，可以查看[Sa-Token官方文档](https://sa-token.cc/doc.html#/use/at-check)。

## 自动填充创建人和修改人
在实际项目中，每个表正常情况下都应该会有`创建人`、`修改人`字段，但是如果每次新增和修改操作的时候，都要去设置这两个字段就会很繁琐，所以我们希望能够自动填充这两个字段。

项目中使用到了`Mybatis-Plus`，`Mybatis-Plus`提供了`MetaObjectHandler`接口，我们只需要实现这个接口，然后在创建人和修改人字段上添加`@TableField(fill = FieldFill.{INSERT/UPDATE})`即可。

```java{1-2,5,9,13,16,20,24}
@Component
public class MetaHandler implements MetaObjectHandler {

    @Override
    public void insertFill(MetaObject metaObject) {
        try {
            // 填充创建人
            String userId = currentUserId();
            this.strictInsertFill(metaObject, "createBy", String.class, userId);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }
    
    @Override
    public void updateFill(MetaObject metaObject) {
        try {
            // 填充修改人
            String userId = currentUserId();
            this.strictUpdateFill(metaObject, "updateBy", String.class, userId);
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }
    
}
```

实体类
```java{3,6}
public class XxxxEntity {

    @TableField(fill = FieldFill.INSERT)
    private String createBy;

    @TableField(fill = FieldFill.UPDATE)
    private String updateBy;

}
```


## 系统日志
在实际项目中，我们希望对一些关键的动作进行日志记录，比如添加用户、删除用户等。一个动作调用一次记录日志的方法，每次还待去收集参数等，会造成大量的代码重复。我们希望代码中只有业务相关的操作，使用注解的方式来记录日志。

在需要记录日志的`controller`方法上添加`@Log`注解，使用方法如下：
```java
@Log(title = "新增部门", businessType = BusinessType.INSERT)
@PostMapping
public ResultBody save(...) {
    ...
    return ResultBody.ok();
}
```

### 注解参数说明
| 参数 | 类型           | 默认值   | 描述                                                          |
| --- |--------------|-------|-------------------------------------------------------------|
| title | String       | 无     | 操作模块                                                        |
| businessType | BusinessType | OTHER | 操作功能（OTHER其他、INSERT新增、UPDATE修改、DELETE删除、EXPORT导出、IMPORT导入等） |
| isSaveRequestData | boolean      | true | 是否保存请求的参数 |
| isSaveResponseData | boolean      | true | 是否保存响应的参数 |
| excludeParamNames | String[]      | {} | 排除指定的请求参数 |

### 自定义操作功能
1、在`BusinessType.java`中新增操作功能类型
```java{3-6}
public enum BusinessType {
    ...
    /**
     * 测试
     */
    TEST
}
```
2、在Vue项目中的`src/utils/enums.js`中新增操作功能类型
```js{3}
export const BusinessTypeEnums = {
  ...
  TEST: { label: '测试', value: 8 }
}
```

`@Log`注解的逻辑实现代码`LogAspect.java`

可以在`系统监控`/`操作日志`中进行查看日志数据和详细信息

## 数据权限
`功能权限`控制的是用户可以访问哪些菜单、按钮等资源，而`数据权限`控制的是用户能看到的`数据范围`。所谓数据范围，不是指能看到的数据字段，而是指能查出来的数据集合。
比如，出纳A和出纳B，他们都有权限访问财务管理模块，但是A只能看到A自己的数据，B只能看到B自己的数据，这就是数据权限的作用。

:::tip 提示
默认系统管理员`admin`拥有所有数据权限`(sys_user.admin = 1)`，默认角色拥有所有数据权限（如不需要数据权限不用设置数据权限操作）
:::

### 数据权限的使用

1、目前支持以下几种数据权限：
- `全部数据权限`：可以访问所有数据
- `本部门数据权限`：可以访问本部门的数据
- `本部门及以下数据权限`：可以访问本部门及以下的数据
- `自定义数据权限`：可以访问自定义的数据
- `本人数据权限`：只能访问本人的数据

2、在需要数据权限控制的地方加上`@DataScope`注解



