type Props = {
  schema: Record<string, unknown>
}

export default function StructuredData({ schema }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
