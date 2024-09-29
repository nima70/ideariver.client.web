import { MDXRemote } from "next-mdx-remote/rsc";
import { listMdxFiles, serializeMdxFile } from "@/lib/mdxHelper";
import {
  AnnotationIcon,
  VideoCameraIcon,
  ChartSquareBarIcon,
  DeviceMobileIcon,
  ChatAlt2Icon,
  PresentationChartBarIcon,
} from "@heroicons/react/outline";

type ServiceProps = {
  params: {
    file: string;
  };
};
const icons: Record<string, JSX.Element> = {
  AnnotationIcon: <AnnotationIcon className="w-10 h-10 mr-2" />,
  VideoCameraIcon: <VideoCameraIcon className="w-10 h-10 mr-2" />,
  ChartSquareBarIcon: <ChartSquareBarIcon className="w-10 h-10 mr-2" />,
  DeviceMobileIcon: <DeviceMobileIcon className="w-10 h-10 mr-2" />,
  ChatAlt2Icon: <ChatAlt2Icon className="w-10 h-10 mr-2" />,
  PresentationChartBarIcon: (
    <PresentationChartBarIcon className="w-10 h-10 mr-2" />
  ),
};
export async function generateStaticParams() {
  return listMdxFiles("public/services");
}
const ServicePage = async ({ params }: ServiceProps) => {
  const { file } = params;
  const { source, frontMatter, raw } = await serializeMdxFile(
    file,
    "public/services"
  );
  const Icon = icons[frontMatter.icon] || null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50">
      <section className="bg-white py-16 w-full text-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-8 flex items-center justify-center">
          </h1>
          <article className="prose lg:prose-xl bg-white text-left mx-auto">
            <MDXRemote source={raw} />
          </article>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
