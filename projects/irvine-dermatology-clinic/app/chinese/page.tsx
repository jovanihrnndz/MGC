import { Metadata } from "next"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "中文服务 - Chinese Speaking Dermatologist Irvine",
  description: "李医生是一位获得委员会认证的皮肤科医生，在加利福尼亚州尔湾市提供全面的皮肤护理服务。Chinese speaking dermatologist in Irvine, CA offering medical dermatology, cosmetic treatments, and skin cancer care.",
  keywords: ["Chinese dermatologist Irvine", "中文皮肤科", "华人皮肤科医生", "Chinese speaking skin doctor", "Mandarin dermatologist Orange County", "李医生皮肤科"],
  openGraph: {
    title: "中文服务 - Chinese Speaking Dermatologist Irvine",
    description: "Chinese speaking dermatologist in Irvine, CA. Dr. Gary Lee provides medical dermatology, cosmetic treatments, and skin cancer care with Chinese language services.",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "/chinese",
    languages: {
      "zh-CN": "/chinese",
      "en-US": "/",
    },
  },
}

const services = [
  "一般皮肤科",
  "皮肤癌筛查与治疗",
  "痤疮治疗",
  "湿疹和牛皮癣治疗",
  "美容皮肤科",
  "肉毒杆菌和填充剂",
]

const hours = [
  { day: "周一至周四", time: "上午8:00 - 下午5:00" },
  { day: "周五", time: "上午8:00 - 下午3:00" },
  { day: "周六", time: "上午9:00 - 下午1:00" },
  { day: "周日", time: "休息" },
]

export default function ChinesePage() {
  return (
    <>
      <TopBar />
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="flex flex-col gap-6">
                <div className="inline-flex w-fit items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  中文服务
                </div>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  欢迎来到李医生皮肤科诊所
                </h1>
                <p className="max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
                  李医生是一位获得委员会认证的皮肤科医生，在加利福尼亚州尔湾市为患者提供全面的皮肤护理服务。
                  我们提供中文服务，致力于为您提供最优质的皮肤健康护理。
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="gap-2" asChild>
                    <a href="tel:+19495551234">
                      <Phone className="h-4 w-4" />
                      预约咨询
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/contact">
                      联系我们
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
                <Image
                  src="/images/doctor-portrait.jpg"
                  alt="李医生 - 委员会认证皮肤科医生"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-background py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                我们的服务
              </p>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
                全面的皮肤科服务
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
                从常规皮肤检查到先进的美容程序，我们提供全方位的皮肤科服务，根据您的个人需求量身定制。
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <Card>
                <CardContent className="p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {services.map((service) => (
                      <div key={service} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                        <span className="text-foreground">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact & Hours */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
                联系我们
              </p>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
                诊所信息
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    诊所地址
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground">Gary Lee MD Dermatology</p>
                  <p className="text-muted-foreground">16300 Sand Canyon Ave, Suite 610</p>
                  <p className="text-muted-foreground">Irvine, CA 92618</p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    位于Sand Canyon医疗广场，提供免费停车。
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    联系方式
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="font-medium text-foreground">电话</p>
                      <a href="tel:+19495551234" className="text-muted-foreground hover:text-primary">
                        (949) 555-1234
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">电子邮件</p>
                      <a href="mailto:info@garyleemd.com" className="text-muted-foreground hover:text-primary">
                        info@garyleemd.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    营业时间
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {hours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between">
                        <span className="text-muted-foreground">{schedule.day}</span>
                        <span className="font-medium text-foreground">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Chinese CTA */}
        <section className="bg-primary py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
              准备好预约了吗？
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-primary-foreground/90">
              迈出迈向健康皮肤的第一步。立即预约，体验来自委员会认证专家的个性化皮肤科护理。
              我们提供中文服务。
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a href="tel:+19495551234">
                  <Phone className="h-4 w-4" />
                  立即致电预约
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <a href="mailto:info@garyleemd.com">
                  <Mail className="h-4 w-4" />
                  发送电子邮件
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
