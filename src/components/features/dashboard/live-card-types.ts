// LiveCard.types.ts

export interface Location {
	lat: number;
	lng: number;
}

export interface DriverData {
	id: string;
	name: string;
	status: "en route" | "arrived" | "idle";
	eta: string; // formatted time string
	avatarUrl?: string;
}

// Mock Data
export const mockDriver: DriverData = {
	id: "1",
	name: "John",
	status: "en route",
	eta: "10:45 AM",
	avatarUrl: "https://i.pravatar.cc/150?u=john", // Placeholder avatar
};
