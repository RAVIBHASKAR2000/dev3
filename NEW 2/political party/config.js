import { S3Adapter, LocalFileAdapter } from '@keystonejs/file-adapters';

export const port = process.env.PORT || 3200;
export const staticRoute = '/public'; // The URL portion
export const staticPath = 'public'; // The local path on disk
export const distDir = 'dist';

export const isDev = process.env.NODE_ENV !== 'production';

const s3Options = {
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  endpoint: process.env.S3_ENDPOINT,
  region: 'DUMMY',
};

const s3Adapter = new S3Adapter({
  bucket: process.env.S3_BUCKET,
  folder: process.env.S3_PATH,
  publicUrl: ({ id, filename, _meta }) =>
    `${process.env.S3_CDN_URL}/${process.env.S3_PATH}/${filename}`,
  s3Options,
  uploadParams: ({ filename, id, mimetype, encoding }) => ({
    ACL: 'public-read',
    Metadata: {
      keystone_id: `${id}`,
    },
  }),
});

const localFileAdapter = new LocalFileAdapter({
  src: `${isDev ? '' : `${distDir}/`}${staticPath}/uploads`,
  path: `${staticRoute}/uploads`,
});

export const fileAdapter = isDev ? localFileAdapter : s3Adapter;