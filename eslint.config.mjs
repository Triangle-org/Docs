import nextConfig from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
    ...nextConfig,
    {
        ignores: ['.next/**', 'out/**', 'node_modules/**'],
    },
]

export default eslintConfig
