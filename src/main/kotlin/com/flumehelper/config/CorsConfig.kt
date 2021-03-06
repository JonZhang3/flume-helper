package com.flumehelper.config

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter

@Configuration
class CorsConfig {

    @Bean
    fun corsFilter(): CorsFilter {
        val config = CorsConfiguration()
        config.addAllowedOriginPattern("*")
        config.allowCredentials = true
        config.addAllowedMethod("*")
        config.addAllowedHeader("*")
        val configurationSource = UrlBasedCorsConfigurationSource()
        configurationSource.registerCorsConfiguration("/**", config)
        return CorsFilter(configurationSource)
    }

}
