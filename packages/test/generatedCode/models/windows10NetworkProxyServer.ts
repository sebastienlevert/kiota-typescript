import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10NetworkProxyServer extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Address to the proxy server. Specify an address in the format [':'] */
    address?: string;
    /** Addresses that should not use the proxy server. The system will not use the proxy server for addresses beginning with what is specified in this node. */
    exceptions?: string[];
    /** The OdataType property */
    odataType?: string;
    /** Specifies whether the proxy server should be used for local (intranet) addresses. */
    useForLocalAddresses?: boolean;
}
