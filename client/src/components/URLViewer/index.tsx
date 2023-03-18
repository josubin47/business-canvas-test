import { URLViewerProps } from './type';

export default function URLViewer({ url }: URLViewerProps) {
  return (
    <iframe
      src={url}
      title="URL Viewer"
      width="100%"
      height="100%"
      allowFullScreen
    />
  );
}
