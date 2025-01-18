// import { Construct, App } from "@aws-cdk/core";
// import { MyRdsStack } from "../Db/rds-template"; // Import your RDS stack

// export class MyCdkStack extends Construct {
//   private myRdsStack?: MyRdsStack;

//   constructor(app: App, id: string) {
//     super(app, id);

//     // Create your RDS stack
//     this.createRdsStack();
//   }

//   // Method to create MyRdsStack
//   private createRdsStack(): void {
//     if (!this.myRdsStack) {
//       this.myRdsStack = new MyRdsStack(this, "MyRdsStack");
//     }
//   }
// }

// const app = new App();
// new MyCdkStack(app, "MyCdkStack");
