import {DeviceHealth, Entity, PrinterLocation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintConnector extends Entity, Partial<Parsable> {
    /** The connector's version. */
    appVersion?: string;
    /** The deviceHealth property */
    deviceHealth?: DeviceHealth;
    /** The name of the connector. */
    displayName?: string;
    /** The connector machine's hostname. */
    fullyQualifiedDomainName?: string;
    /** The location property */
    location?: PrinterLocation;
    /** The name property */
    name?: string;
    /** The connector machine's operating system version. */
    operatingSystem?: string;
    /** The DateTimeOffset when the connector was registered. */
    registeredDateTime?: Date;
}
