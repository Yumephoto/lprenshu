"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Clock, MessageCircle, Phone, FileText, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function YumephotoLanding() {
  const heroRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    // Hero animation after 0.3s
    const heroTimer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add("hero-loaded")
      }
    }, 300)

    // Badge pulse animation after 1.3s (0.3s + 1s)
    const badgeTimer = setTimeout(() => {
      if (badgeRef.current) {
        badgeRef.current.classList.add("pulse-animation")
      }
    }, 1300)

    return () => {
      clearTimeout(heroTimer)
      clearTimeout(badgeTimer)
    }
  }, [])

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 md:h-20 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 shadow-sm">
        <Link className="flex items-center justify-center" href="https://www.sotsuenalbum.com/" target="_blank">
          <Image
            alt="夢ふぉとロゴ"
            className="h-8 md:h-12 w-auto"
            height="48"
            src="/images/yumephoto-logo-new.png"
            width="200"
          />
        </Link>
        <nav className="ml-auto hidden md:flex gap-8">
          <Link className="text-sm font-medium hover:text-pink-600 transition-colors" href="#features">
            サービス紹介
          </Link>
          <Link className="text-sm font-medium hover:text-pink-600 transition-colors" href="#voices">
            導入事例
          </Link>
          <Link className="text-sm font-medium hover:text-pink-600 transition-colors" href="#support">
            お問い合わせ
          </Link>
        </nav>
        <div className="ml-4 md:ml-6 flex gap-2 md:gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-pink-300 text-pink-600 hover:bg-pink-50 bg-transparent text-xs md:text-sm px-2 md:px-4"
            asChild
          >
            <Link href="https://www.yumephoto.com/contact/?campaign=lp_g" target="_blank">
              資料請求
            </Link>
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white shadow-lg text-xs md:text-sm px-2 md:px-4"
            asChild
          >
            <Link href="https://www.yumephoto.com/data/go-to-line.php" target="_blank">
              無料相談
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="w-full py-16 md:py-24 lg:py-32 relative overflow-hidden hero-section"
          style={{ backgroundColor: "#F4A6A6" }}
        >
          {/* Background illustration */}
          <div className="absolute inset-0 flex items-start justify-center pt-8 opacity-0 hero-bg">
            <Image
              alt="アルバム制作のイラスト"
              className="w-full max-w-4xl h-auto"
              height="400"
              src="/images/album-illustration.png"
              width="600"
              style={{ opacity: 0.15 }}
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10 max-w-4xl mx-auto">
            <div className="text-center">
              <div ref={badgeRef} className="mb-6 md:mb-8">
                <Badge className="bg-white text-pink-600 border-0 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium hover:bg-white hover:text-pink-600 hero-badge">
                  保育士・幼稚園教諭の皆様へ
                </Badge>
              </div>

              <div className="hero-content">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 md:mb-8">
                  <span className="text-gray-800">先生、今年も</span>
                  <br />
                  <span className="text-white">"家族より卒アル"</span>
                  <br />
                  <span className="text-gray-800">の冬、過ごしますか？</span>
                </h1>

                <div className="space-y-4 md:space-y-6 text-base md:text-lg text-white mb-8 md:mb-12">
                  <p className="font-medium" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                    ——保育士であり、母親でもあるあなたへ。
                  </p>
                  <p
                    className="leading-relaxed max-w-2xl mx-auto"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                  >
                    去年、園児一人ひとりの笑顔を思い浮かべながら、
                    <br />
                    写真を切り、並べ、貼って、
                    <br />
                    夜中に一人作業をしていませんでしたか？
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg mb-8 md:mb-12 max-w-2xl mx-auto">
                  <p className="text-pink-600 font-medium text-base md:text-lg leading-relaxed">
                    「ママ、またお仕事？」
                    <br />
                    そう聞かれた小さな声に、
                    <br />
                    ちょっとだけ心が揺れたこと、ありませんか？
                  </p>
                </div>

                <div className="bg-gradient-to-r from-pink-100/90 to-orange-100/90 backdrop-blur rounded-2xl p-6 md:p-8 shadow-lg mb-8 md:mb-12 max-w-3xl mx-auto">
                  <p className="text-gray-800 font-bold text-lg md:text-xl leading-relaxed">
                    "卒園アルバムをつくる"という大切な仕事を、
                    <br />
                    <span className="text-pink-600">"自分のすべて"を削ってやる必要は、もうありません。</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-lg mx-auto">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg shadow-lg"
                    asChild
                  >
                    <Link href="https://www.yumephoto.com/contact/?campaign=lp_g" target="_blank">
                      資料をダウンロードする
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg bg-transparent shadow-lg"
                    asChild
                  >
                    <Link href="https://www.yumephoto.com/data/go-to-line.php" target="_blank">
                      <Image
                        alt="LINE"
                        className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-6"
                        height="24"
                        src="/images/line-icon.png"
                        width="24"
                      />
                      LINEで相談する
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 共感セクション */}
        <section className="w-full py-12 md:py-20 lg:py-32 bg-white relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 md:mb-12">
                こんな経験、ありませんか？
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
                {/* Item 1 */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 md:h-8 w-6 md:w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      夜な夜な写真を切っては貼って、ふと時計を見ると
                      <span className="font-bold text-pink-600">深夜2時</span>
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 md:h-8 w-6 md:w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      自分の子どもに
                      <span className="font-bold text-pink-600">「いつも卒アルばかりだね」</span>
                      と言われてハッとした
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 md:h-8 w-6 md:w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      頑張って作ったのに、保護者には
                      <span className="font-bold text-pink-600">何の反応もなくて虚しかった</span>
                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 md:w-16 h-12 md:h-16 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="h-6 md:h-8 w-6 md:w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      年度末の一番忙しい時期に、アルバムに時間を取られ、
                      <span className="font-bold text-pink-600">保育に集中できなかった</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Dotted line separator */}
              <div className="border-t-2 border-dotted border-gray-400 my-8 md:my-12"></div>

              {/* Bottom message */}
              <div className="text-center mb-8 md:mb-12">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-2">終わった後に残ったのは、</p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-2">「達成感」ではなく</p>
                <p className="text-lg md:text-xl font-bold text-gray-800 leading-relaxed">
                  「もうやりたくない」の気持ち
                </p>
              </div>

              {/* Final message with decoration */}
              <div className="text-center relative py-8">
                {/* Title with decorations */}
                <div className="relative mb-6 md:mb-8 flex items-center justify-center gap-8 md:gap-12">
                  {/* Left decoration */}
                  <div className="flex-shrink-0">
                    <Image
                      alt="装飾"
                      className="w-12 md:w-16 h-auto opacity-80"
                      height="48"
                      src="/images/yellow-decoration.webp"
                      width="64"
                    />
                  </div>

                  {/* Center text */}
                  <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
                    先生、わたしたちは知っています。
                  </p>

                  {/* Right decoration */}
                  <div className="flex-shrink-0">
                    <Image
                      alt="装飾"
                      className="w-12 md:w-16 h-auto opacity-80 scale-x-[-1]"
                      height="48"
                      src="/images/yellow-decoration.webp"
                      width="64"
                    />
                  </div>
                </div>

                <p className="text-lg md:text-xl text-pink-600 font-bold leading-relaxed mb-6 md:mb-8">
                  その"頑張り"が、どれだけ愛情に満ちていたかを。
                </p>

                <div className="space-y-2 md:space-y-3">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    でも、それが"報われない労力"で終わるとしたら——
                  </p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    それは、あなたの想いが
                    <span className="font-bold text-pink-600">"届いていない"</span>
                    ということです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 理想提示セクション */}
        <section className="w-full py-12 md:py-20 lg:py-32 relative" style={{ backgroundColor: "#F4A6A6" }}>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-white text-pink-600 border-0 mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium pulse-animation hover:bg-white hover:text-pink-600">
                想いはそのまま、やり方だけ変える
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                <span className="block text-pink-600">"がんばらなくても、想いは届く"</span>
                <span className="block text-gray-800 mt-2">という提案</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
                <span className="block">夢ふぉとは、あなたの"手を動かす仕事"を減らし、</span>
                <span className="block mt-2 font-bold">
                  "心を込める仕事"に集中させてくれる卒園アルバム制作サービスです。
                </span>
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-12 md:mb-16">
              {/* 写真はAIで自動チェック */}
              <Card className="bg-white shadow-lg rounded-2xl border-0 p-6 md:p-8">
                <div className="text-center">
                  <div className="mx-auto w-60 md:w-72 h-60 md:h-72 flex items-center justify-center mb-4 md:mb-6">
                    <Image
                      alt="AIで写真チェックのイラスト"
                      className="w-full h-full object-contain cursor-pointer hover:opacity-80 transition-opacity"
                      height="288"
                      src="/images/ai-photo-check-new.png"
                      width="288"
                      onClick={() => handleImageClick("/images/ai-photo-check-new.png", "AIで写真チェックのイラスト")}
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">写真はAIで自動チェック</h3>
                  <p className="text-gray-600">写り忘れゼロ</p>
                </div>
              </Card>

              {/* ページデザインはテンプレ選択 */}
              <Card className="bg-white shadow-lg rounded-2xl border-0 p-6 md:p-8">
                <div className="text-center">
                  <div className="mx-auto w-60 md:w-72 h-60 md:h-72 flex items-center justify-center mb-4 md:mb-6">
                    <Image
                      alt="テンプレート選択のイラスト"
                      className="w-full h-full object-contain cursor-pointer hover:opacity-80 transition-opacity"
                      height="288"
                      src="/images/template-selection-interface.png"
                      width="288"
                      onClick={() =>
                        handleImageClick("/images/template-selection-interface.png", "テンプレート選択のイラスト")
                      }
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">
                    ページデザインはテンプレ選択
                  </h3>
                  <p className="text-gray-600">デザイン迷子卒業</p>
                </div>
              </Card>

              {/* コメントはクラウド編集 */}
              <Card className="bg-white shadow-lg rounded-2xl border-0 p-6 md:p-8">
                <div className="text-center">
                  <div className="mx-auto w-60 md:w-72 h-60 md:h-72 flex items-center justify-center mb-4 md:mb-6">
                    <Image
                      alt="コラボレーションのイラスト"
                      className="w-full h-full object-contain cursor-pointer hover:opacity-80 transition-opacity"
                      height="288"
                      src="/images/collaboration-new.jpg"
                      width="288"
                      onClick={() => handleImageClick("/images/collaboration-new.jpg", "コラボレーションのイラスト")}
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">コメントはオンラインで共同編集</h3>
                  <p className="text-gray-600">他の先生と協力できる</p>
                </div>
              </Card>

              {/* 手書きのような温かみ */}
              <Card className="bg-white shadow-lg rounded-2xl border-0 p-6 md:p-8">
                <div className="text-center">
                  <div className="mx-auto w-60 md:w-72 h-60 md:h-72 flex items-center justify-center mb-4 md:mb-6">
                    <Image
                      alt="手書きのイラスト"
                      className="w-full h-full object-contain cursor-pointer hover:opacity-80 transition-opacity"
                      height="288"
                      src="/images/handwriting-new.jpg"
                      width="288"
                      onClick={() => handleImageClick("/images/handwriting-new.jpg", "手書きのイラスト")}
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 md:mb-3">手書きのような温かみ</h3>
                  <p className="text-gray-600">"らしさ"を残せる構成</p>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-6 md:p-10 rounded-3xl shadow-lg max-w-5xl mx-auto border border-pink-200">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-relaxed">
                  <span className="block">子どもたちの笑顔を未来に残す——その目的はそのままに、</span>
                  <span className="block mt-2 text-pink-600">"無理のない形"で叶える方法が、ここにあります。</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 機能比較セクション */}
        <section
          id="features"
          className="w-full py-12 md:py-20 lg:py-32 bg-gradient-to-r from-pink-50 to-orange-50 relative"
        >
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8 leading-tight">
                <span className="block">先生の悩みを、</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                  すべて解決します！
                </span>
              </h2>
            </div>

            <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
              {/* 2x2 Grid of problem-solution pairs */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Problem 1: 写真の現像が大変すぎる */}
                <div className="space-y-4">
                  {/* Problem bubble */}
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl relative">
                    <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-red-400"></div>
                    <h3 className="text-lg md:text-xl font-bold mb-3">写真の現像が大変すぎる！</h3>
                    <p className="text-sm md:text-base leading-relaxed">
                      何度もお店に行って、現像→選別→やり直し…時間もお金も消える日々
                    </p>
                  </div>

                  {/* Solution box */}
                  <div className="bg-white border-2 border-red-200 p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Image alt="矢印" className="w-6 h-6" height="24" src="/images/pink-arrow.png" width="24" />
                      <p className="text-red-600 font-medium text-sm md:text-base">夢ふぉとの機能を使うと…</p>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                      クラウドで一括アップロード＋AIで選別補助
                    </h4>
                    <div className="flex items-start gap-3">
                      <Image
                        alt="電球"
                        className="w-6 h-6 mt-1 flex-shrink-0"
                        height="24"
                        src="/images/pink-lightbulb.png"
                        width="24"
                      />
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        写真を選ぶ・現像する二度手間ゼロ／費用も不要に！
                      </p>
                    </div>
                  </div>
                </div>

                {/* Problem 2: 一人で黙々とやるのが当たり前だった */}
                <div className="space-y-4">
                  {/* Problem bubble */}
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl relative">
                    <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-red-400"></div>
                    <h3 className="text-lg md:text-xl font-bold mb-3">一人で黙々とやるのが当たり前だった！</h3>
                    <p className="text-sm md:text-base leading-relaxed">
                      職員室に残るのはいつも私。家でも、夜なべでペタペタ…
                    </p>
                  </div>

                  {/* Solution box */}
                  <div className="bg-white border-2 border-red-200 p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Image alt="矢印" className="w-6 h-6" height="24" src="/images/pink-arrow.png" width="24" />
                      <p className="text-red-600 font-medium text-sm md:text-base">夢ふぉとの機能を使うと…</p>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3">クラウド共有＆分担作業</h4>
                    <div className="flex items-start gap-3">
                      <Image
                        alt="電球"
                        className="w-6 h-6 mt-1 flex-shrink-0"
                        height="24"
                        src="/images/pink-lightbulb.png"
                        width="24"
                      />
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        園全体で協力できる体制に！無理なく分担できる！
                      </p>
                    </div>
                  </div>
                </div>

                {/* Problem 3: 手作り感だけはどうしても捨てたくない */}
                <div className="space-y-4">
                  {/* Problem bubble */}
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl relative">
                    <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-red-400"></div>
                    <h3 className="text-lg md:text-xl font-bold mb-3">手作り感だけはどうしても捨てたくない！</h3>
                    <p className="text-sm md:text-base leading-relaxed">
                      "全部テンプレ"では、私の気持ちが乗らない気がして…
                    </p>
                  </div>

                  {/* Solution box */}
                  <div className="bg-white border-2 border-red-200 p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Image alt="矢印" className="w-6 h-6" height="24" src="/images/pink-arrow.png" width="24" />
                      <p className="text-red-600 font-medium text-sm md:text-base">夢ふぉとの機能を使うと…</p>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                      パーソナルページ構成／コメントも手書き風
                    </h4>
                    <div className="flex items-start gap-3">
                      <Image
                        alt="電球"
                        className="w-6 h-6 mt-1 flex-shrink-0"
                        height="24"
                        src="/images/pink-lightbulb.png"
                        width="24"
                      />
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        "その子らしさ"をちゃんと残せて、愛情も伝わる！
                      </p>
                    </div>
                  </div>
                </div>

                {/* Problem 4: 作業の見通しが立たない */}
                <div className="space-y-4">
                  {/* Problem bubble */}
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl relative">
                    <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-red-400"></div>
                    <h3 className="text-lg md:text-xl font-bold mb-3">
                      作業の見通しが立たず、ギリギリまで終わらない！
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">いつから始めて、何をどこまで終わらせれば…？</p>
                  </div>

                  {/* Solution box */}
                  <div className="bg-white border-2 border-red-200 p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Image alt="矢印" className="w-6 h-6" height="24" src="/images/pink-arrow.png" width="24" />
                      <p className="text-red-600 font-medium text-sm md:text-base">夢ふぉとの機能を使うと…</p>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                      スケジュール設計機能＆仕上がり確認
                    </h4>
                    <div className="flex items-start gap-3">
                      <Image
                        alt="電球"
                        className="w-6 h-6 mt-1 flex-shrink-0"
                        height="24"
                        src="/images/pink-lightbulb.png"
                        width="24"
                      />
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        段取りが可視化されて、"終わる未来"が見える！
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom message */}
            <div className="text-center mt-12 md:mt-16">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 md:p-8 rounded-3xl shadow-2xl max-w-5xl mx-auto">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed">
                  夢ふぉとは、先生の「できたらいいな」を、すべて叶える設計です。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* お客様の声セクション */}
        <section id="voices" className="w-full py-12 md:py-20 lg:py-32 relative" style={{ backgroundColor: "#F4A6A6" }}>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <Badge className="bg-white text-red-600 border-0 mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium pulse-animation hover:bg-white hover:text-red-600">
                導入事例
              </Badge>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8 leading-tight"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                実際に使った先生方の声
              </h2>
              <p
                className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
              >
                <span className="block">全国の保育園・幼稚園で</span>
                <span className="block">夢ふぉとを導入いただいた先生方の</span>
                <span className="block">生の声をお聞きください</span>
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-6xl mx-auto mb-12 md:mb-16">
              {/* Testimonial 1 - 家族との時間 */}
              <Card className="bg-white shadow-xl rounded-3xl border-0 p-6 md:p-8 relative">
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  家庭時間の確保／先生も"母親"としての時間を守れる
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <Image
                      alt="家族での夕食のイラスト"
                      className="w-20 md:w-24 h-16 md:h-20 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                      height="80"
                      src="/images/family-time-new.jpg"
                      width="96"
                      onClick={() => handleImageClick("/images/family-time-new.jpg", "家族での夕食のイラスト")}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                      "またアルバム？"と娘に言われて胸が痛かった去年。でも今年は、毎晩一緒に夕飯を食べられてるんです
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-500 rounded-full relative">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-white rounded-t-full"></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">東京都</p>
                    <p className="text-xs md:text-sm text-gray-600">保育補助・小学生ママ</p>
                  </div>
                </div>
              </Card>

              {/* Testimonial 2 - 現像作業から解放 */}
              <Card className="bg-white shadow-xl rounded-3xl border-0 p-6 md:p-8 relative">
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  現像作業の手間・コスト削減／"想定外"のラクさ
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 md:w-24 h-16 md:h-20 grid grid-cols-2 gap-1">
                      <Image
                        alt="アップロード画面1"
                        className="w-full h-full object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        height="40"
                        src="/images/upload-screen1.png"
                        width="48"
                        onClick={() => handleImageClick("/images/upload-screen1.png", "アップロード画面1")}
                      />
                      <Image
                        alt="アップロード画面2"
                        className="w-full h-full object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                        height="40"
                        src="/images/upload-screen2.png"
                        width="48"
                        onClick={() => handleImageClick("/images/upload-screen2.png", "アップロード画面2")}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                      毎回コンビニで写真を現像して選び直して…気づけば5回も行ってました。それが、パソコンだけで完了したのには正直驚きました
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-500 rounded-full relative">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-white rounded-t-full"></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">神奈川県</p>
                    <p className="text-xs md:text-sm text-gray-600">30代保育士ママ</p>
                  </div>
                </div>
              </Card>

              {/* Testimonial 3 - 時短効果 */}
              <Card className="bg-white shadow-xl rounded-3xl border-0 p-6 md:p-8 relative">
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  時短・余裕・先生のやりたい本来の仕事へフォーカス
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <Image
                      alt="母親と子どもが遊んでいるイラスト"
                      className="w-20 md:w-24 h-16 md:h-20 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                      height="80"
                      src="/images/writing-time.jpg"
                      width="96"
                      onClick={() => handleImageClick("/images/writing-time.jpg", "母親と子どもが遊んでいるイラスト")}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                      「卒園式の朝まで作っていた去年と比べて、夢ふぉとに変えた今年は、2月中旬に完成！その分、卒園式の手紙を丁寧に書けました」
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-500 rounded-full relative">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-white rounded-t-full"></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">埼玉県</p>
                    <p className="text-xs md:text-sm text-gray-600">主任保育士</p>
                  </div>
                </div>
              </Card>

              {/* Testimonial 4 - 保護者に喜ばれた */}
              <Card className="bg-white shadow-xl rounded-3xl border-0 p-6 md:p-8 relative">
                <div className="bg-gradient-to-r from-red-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                  パーソナル性×感謝される経験＝"仕事の誇り"形成
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <Image
                      alt="母親と子どもが手紙を読むイラスト"
                      className="w-20 md:w-24 h-16 md:h-20 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                      height="80"
                      src="/images/grateful-parent.png"
                      width="96"
                      onClick={() =>
                        handleImageClick("/images/grateful-parent.png", "母親と子どもが手紙を読むイラスト")
                      }
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                      "このページ、うちの子らしさが出ててすごく嬉しいです"って保護者に言ってもらえて、本当に報われました
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-500 rounded-full relative">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-white rounded-t-full"></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">兵庫県</p>
                    <p className="text-xs md:text-sm text-gray-600">保育士（アルバム担当2年目）</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Statistics */}
            <div className="text-center">
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl max-w-4xl mx-auto">
                <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
                  <div>
                    <div className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-500 mb-2 md:mb-3">
                      4,000園+
                    </div>
                    <p className="text-gray-700 font-medium text-xs md:text-base">年間導入実績</p>
                  </div>
                  <div>
                    <div className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-2 md:mb-3">
                      92%
                    </div>
                    <p className="text-gray-700 font-medium text-xs md:text-base">満足度</p>
                  </div>
                  <div>
                    <div className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500 mb-2 md:mb-3">
                      87%
                    </div>
                    <p className="text-gray-700 font-medium text-xs md:text-base">リピート率</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-12">
                <p
                  className="text-xl md:text-2xl text-white font-bold leading-relaxed"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
                >
                  <span className="block">"いますぐ決めなくてもいい"からこそ、</span>
                  <span className="block">まずは知ってください。</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 行動喚起セクション */}
        <section
          id="support"
          className="w-full py-12 md:py-20 lg:py-32 relative"
          style={{ backgroundColor: "#F4A6A6" }}
        >
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="text-center bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
                <CardHeader className="pb-4 md:pb-6">
                  <div className="mx-auto w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                    <FileText className="h-8 md:h-10 w-8 md:w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-2 md:mb-3 font-bold">資料請求</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-tight">
                    <span className="block">わかりやすい</span>
                    <span className="block">卒園アルバムまるわかり資料</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white py-3 md:py-4 text-base md:text-lg shadow-lg"
                    asChild
                  >
                    <Link href="https://www.yumephoto.com/contact/?campaign=lp_g" target="_blank">
                      資料請求
                    </Link>
                  </Button>
                  <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-3 font-medium">お問い合わせ無料</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
                <CardHeader className="pb-4 md:pb-6">
                  <div className="mx-auto w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                    <Image
                      alt="LINE"
                      className="h-8 md:h-10 w-8 md:w-10 text-white"
                      height="32"
                      src="/images/line-icon.png"
                      width="32"
                    />
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-2 md:mb-3 font-bold">LINE相談</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-tight">
                    <span className="block">1問から気軽に</span>
                    <span className="block">相談できます</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white py-3 md:py-4 text-base md:text-lg shadow-lg"
                    asChild
                  >
                    <Link href="https://www.yumephoto.com/data/go-to-line.php" target="_blank">
                      LINEで相談する
                    </Link>
                  </Button>
                  <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-3 font-medium">
                    24時間受付（対応は営業時間内）
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center bg-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0">
                <CardHeader className="pb-4 md:pb-6">
                  <div className="mx-auto w-16 md:w-20 h-16 md:h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-lg">
                    <Phone className="h-8 md:h-10 w-8 md:w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-2 md:mb-3 font-bold">電話相談</CardTitle>
                  <CardDescription className="text-base md:text-lg leading-tight">
                    <span className="block">専門スタッフが</span>
                    <span className="block">直接お答えします</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white py-3 md:py-4 text-base md:text-lg shadow-lg">
                    <a href="tel:0120-927-928" className="w-full h-full flex items-center justify-center">
                      電話で相談する
                    </a>
                  </Button>
                  <p className="text-xs md:text-sm text-gray-500 mt-2 md:mt-3 font-medium">平日9:00-18:00</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 md:mt-16">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <span className="font-bold block">「まだ担当が決まってないんです」</span>
                <span className="block mt-2">→ それでも、</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 font-bold">
                  "今知っておく"だけで、来年のあなたは変わります。
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* クロージングセクション */}
        <section className="w-full py-12 md:py-20 lg:py-32 bg-gradient-to-br from-pink-100 to-orange-100 relative">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-8 md:mb-12 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                  "報われない頑張り"
                </span>
                <span className="block">から、卒業しませんか？</span>
              </h2>

              <div className="space-y-6 md:space-y-8 text-lg md:text-xl lg:text-2xl text-gray-700 mb-12 md:mb-16">
                <p className="leading-relaxed">
                  <span className="block">卒園アルバムは、</span>
                  <span className="block">子どもたちが</span>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                    "愛されていた証"
                  </span>
                  <span>として手に取る一冊です。</span>
                </p>

                <p className="leading-relaxed">
                  <span className="block">でも、</span>
                  <span className="block">そのために、先生自身が自分の子どもや生活を犠牲にしているとしたら、</span>
                  <span className="block">それは本末転倒かもしれません。</span>
                </p>

                <p className="leading-relaxed">
                  <span className="block">夢ふぉとは、あなたの</span>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
                    "優しさ"を、きちんとカタチにする
                  </span>
                  <span className="block">お手伝いをする道具です。</span>
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-500 to-red-300 text-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-5xl mx-auto mb-12 md:mb-16">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 md:mb-6">
                  "想い"は、削らなくても届く。
                </p>
                <p className="text-xl md:text-2xl leading-relaxed text-black">
                  今年のあなたには、その選択肢があることを知ってほしいのです。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl shadow-2xl hover:shadow-3xl transition-all"
                  asChild
                >
                  <Link href="https://www.yumephoto.com/contact/?campaign=lp_g" target="_blank">
                    <FileText className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-5" />
                    <span className="hidden sm:inline">{"とりあえず資料が欲しい！"}</span>
                    <span className="sm:hidden">資料ダウンロード</span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl bg-white/90 backdrop-blur shadow-2xl"
                  asChild
                >
                  <Link href="https://www.yumephoto.com/data/go-to-line.php" target="_blank">
                    <Image
                      alt="LINE"
                      className="mr-2 md:mr-3 h-5 md:h-6 w-5 md:w-6"
                      height="20"
                      src="/images/line-icon.png"
                      width="20"
                    />
                    <span className="hidden sm:inline">LINEで気軽に相談したい！</span>
                    <span className="sm:hidden">LINE相談</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 md:py-16 bg-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <Link href="https://www.sotsuenalbum.com/" target="_blank">
                <Image
                  alt="夢ふぉとロゴ"
                  className="h-12 md:h-16 w-auto hover:opacity-80 transition-opacity"
                  height="64"
                  src="/images/yumephoto-logo-new.png"
                  width="200"
                />
              </Link>
            </div>
            <p className="text-gray-300 text-base md:text-lg mb-3 md:mb-4">思い出で人の心の温度を1℃上げます。</p>
            <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base leading-relaxed">
              <span className="block">株式会社夢ふぉと（1998年設立）</span>
              <span className="block">大阪市中央区本社 | 年間10万冊以上の制作実績</span>
            </p>
            <div className="border-t border-gray-700 pt-6 md:pt-8">
              <p className="text-xs md:text-sm text-gray-400">© 2024 株式会社夢ふぉと All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
            >
              ✕
            </button>
            <Image
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain"
              height="800"
              src={selectedImage.src || "/placeholder.svg"}
              width="800"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        /* Hero animations */
        .hero-section {
          opacity: 0;
          transition: opacity 0.8s ease-out;
        }
        
        .hero-section.hero-loaded {
          opacity: 1;
        }
        
        .hero-bg {
          transition: opacity 0.8s ease-out 0.3s;
        }
        
        .hero-loaded .hero-bg {
          opacity: 1 !important;
        }
        
        .hero-content {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out 0.3s, transform 0.8s ease-out 0.3s;
        }
        
        .hero-loaded .hero-content {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-badge {
          transition: transform 0.3s ease-in-out;
        }
        
        .pulse-animation {
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.03);
          }
        }
      `}</style>
    </div>
  )
}
