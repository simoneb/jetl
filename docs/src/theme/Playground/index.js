import React from 'react'
import Playground from '@docusaurus/theme-live-codeblock/lib/theme/Playground'

export default function (props) {
  return (
    <Playground
      {...props}
      transformCode={code => `() => {
        const [result, setResult] = useState('Loading...')

        useEffect(() => {
          async function run() {
            ${code}
          }

          run().then(setResult, setResult)
        }, [])

        return result
      }`}
    />
  )
}
