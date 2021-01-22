package com.flumehelper.framework.exception

import java.lang.RuntimeException

class BusinessException(val code: Int = -1,
                        override val message: String,
                        override val cause: Throwable? = null): RuntimeException(message, cause, false, false) {



}
