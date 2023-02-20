import Header from "../../components/Homepage/firstHalf/HomePageOne";
import HomePageTwo from "../../components/Homepage/secondHalf/HomePageTwo";
import CardNumber from "../../components/Homepage/firstHalf/CardNumber";
import js from "../../assets/images/js-yellow.png";
import java from "../../assets/images/java-pink.png";
import cShrp from "../../assets/images/csharp-purpule.png";
import bootstrap from "../../assets/images/bootstrap-pur.png";
import { Link } from "react-router-dom";
import "./style/homepage.css";

function Homepage() {
  return (
    <div dir="rtl">
      <Header />
      <main dir="rtl">
        <section className="sec1-homepage min-h-screen  flex flex-col md:flex-row items-end justify-end gap-2 ">
          <CardNumber
            head="576 دانشجو"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          <CardNumber
            head="34 استاد"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          <CardNumber
            head="219 دوره"
            desc="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </section>
        <section className="flex flex-col lg:flex-row min-h-screen pb-28">
          <div className="lg:w-2/3 w-full flex justify-center items-center py-10 lg:py-0">
            <div className="border-gray-400 lg:border-1 border-none lg:w-[310px] w-[290px] min-h-[314px] relative flex flex-col gap-3">
              <div className="w-full lg:w-3/4 h-[70%] bg-[#F7DF1E] lg:absolute lg:top-2r lg:-left-1/2 flex flex-col justify-around items-center py-2">
                <img src={js} alt="js_course" className="w-1/2"></img>
                <Link
                  to="/course/70ce3ded-c3fd-46e9-9f6b-89ff5ca1c894"
                  className="text-slate-50 bg-[#0d5a5f] hover:bg-[#093d41] w-1/2 text-center rounded-md py-2 px-2">
                  مشاهده دوره
                </Link>
              </div>
              <div className="w-full lg:w-3/4 h-[70%] bg-[#CAB2EF] lg:absolute lg:-bottom-32 lg:-left-1/2 flex flex-col flex-grow justify-around items-center py-2">
                <img src={bootstrap} alt="bootstrap_course" className="w-1/2"></img>
                <Link
                  to="/course/56745e7f-9636-442b-b187-884dec92422b"
                  className="text-slate-50 bg-[#0d5a5f] hover:bg-[#093d41] w-1/2 text-center rounded-md py-2 px-2">
                  مشاهده دوره
                </Link>
              </div>
              <div className="w-full lg:w-[80%] h-1/2 bg-[#6A1577] lg:absolute lg:top-8 lg:right-[-40px] flex flex-col justify-around items-center py-2">
                <img src={cShrp} alt="charp_course" className="w-1/4"></img>
                <Link
                  to="/course/9d5470a7-729f-48e7-9624-c779564dc9e1"
                  className="text-slate-50 bg-[#0d5a5f] hover:bg-[#093d41] w-1/2 text-center rounded-md py-2 px-2">
                  مشاهده دوره
                </Link>
              </div>
              <div className="w-full lg:w-1/2 h-[70%] bg-[#FFC7F8] lg:absolute lg:-bottom-28 lg:right-[20px] flex flex-col justify-around items-center py-2">
                <img src={java} alt="java_course" className="w-1/2"></img>
                <Link
                  to="/course/0bbc798d-5c5f-417a-b987-7a795f427c99"
                  className="text-slate-50 bg-[#0d5a5f] hover:bg-[#093d41] w-1/2 text-center rounded-md py-2 px-2">
                  مشاهده دوره
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-20 justify-center items-end text-[#093d41] border-b-2 border-r-2 border-slate-300 pl-28 pr-14 pt-24 h-fit">
            <div className="flex flex-col gap-8 text-right">
              <h2 className="text-3xl font-bold">دوره های آموزشی</h2>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ ایپسوم متن
                ساختگی با تولید سادگی نامفهوم از صنعت چاپ ایپسوم متن ساختگی با
                تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
            <Link
              to="/courses"
              className="text-slate-50 bg-[#0d5a5f] hover:bg-[#093d41] py-4 px-8 -m-6 rounded-md">
              مشاهده دوره ها
            </Link>
          </div>
        </section>
        <section dir="ltr">
          <HomePageTwo />
        </section>
      </main>
    </div>
  );
}

export default Homepage;