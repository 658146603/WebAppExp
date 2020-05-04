import org.w3c.dom.Element
import kotlin.browser.document
import kotlin.browser.window

external fun alert(message: Any?)
external val mdui: dynamic

fun Element?.onclick(method: () -> Unit) {
    this.asDynamic().addEventListener("click", method)
}

val String.element: Element?
    get() = document.getElementById(this)

fun String.onclick(method: () -> Unit) {
    this.element.onclick(method)
}

fun redirect(url: String) {
    window.location.href = url
}

fun main() {

}