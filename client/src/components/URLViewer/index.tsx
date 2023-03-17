import { URLViewerProps } from './type';

export default function URLViewer({ url }: URLViewerProps) {
  return (
    <div>
      <iframe
        src={url}
        title="URL Viewer"
        width="800px"
        height="600px"
        allowFullScreen
      />
    </div>
  );
}
