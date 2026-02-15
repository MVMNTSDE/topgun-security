
import { login } from './actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
            <div className="text-center mb-8">
                <img 
                    src="/images/logo-full.png" 
                    alt="Topgun Security" 
                    className="h-12 mx-auto mb-4"
                />
                <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
                <p className="text-gray-500">Enter your credentials to access the dashboard.</p>
            </div>

            <form className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="admin@topgun-security.de" />
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" required />
                </div>

                <Button formAction={login} className="w-full">
                    Sign In
                </Button>
            </form>
        </div>
    </div>
  )
}
