package com.flumehelper.controller

import com.flumehelper.dto.ConfigDto
import com.flumehelper.framework.JsonResult
import com.flumehelper.service.ConfigService
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*
import javax.annotation.Resource

@RestController
@RequestMapping("/api/config")
class ConfigController(@Resource var configService: ConfigService) {

    @PutMapping("")
    fun addConfig(@ModelAttribute @Validated dto: ConfigDto): JsonResult {
        configService.addConfig(dto)
        return JsonResult.success()
    }

    @PostMapping("/{configId}")
    fun editConfig(@PathVariable("configId") configId: Long,
                   @ModelAttribute @Validated dto: ConfigDto): JsonResult {
        dto.id = configId
        configService.editConfig(dto)
        return JsonResult.success()
    }

    @DeleteMapping("/{configId}")
    fun delConfig(@PathVariable("configId") configId: Long): JsonResult {
        configService.delConfig(configId)
        return JsonResult.success()
    }

    @GetMapping("")
    fun pageQueryConfig(@ModelAttribute dto: ConfigDto): JsonResult {
        return JsonResult.success(configService.pageListConfig(dto))
    }

    @GetMapping("/{id}")
    fun getConfig(@PathVariable("id") id: Long): JsonResult {
        return JsonResult.success(configService.getConfig(id))
    }

}
