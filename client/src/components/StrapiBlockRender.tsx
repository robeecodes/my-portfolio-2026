import { BlocksRenderer } from "@strapi/blocks-react-renderer";

function StrapiBlockRender({ content }) {
  return <div>{content && <BlocksRenderer content={content} />}</div>;
}

export default StrapiBlockRender;
