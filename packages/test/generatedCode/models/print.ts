import {PrintConnector, Printer, PrinterShare, PrintOperation, PrintService, PrintSettings, PrintTaskDefinition} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Print extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The list of available print connectors. */
    connectors?: PrintConnector[];
    /** The OdataType property */
    odataType?: string;
    /** The list of print long running operations. */
    operations?: PrintOperation[];
    /** The list of printers registered in the tenant. */
    printers?: Printer[];
    /** The list of available Universal Print service endpoints. */
    services?: PrintService[];
    /** Tenant-wide settings for the Universal Print service. */
    settings?: PrintSettings;
    /** The list of printer shares registered in the tenant. */
    shares?: PrinterShare[];
    /** List of abstract definition for a task that can be triggered when various events occur within Universal Print. */
    taskDefinitions?: PrintTaskDefinition[];
}
