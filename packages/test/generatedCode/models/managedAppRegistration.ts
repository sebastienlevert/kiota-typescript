import {Entity, ManagedAppOperation, ManagedAppPolicy, MobileAppIdentifier} from './index';
import {ManagedAppFlaggedReason} from './managedAppFlaggedReason';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppRegistration extends Entity, Partial<Parsable> {
    /** The app package Identifier */
    appIdentifier?: MobileAppIdentifier;
    /** App version */
    applicationVersion?: string;
    /** Zero or more policys already applied on the registered app when it last synchronized with managment service. */
    appliedPolicies?: ManagedAppPolicy[];
    /** Date and time of creation */
    createdDateTime?: Date;
    /** Host device name */
    deviceName?: string;
    /** App management SDK generated tag, which helps relate apps hosted on the same device. Not guaranteed to relate apps in all conditions. */
    deviceTag?: string;
    /** Host device type */
    deviceType?: string;
    /** Zero or more reasons an app registration is flagged. E.g. app running on rooted device */
    flaggedReasons?: ManagedAppFlaggedReason[];
    /** Zero or more policies admin intended for the app as of now. */
    intendedPolicies?: ManagedAppPolicy[];
    /** Date and time of last the app synced with management service. */
    lastSyncDateTime?: Date;
    /** App management SDK version */
    managementSdkVersion?: string;
    /** Zero or more long running operations triggered on the app registration. */
    operations?: ManagedAppOperation[];
    /** Operating System version */
    platformVersion?: string;
    /** The user Id to who this app registration belongs. */
    userId?: string;
    /** Version of the entity. */
    version?: string;
}
