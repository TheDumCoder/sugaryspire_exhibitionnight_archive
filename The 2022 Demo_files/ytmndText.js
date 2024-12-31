
ytmndText = (text, el_id = "zoom_text", top = 250, left = 250) => {
    let text_box = document.getElementById(el_id);

    for (let i = 1; i <= 30; i++) {
        let color_val = i === 30 ? 0 : i * 8;
        let text_shadow = i === 30 ? "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white" : "none";
        let new_div = `
            <div
                style="
                    z-index: 10${i};
                    top: ${top + i}px;
                    left: ${left + i}px;
                    color: rgb(${color_val}, ${color_val}, ${color_val});
                    font-size: ${i * 2}pt;
                    text-shadow: ${text_shadow};
                    position: absolute;
                "
            >
                ${text}
            </div>
        `;
        text_box.innerHTML += new_div;
    }
};