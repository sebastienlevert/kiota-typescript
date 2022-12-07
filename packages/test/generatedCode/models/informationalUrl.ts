import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InformationalUrl extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** CDN URL to the application's logo, Read-only. */
    logoUrl?: string;
    /** Link to the application's marketing page. For example, https://www.contoso.com/app/marketing */
    marketingUrl?: string;
    /** Link to the application's privacy statement. For example, https://www.contoso.com/app/privacy */
    privacyStatementUrl?: string;
    /** Link to the application's support page. For example, https://www.contoso.com/app/support */
    supportUrl?: string;
    /** Link to the application's terms of service statement. For example, https://www.contoso.com/app/termsofservice */
    termsOfServiceUrl?: string;
}
