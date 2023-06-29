import React from "react";

export interface CardProps {
	  title: string;
	  description: string;
	  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
const Card = ({ title, description, Icon  }: CardProps) => (
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
				<Icon className="h-12 w-12 fill-current" />
              <div className="space-y-2">
                <h3 className="font-bold">{title}</h3>
                <p className="text-sm text-muted-foreground">
					{description}
                </p>
              </div>
            </div>
          </div>
);


Card.displayName = 'Card';


export { Card}