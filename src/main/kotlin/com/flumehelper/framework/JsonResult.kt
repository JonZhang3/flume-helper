package com.flumehelper.framework

import java.util.HashMap

class JsonResult : HashMap<String, Any?>() {

    companion object {
        private val CODE_SUCCESS = 1
        private val CODE_ERROR = -1

        private val MESSAGE_SUCCESS = "操作成功"
        private val MESSAGE_ERROR = "操作失败"

        fun success(data: Any? = null, message: String = MESSAGE_SUCCESS): JsonResult {
            return JsonResult()
                .code(CODE_SUCCESS)
                .message(message)
                .data(data)
        }

        fun error(data: Any? = null, message: String = MESSAGE_ERROR): JsonResult {
            return JsonResult()
                .code(CODE_ERROR)
                .message(message)
                .data(data)
        }
    }

    fun code(code: Int): JsonResult {
        put("code", code);
        return this
    }

    fun message(message: String): JsonResult {
        put("message", message)
        return this
    }

    fun data(data: Any?): JsonResult {
        put("data", data)
        return this
    }

}


