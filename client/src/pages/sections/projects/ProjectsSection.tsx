import ItemContainer from "../../../components/container/ItemContainer";
import Title from "../../../components/title/Title";
import { projects } from "../../../../data/data";
import { motion } from "framer-motion";

interface iProjectItemProps {
  data: {
    title: string;
    description: string;
    image?: string;
    link?: string;
    tech: string[];
    status: string;
  };
}

const ProjectItem = ({ data }: iProjectItemProps) => {
  const baseURL = import.meta.env.VITE_BASE_URL || "";

  return (
    <motion.div
    whileHover={{scale: 1.01}}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    >

      <ItemContainer>
        <div className="p-4 flex itemc-center flex-col">
          <div className="flex items-center justify-center">
            <img
              src={`${baseURL}/${data.image}`}
              alt="Project Image"
              className="object-contain"
              loading="lazy"
            />
          </div>
          <h3 className="text-center mt-4 font-bold text-3xl">
            {" "}
            {data.title}{" "}
          </h3>
          <div className="mt-4">
            Status:{" "}
            <span
              className={
                data.status === "Open" ? `text-green-600` : `text-red-700`
              }
            >
              {data.status}
            </span>
          </div>
          <p className="mt-4 mb-4">{data.description}</p>
          <div className="flex gap-4 flex-wrap w-full justify-start">
            {data.tech.map((item) => {
              return (
                <div className="border-2 border-black rounded-[8px] pl-2 pr-2 pt-1 pb-1">
                  {item}
                </div>
              );
            })}
          </div>

          <a
            href={`${data.link}`}
            className="hover:bg-blue-500 hover:text-white easy-linear duration-200 text-2xl text-center mt-4 rounded-[8px] border-blue-500 border ml-auto mr-auto w-[100px] text-blue-500"
          >
            {data.status === "Private" ? "Not" : "Git"}
          
          </a>
        </div>
      </ItemContainer>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <div className="mt-4">
      <Title title="Projects" />
      <div className="grid  md:grid-cols-2 sm: grid-cols-1 gap-5 mt-4">
        {projects.map((proj, i) => {
          return <ProjectItem key={i} data={proj} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
