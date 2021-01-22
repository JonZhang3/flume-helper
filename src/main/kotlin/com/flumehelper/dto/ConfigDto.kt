package com.flumehelper.dto

import org.hibernate.validator.constraints.Length
import javax.validation.constraints.NotBlank

data class ConfigDto(
    var id: Long? = null,

    @NotBlank(message = "指定一个配置名称", groups = [NewOrEditConfigGroup::class])
    @Length(max = 64, message = "配置名称最大长度为 64 个字符", groups = [NewOrEditConfigGroup::class])
    var name: String? = null,

    @NotBlank(message = "Agent 名称不能为空", groups = [NewOrEditConfigGroup::class])
    @Length(max = 64, message = "Agent 名称最大长度为 64 个字符", groups = [NewOrEditConfigGroup::class])
    var agentName: String? = null,


    var channels: String? = null,
    var sources: String? = null,
    var sinks: String? = null,

    var page: Int? = 1
) {
    interface NewOrEditConfigGroup
}
