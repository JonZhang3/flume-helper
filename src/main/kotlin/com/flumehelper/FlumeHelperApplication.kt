package com.flumehelper

import com.queryflow.accessor.AccessorFactory
import com.queryflow.accessor.AccessorFactoryBuilder
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class FlumeHelperApplication {

    @Bean
    fun configDb(): AccessorFactory {
        val builder = AccessorFactoryBuilder()
        builder.fromFile()
        return builder.build()
    }

}

fun main(args: Array<String>) {
    runApplication<FlumeHelperApplication>(*args)
}
