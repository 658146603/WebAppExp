import kotlinx.html.*
import kotlinx.html.dom.append
import kotlinx.html.dom.create
import kotlinx.html.js.*
import org.w3c.dom.Element
import org.w3c.dom.Image
import kotlin.browser.document
import kotlin.browser.window

external fun alert(message: Any?)
val newsBanner: Element? = document.getElementById("news-banner")
var picIndex = 0

val newsPics = arrayListOf(
        "image/banner/20191119025726.jpg",
        "image/banner/20200206071934.jpg",
        "image/banner/20200305094918.jpg",
        "image/banner/20200330082141.jpg",
        "image/banner/20200402082628.jpg",
        "image/banner/20200408022457.jpg",
        "image/banner/20200410102256.jpg",
        "image/banner/20200415052132.jpg"
)

fun main() {
//    val bannerTimer = window.setInterval(changeBanner(), 500)
}
//
//fun changeBanner() {
//    picIndex++
//    console.log(newsPics[picIndex%newsPics.size])
//}