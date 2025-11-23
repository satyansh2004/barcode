let img_box = document.getElementById("img_box");
let input_barcode = document.getElementById("input_barcode");

function barcode_logic(input) {
    JsBarcode("#barcode", `${input}`, {
        format: "code128",
        displayValue: false,
    });
}


let app = document.getElementById("app");
app.addEventListener("submit", (e) => {
    let svg = "";
    svg = `<svg id="barcode" class="my-5 block max-w-[100%] heigth-[auto]"></svg>`;
    e.preventDefault();
    if (input_barcode.value != "") {
        img_box.innerHTML = svg;
        barcode_logic(input_barcode.value)
    }
});


let donwload = document.getElementById("save");
donwload.addEventListener("click", () => {
    const svg = document.getElementById("barcode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "image.svg";
    a.click();

    URL.revokeObjectURL(url);
})