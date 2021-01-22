package com.flumehelper.entity

import com.fasterxml.jackson.annotation.JsonFormat
import com.queryflow.annotation.Column
import com.queryflow.annotation.Id
import com.queryflow.annotation.Table
import com.queryflow.key.AutoIncrementKeyGenerator
import java.util.*

@Table()
data class Config(
    @Id(keyGenerator = AutoIncrementKeyGenerator::class)
    var id: Long? = null,
    @Column("config_name") var name: String? = null,
    var agentName: String? = null,
    var channels: String? = null,
    var sources: String? = null,
    var sinks: String? = null,
    var state: Int? = null,
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    var createTime: Date? = null,
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    var updateTime: Date? = null
)
