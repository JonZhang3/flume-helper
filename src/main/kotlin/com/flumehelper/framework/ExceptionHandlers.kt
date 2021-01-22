package com.flumehelper.framework

import com.flumehelper.framework.exception.BusinessException
import org.slf4j.LoggerFactory
import org.springframework.validation.BindException
import org.springframework.validation.BindingResult
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseBody

@ControllerAdvice
class ExceptionHandlers {

    companion object {
        private val LOGGER = LoggerFactory.getLogger(ExceptionHandlers::class.java)
    }

    @ExceptionHandler(BusinessException::class)
    @ResponseBody
    fun handleBusinessException(e: BusinessException): JsonResult {
        return JsonResult().code(e.code).message(e.message)
    }

    @ExceptionHandler(BindException::class, MethodArgumentNotValidException::class)
    @ResponseBody
    fun handleValidateException(e: Exception): JsonResult {
        var bindResult: BindingResult? = null
        if(e is BindException) {
            bindResult = e.bindingResult
        } else if(e is MethodArgumentNotValidException) {
            bindResult = e.bindingResult
        }
        var errMessage: String? = "参数错误"
        if(bindResult != null && bindResult.hasErrors()) {
            errMessage = bindResult.allErrors[0].defaultMessage
            if(errMessage?.contains("NumberFormatException")!!) {
                errMessage = "参数类型错误"
            }
        }
        return JsonResult.error(message = errMessage!!)
    }

    @ExceptionHandler(java.lang.Exception::class)
    fun handleException(e: java.lang.Exception): JsonResult {
        LOGGER.error("", e)
        return JsonResult.error(message = "系统异常")
    }

}
