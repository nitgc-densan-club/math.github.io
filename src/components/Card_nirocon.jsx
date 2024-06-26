import "./Card_nirocon.css"

export function Card_nirocon({img_link, title, text}) {
    // 
    // メモ
    // 
    // props
    // |- 画像のURL ("https://raw.githubusercontent.com/nitgc-densan-club/tmp/main/no_image.jpg")
    // |- タイトル
    // |- テキスト
    // 
    // 
    // スタイル
    // .card
    // |- img
    // |  |- 画像が引き伸ばされずにフィットするように
    // |- h5
    // |  |- はみ出しを"..."に
    // |- p
    //    |- 4行改行したらはみ出しを"..."に
    // 
    // 
    // return
    // |- div class="card"
    //    |- img
    //    |- div
    //       |- h5
    //       |- p
    // 
    // 



    return (
        <div className="card">
            <img src={img_link} alt="..."/>
            <div>
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
        </div>
    )
}