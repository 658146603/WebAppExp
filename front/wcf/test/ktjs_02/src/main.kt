import kotlin.browser.document

external fun alert(message: Any?)

fun main(args: Array<String>) {
//    alert("欢迎")
    val root = document.getElementById("root")
}