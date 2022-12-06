import {EducationExternalSource} from './educationExternalSource';
import {EducationUserRole} from './educationUserRole';
import {AssignedLicense, AssignedPlan, EducationAssignment, EducationClass, EducationOnPremisesInfo, EducationRubric, EducationSchool, EducationStudent, EducationTeacher, Entity, IdentitySet, PasswordProfile, PhysicalAddress, ProvisionedPlan, RelatedContact, User} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationUser extends Entity, Partial<Parsable> {
    /** True if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter. */
    accountEnabled?: boolean;
    /** The licenses that are assigned to the user. Not nullable. */
    assignedLicenses?: AssignedLicense[];
    /** The plans that are assigned to the user. Read-only. Not nullable. */
    assignedPlans?: AssignedPlan[];
    /** Assignments belonging to the user. */
    assignments?: EducationAssignment[];
    /** The telephone numbers for the user. Note: Although this is a string collection, only one number can be set for this property. */
    businessPhones?: string[];
    /** Classes to which the user belongs. Nullable. */
    classes?: EducationClass[];
    /** The entity who created the user. */
    createdBy?: IdentitySet;
    /** The name for the department in which the user works. Supports $filter. */
    department?: string;
    /** The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial, and last name. This property is required when a user is created and it cannot be cleared during updates. Supports $filter and $orderby. */
    displayName?: string;
    /** Where this user was created from. Possible values are: sis, manual. */
    externalSource?: EducationExternalSource;
    /** The name of the external source this resource was generated from. */
    externalSourceDetail?: string;
    /** The given name (first name) of the user. Supports $filter. */
    givenName?: string;
    /** The SMTP address for the user, for example, jeff@contoso.onmicrosoft.com. Read-Only. Supports $filter. */
    mail?: string;
    /** The mail address of the user. */
    mailingAddress?: PhysicalAddress;
    /** The mail alias for the user. This property must be specified when a user is created. Supports $filter. */
    mailNickname?: string;
    /** The middle name of the user. */
    middleName?: string;
    /** The primary cellular telephone number for the user. */
    mobilePhone?: string;
    /** The officeLocation property */
    officeLocation?: string;
    /** Additional information used to associate the Azure Active Directory user with its Active Directory counterpart. */
    onPremisesInfo?: EducationOnPremisesInfo;
    /** Specifies password policies for the user. This value is an enumeration with one possible value being DisableStrongPassword, which allows weaker passwords than the default policy to be specified. DisablePasswordExpiration can also be specified. The two can be specified together; for example: DisablePasswordExpiration, DisableStrongPassword. */
    passwordPolicies?: string;
    /** Specifies the password profile for the user. The profile contains the user's password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required. */
    passwordProfile?: PasswordProfile;
    /** The preferred language for the user that should follow the ISO 639-1 code, for example, en-US. */
    preferredLanguage?: string;
    /** The primaryRole property */
    primaryRole?: EducationUserRole;
    /** The plans that are provisioned for the user. Read-only. Not nullable. */
    provisionedPlans?: ProvisionedPlan[];
    /** The refreshTokensValidFromDateTime property */
    refreshTokensValidFromDateTime?: Date;
    /** Related records associated with the user. Read-only. */
    relatedContacts?: RelatedContact[];
    /** The address where the user lives. */
    residenceAddress?: PhysicalAddress;
    /** When set, the grading rubric attached to the assignment. */
    rubrics?: EducationRubric[];
    /** Schools to which the user belongs. Nullable. */
    schools?: EducationSchool[];
    /** True if the Outlook Global Address List should contain this user; otherwise, false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false. */
    showInAddressList?: boolean;
    /** If the primary role is student, this block will contain student specific data. */
    student?: EducationStudent;
    /** The user's surname (family name or last name). Supports $filter. */
    surname?: string;
    /** Classes for which the user is a teacher. */
    taughtClasses?: EducationClass[];
    /** If the primary role is teacher, this block will contain teacher specific data. */
    teacher?: EducationTeacher;
    /** A two-letter country code (ISO standard 3166). Required for users who will be assigned licenses due to a legal requirement to check for availability of services in countries or regions. Examples include: US, JP, and GB. Not nullable. Supports $filter. */
    usageLocation?: string;
    /** The directory user that corresponds to this user. */
    user?: User;
    /** The user principal name (UPN) of the user. The UPN is an internet-style login name for the user based on the internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant's collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of the organization. Supports $filter and $orderby. */
    userPrincipalName?: string;
    /** A string value that can be used to classify user types in your directory, such as Member and Guest. Supports $filter. */
    userType?: string;
}
