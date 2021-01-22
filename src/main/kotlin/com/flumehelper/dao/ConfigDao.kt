package com.flumehelper.dao

import com.flumehelper.dto.ConfigDto
import com.flumehelper.entity.Config
import com.queryflow.accessor.A
import com.queryflow.page.Pager
import com.queryflow.sql.SqlBox
import org.springframework.stereotype.Repository
import java.lang.StringBuilder
import java.util.*

@Repository
class ConfigDao {

    fun insert(config: Config) {
        SqlBox.insert(config)
    }

    fun countByName(configName: String): Int {
        val sql = "SELECT COUNT(id) FROM config WHERE state = ? AND config_name = ?"
        return A.query(sql, 1, configName).one(Int::class.java)
    }

    fun fetchConfigById(id: Long): Config {
        return SqlBox.select(Config::class.java)
            .where().eq("id", id)
            .and().eq("state", 1)
            .query(Config::class.java)
    }

    fun deleteConfig(id: Long) {
        SqlBox.update("config")
            .set("state", 0)
            .where().eq("id", id)
            .execute()
    }

    fun updateConfig(dto: ConfigDto) {
        SqlBox.update("config")
            .set("config_name", dto.name)
            .set("agent_name", dto.agentName)
            .set("channels", dto.channels)
            .set("sources", dto.sources)
            .set("sinks", dto.sinks)
            .set("update_time", Date())
            .where().eq("id", dto.id)
            .execute()
    }

    fun pageQuery(dto: ConfigDto): Pager<Config> {
        val sql = StringBuilder()
        val values = arrayListOf<Any>()
        sql.append("SELECT id, config_name, create_time, update_time FROM config WHERE state = ?")
        values.add(1)
        if(!dto.name.isNullOrEmpty()) {
            sql.append(" AND config_name = ? ")
            values.add("%" + dto.name + "%")
        }
        sql.append(" ORDER BY update_time DESC ");
        return A.page(sql.toString(), values, dto.page!!, Config::class.java)
    }

}
