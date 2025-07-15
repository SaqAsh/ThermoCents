import { useState } from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, Clock, DollarSign } from "lucide-react";

type TimeOfUseData = {
	id: number;
	period: string;
	timeRange: string;
	rate: number;
	kWh: number;
	cost: number;
	percentage: number;
	type: "peak" | "off-peak" | "super-off-peak";
};
// Get this from the server
const mockPeakOffPeakData = [
	{
		id: 1,
		period: "Peak",
		timeRange: "4:00 PM - 9:00 PM",
		rate: 0.32,
		kWh: 45.2,
		cost: 14.46,
		percentage: 35,
		type: "peak" as const,
	},
	{
		id: 2,
		period: "Off-Peak",
		timeRange: "9:00 PM - 4:00 PM",
		rate: 0.18,
		kWh: 84.3,
		cost: 15.17,
		percentage: 65,
		type: "off-peak" as const,
	},
	{
		id: 3,
		period: "Super Off-Peak",
		timeRange: "12:00 AM - 6:00 AM",
		rate: 0.12,
		kWh: 28.1,
		cost: 3.37,
		percentage: 22,
		type: "super-off-peak" as const,
	},
];

type SortField = "period" | "rate" | "kWh" | "cost";
type SortDirection = "asc" | "desc";
type TimeOfUseTableProps = {
	timeOfUseData: TimeOfUseData[];
};
export function PeakOffPeakTable({ timeOfUseData }: TimeOfUseTableProps) {
	const [sortField, setSortField] = useState<SortField>("cost");
	const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

	// TODO: Implement real sorting logic
	const handleSort = (field: SortField) => {
		if (sortField === field) {
			setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		} else {
			setSortField(field);
			setSortDirection("desc");
		}

		alert(
			`Sorting by ${field} ${
				sortDirection === "asc" ? "desc" : "asc"
			} - TODO: Implement real sorting`
		);
	};

	// TODO: Add row click handlers
	const handleRowClick = (row: TimeOfUseData) => {
		alert(
			`Clicked on ${row.period} period - TODO: Show detailed breakdown for ${row.timeRange}`
		);
	};

	const getBadgeVariant = (type: string) => {
		switch (type) {
			case "peak":
				return "destructive";
			case "off-peak":
				return "secondary";
			case "super-off-peak":
				return "default";
			default:
				return "secondary";
		}
	};

	return (
		<div className="space-y-4">
			<div className="rounded-md border border-green-500/20">
				<Table>
					<TableHeader>
						<TableRow className="border-green-500/20">
							<TableHead>
								<Button
									variant="ghost"
									onClick={() => handleSort("period")}
									className="h-auto p-0 font-semibold hover:text-green-500"
								>
									Period
									<ArrowUpDown className="ml-2 h-4 w-4" />
								</Button>
							</TableHead>
							<TableHead>
								<div className="flex items-center space-x-2">
									<Clock className="h-4 w-4 text-green-500" />
									<span>Time Range</span>
								</div>
							</TableHead>
							<TableHead>
								<Button
									variant="ghost"
									onClick={() => handleSort("rate")}
									className="h-auto p-0 font-semibold hover:text-green-500"
								>
									Rate ($/kWh)
									<ArrowUpDown className="ml-2 h-4 w-4" />
								</Button>
							</TableHead>
							<TableHead>
								<Button
									variant="ghost"
									onClick={() => handleSort("kWh")}
									className="h-auto p-0 font-semibold hover:text-green-500"
								>
									Usage (kWh)
									<ArrowUpDown className="ml-2 h-4 w-4" />
								</Button>
							</TableHead>
							<TableHead>
								<Button
									variant="ghost"
									onClick={() => handleSort("cost")}
									className="h-auto p-0 font-semibold hover:text-green-500"
								>
									<DollarSign className="h-4 w-4 mr-1" />
									Cost
									<ArrowUpDown className="ml-2 h-4 w-4" />
								</Button>
							</TableHead>
							<TableHead>Usage %</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{mockPeakOffPeakData.map((row) => (
							<TableRow
								key={row.id}
								className="cursor-pointer hover:bg-green-500/5 border-green-500/10"
								onClick={() => handleRowClick(row)}
							>
								<TableCell>
									<Badge variant={getBadgeVariant(row.type)}>
										{row.period}
									</Badge>
								</TableCell>
								<TableCell className="font-mono text-sm">
									{row.timeRange}
								</TableCell>
								<TableCell className="font-semibold">
									${row.rate.toFixed(2)}
								</TableCell>
								<TableCell className="font-semibold">
									{row.kWh.toFixed(1)}
								</TableCell>
								<TableCell className="font-semibold text-green-600">
									${row.cost.toFixed(2)}
								</TableCell>
								<TableCell>
									<div className="flex items-center space-x-2">
										<div className="w-12 bg-muted rounded-full h-2">
											<div
												className="bg-green-500 h-2 rounded-full"
												style={{
													width: `${row.percentage}%`,
												}}
											/>
										</div>
										<span className="text-sm font-medium">
											{row.percentage}%
										</span>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			{/* Summary */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-green-500/5 rounded-lg border border-green-500/20">
				<div className="text-center">
					<div className="text-lg font-bold text-green-600">
						$
						{mockPeakOffPeakData
							.reduce((sum, row) => sum + row.cost, 0)
							.toFixed(2)}
					</div>
					<div className="text-sm text-muted-foreground">
						Total Weekly Cost
					</div>
				</div>
				<div className="text-center">
					<div className="text-lg font-bold text-green-600">
						{mockPeakOffPeakData
							.reduce((sum, row) => sum + row.kWh, 0)
							.toFixed(1)}{" "}
						kWh
					</div>
					<div className="text-sm text-muted-foreground">
						Total Usage
					</div>
				</div>
				<div className="text-center">
					<div className="text-lg font-bold text-green-600">
						$0.21
					</div>
					<div className="text-sm text-muted-foreground">
						Avg Rate
					</div>
				</div>
			</div>
		</div>
	);
}
