import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ApplicationTemplate extends Entity, Partial<Parsable> {
    /** The list of categories for the application. Supported values can be: Collaboration, Business Management, Consumer, Content management, CRM, Data services, Developer services, E-commerce, Education, ERP, Finance, Health, Human resources, IT infrastructure, Mail, Management, Marketing, Media, Productivity, Project management, Telecommunications, Tools, Travel, and Web design & hosting. */
    categories?: string[];
    /** A description of the application. */
    description?: string;
    /** The name of the application. */
    displayName?: string;
    /** The home page URL of the application. */
    homePageUrl?: string;
    /** The URL to get the logo for this application. */
    logoUrl?: string;
    /** The name of the publisher for this application. */
    publisher?: string;
    /** The list of provisioning modes supported by this application. The only valid value is sync. */
    supportedProvisioningTypes?: string[];
    /** The list of single sign-on modes supported by this application. The supported values are oidc, password, saml, and notSupported. */
    supportedSingleSignOnModes?: string[];
}
