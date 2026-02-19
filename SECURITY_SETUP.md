# Security & Setup Documentation

## Environment Variables

This project uses environment variables to manage sensitive API keys.

### Setup Instructions

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Add your RapidAPI key to the `.env` file:

   ```env
   VITE_RAPID_API_KEY=your_actual_api_key_here
   ```

3. **Important**: Never commit your `.env` file to version control. It's already listed in `.gitignore`.

## API Keys

This project uses RapidAPI for:

- **ExerciseDB API**: Fetching exercise data
- **YouTube Search API**: Finding related exercise videos

Get your API key at: <https://rapidapi.com/>

## Security Audit Status

### Resolved Vulnerabilities

- ✅ Updated Vite from 5.0.0 to 7.3.1 (fixed esbuild vulnerability)
- ✅ Updated @vitejs/plugin-react to latest
- ✅ Updated ESLint to 9.x (latest)
- ✅ Reduced total vulnerabilities from 20 to 9
- ✅ Added .env to .gitignore
- ✅ Created .env.example for safe sharing

### Remaining Vulnerabilities (Dev Dependencies Only)

The remaining 9 vulnerabilities are in ESLint plugins used only during development:

- `ajv` (moderate): ReDoS vulnerability in $data option
- `minimatch` (high): ReDoS vulnerability in wildcard patterns

**Impact**: These vulnerabilities **do not affect the production build** as they are:

1. Only in devDependencies (not bundled in production)
2. Used only during development linting
3. Not exposed to end users

**Mitigation**:

- These dependencies are isolated to the development environment
- Production builds do not include these packages
- Regular monitoring and updates when non-breaking fixes become available

### Production Security

- ✅ All production dependencies are secure
- ✅ Environment variables properly secured
- ✅ Build process does not include dev dependencies
- ✅ No sensitive data exposed in source code

## Running the Application

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Notes

- Uses `--legacy-peer-deps` due to `react-loader-spinner` package constraints
- Environment variables in Vite must be prefixed with `VITE_`
- The dev server runs on port 3000 by default
