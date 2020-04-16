import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.dom.create
import kotlinx.html.js.*
import org.w3c.dom.Element
import kotlin.browser.document

external fun alert(message: Any?)

fun main(args: Array<String>) {
    val root = document.getElementById("root")
    println("hello, world")
    val menu: Element? = document.getElementById("toolbar-menu")
}