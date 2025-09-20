import { createOrder } from "@/actions/SubmitAction";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
export default function OrderForm({ isOpen, setIsOpen }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-2xl">
        <DialogHeader className="text-center pb-6">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🛍️ Place Your Order
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-base">
            Fill in your details below and we&apos;ll get your order ready!
          </DialogDescription>
        </DialogHeader>
        <form action={createOrder} className="grid gap-6">
          {/* Customer Name */}
          <div className="relative">
            <Label
              htmlFor="name"
              className="flex items-center gap-2 text-gray-700 font-medium mb-2"
            >
              <span className="text-blue-500">👤</span> Full Name *
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="border-2 border-gray-200 focus:border-blue-400 rounded-xl px-4 py-3 transition-all duration-200 hover:border-gray-300"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <Label
              htmlFor="phone"
              className="flex items-center gap-2 text-gray-700 font-medium mb-2"
            >
              <span className="text-green-500">📱</span> Phone Number *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="01XXXXXXXXX"
              className="border-2 border-gray-200 focus:border-green-400 rounded-xl px-4 py-3 transition-all duration-200 hover:border-gray-300"
              required
            />
          </div>

          {/* Address */}
          <div className="relative">
            <Label
              htmlFor="address"
              className="flex items-center gap-2 text-gray-700 font-medium mb-2"
            >
              <span className="text-red-500">📍</span> Delivery Address *
            </Label>
            <textarea
              id="address"
              name="address"
              className="min-h-[80px] w-full rounded-xl border-2 border-gray-200 focus:border-red-400 bg-white px-4 py-3 text-sm transition-all duration-200 hover:border-gray-300 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200"
              placeholder="House/Flat No, Road No, Area, Thana, District"
              required
            />
          </div>

          {/* Area/Location */}
          <div className="relative">
            <Label
              htmlFor="area"
              className="flex items-center gap-2 text-gray-700 font-medium mb-2"
            >
              <span className="text-purple-500">🌍</span> City/Area *
            </Label>
            <Input
              id="area"
              name="area"
              placeholder="e.g. Dhaka, Chittagong, Sylhet"
              className="border-2 border-gray-200 focus:border-purple-400 rounded-xl px-4 py-3 transition-all duration-200 hover:border-gray-300"
              required
            />
          </div>

          {/* Special Instructions */}
          <div className="relative">
            <Label
              htmlFor="notes"
              className="flex items-center gap-2 text-gray-700 font-medium mb-2"
            >
              <span className="text-teal-500">💬</span> Special Instructions
            </Label>
            <textarea
              id="notes"
              name="notes"
              className="min-h-[50px] w-full rounded-xl border-2 border-gray-200 focus:border-teal-400 bg-white px-4 py-3 text-sm transition-all duration-200 hover:border-gray-300 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200"
              placeholder="Any special requests or delivery instructions..."
            />
          </div>

          <DialogFooter className="gap-3 pt-4">
            <DialogClose asChild>
              <Button
                variant="outline"
                className="px-6 py-3 rounded-xl border-2 hover:bg-gray-50 transition-all duration-200"
              >
                ❌ Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              ✅ Confirm Order
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
