import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.browser.window

external fun alert(message: Any?)
external val mdui: dynamic

class E(id: String) {
    val element: Element? = document.getElementById(id)
    fun onclick(method: () -> Unit) {
        element.onclick(method)
    }
}

fun Element?.onclick(method: () -> Unit) {
    this.asDynamic().addEventListener("click", method)
}

fun redirect(url: String) {
    window.location.href = url
}

fun main() {

}