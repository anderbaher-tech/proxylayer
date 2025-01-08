// import { Stack, StackProps } from "aws-cdk-lib";
// import * as rds from "aws-cdk-lib/aws-rds";
// import * as ec2 from "aws-cdk-lib/aws-ec2"; // Import EC2 module for VPC
// import { Construct, SecretValue } from "@aws-cdk/core";

// // import { Construct, SecretValue } from 'constructs';

// export class MyRdsStack extends Stack {
//   constructor(scope: Construct, id: string, props?: StackProps) {
//     super(scope, id, props);

//     // Create VPC
//     const vpc = new ec2.Vpc(this, "MyVPC", {
//       maxAzs: 2, // Specify the maximum number of availability zones for the VPC
//     });

//     const secret = new rds.DatabaseSecret(this, "MyDBSecret", {
//       username: "admin",
//       secretName: "MyDBSecret", // Name for the secret in Secrets Manager
//     });

//     // Define RDS instance
//     new rds.DatabaseInstance(this, "MyDBInstance", {
//       engine: rds.DatabaseInstanceEngine.postgres({
//         version: rds.PostgresEngineVersion.VER_12_7,
//       }),
//       instanceType: ec2.InstanceType.of(
//         ec2.InstanceClass.BURSTABLE2,
//         ec2.InstanceSize.MICRO
//       ),
//       allocatedStorage: 20,
//       credentials: {
//         username: "admin",
//         password: secret.secretValue, // Use the secret value as the password
//       },
//       vpc: vpc,
//       instanceIdentifier: "myDevDatabase",
//       publiclyAccessible: false,
//     });
//   }
// }
