package com.flumehelper.service

import com.flumehelper.dao.ConfigDao
import com.flumehelper.dto.ConfigDto
import com.flumehelper.entity.Config
import com.flumehelper.framework.exception.BusinessException
import com.queryflow.page.Pager
import org.springframework.stereotype.Service
import java.util.*
import javax.annotation.Resource

@Service
class ConfigService (@Resource val configDao: ConfigDao) {

    fun addConfig(dto: ConfigDto) {
        if(configDao.countByName(dto.name!!) > 0) {
            throw BusinessException(message = "存在同名配置")
        }
        val config = Config()
        config.name = dto.name
        config.agentName = dto.agentName
        config.channels = dto.channels
        config.sources = dto.sources
        config.sinks = dto.sinks
        config.state = 1
        val now = Date()
        config.createTime = now
        config.updateTime = now
        configDao.insert(config)
    }

    fun getConfig(id: Long): Config {
        return configDao.fetchConfigById(id);
    }

    fun delConfig(id: Long) {
        configDao.deleteConfig(id)
    }

    fun editConfig(dto: ConfigDto) {
        configDao.updateConfig(dto)
    }

    fun pageListConfig(dto: ConfigDto): Pager<Config> {
        if(dto.page == null || dto.page!! < 1) {
            dto.page = 1
        }
        return configDao.pageQuery(dto)
    }

}
