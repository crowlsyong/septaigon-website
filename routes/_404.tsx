import { ErrorPageProps } from "$fresh/server.ts";

export default function Error404page({ error }: ErrorPageProps) {
  return <p>404 internal error: {(error as Error).message}</p>;
}