export interface MicrosoftGraphEntity{
   id?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAuditLogRoot extends MicrosoftGraphEntity{
   directoryAudits?: MicrosoftGraphDirectoryAudit[]
   provisioning?: MicrosoftGraphProvisioningObjectSummary[]
   signIns?: MicrosoftGraphSignIn[]
   "@odata.type"?: string
}
export interface MicrosoftGraphDirectoryAudit extends MicrosoftGraphEntity{
   activityDateTime?: string
   activityDisplayName?: string
   additionalDetails?: MicrosoftGraphKeyValue[]
   category?: string
   correlationId?: string
   initiatedBy?: {app?: MicrosoftGraphAppIdentity,user?: MicrosoftGraphUserIdentity,"@odata.type"?: string,}
   loggedByService?: string
   operationType?: string
   result?: MicrosoftGraphOperationResult
   resultReason?: string
   targetResources?: MicrosoftGraphTargetResource[]
   "@odata.type"?: string
}
export interface MicrosoftGraphProvisioningObjectSummary extends MicrosoftGraphEntity{
   activityDateTime?: string
   changeId?: string
   cycleId?: string
   durationInMilliseconds?: number
   initiatedBy?: MicrosoftGraphInitiator
   jobId?: string
   modifiedProperties?: MicrosoftGraphModifiedProperty[]
   provisioningAction?: MicrosoftGraphProvisioningAction
   provisioningStatusInfo?: MicrosoftGraphProvisioningStatusInfo
   provisioningSteps?: MicrosoftGraphProvisioningStep[]
   servicePrincipal?: MicrosoftGraphProvisioningServicePrincipal
   sourceIdentity?: MicrosoftGraphProvisionedIdentity
   sourceSystem?: MicrosoftGraphProvisioningSystem
   targetIdentity?: MicrosoftGraphProvisionedIdentity
   targetSystem?: MicrosoftGraphProvisioningSystem
   tenantId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSignIn extends MicrosoftGraphEntity{
   appDisplayName?: string
   appId?: string
   appliedConditionalAccessPolicies?: MicrosoftGraphAppliedConditionalAccessPolicy[]
   clientAppUsed?: string
   conditionalAccessStatus?: MicrosoftGraphConditionalAccessStatus
   correlationId?: string
   createdDateTime?: string
   deviceDetail?: MicrosoftGraphDeviceDetail
   ipAddress?: string
   isInteractive?: boolean
   location?: MicrosoftGraphSignInLocation
   resourceDisplayName?: string
   resourceId?: string
   riskDetail?: MicrosoftGraphRiskDetail
   riskEventTypes?: MicrosoftGraphRiskEventType[]
   riskEventTypes_v2?: string[]
   riskLevelAggregated?: MicrosoftGraphRiskLevel
   riskLevelDuringSignIn?: MicrosoftGraphRiskLevel
   riskState?: MicrosoftGraphRiskState
   status?: MicrosoftGraphSignInStatus
   userDisplayName?: string
   userId?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphInvitation extends MicrosoftGraphEntity{
   invitedUserDisplayName?: string
   invitedUserEmailAddress?: string
   invitedUserMessageInfo?: MicrosoftGraphInvitedUserMessageInfo
   invitedUserType?: string
   inviteRedeemUrl?: string
   inviteRedirectUrl?: string
   resetRedemption?: boolean
   sendInvitationMessage?: boolean
   status?: string
   invitedUser?: MicrosoftGraphUser
   "@odata.type"?: string
}
export interface MicrosoftGraphDirectoryObject extends MicrosoftGraphEntity{
   deletedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUser extends MicrosoftGraphDirectoryObject{
   accountEnabled?: boolean
   ageGroup?: string
   assignedLicenses?: {disabledPlans?: string[],skuId?: string,"@odata.type"?: string,}
   assignedPlans?: {assignedDateTime?: string,capabilityStatus?: string,service?: string,servicePlanId?: string,"@odata.type"?: string,}
   authorizationInfo?: MicrosoftGraphAuthorizationInfo
   businessPhones?: string[]
   city?: string
   companyName?: string
   consentProvidedForMinor?: string
   country?: string
   createdDateTime?: string
   creationType?: string
   department?: string
   displayName?: string
   employeeHireDate?: string
   employeeId?: string
   employeeOrgData?: MicrosoftGraphEmployeeOrgData
   employeeType?: string
   externalUserState?: string
   externalUserStateChangeDateTime?: string
   faxNumber?: string
   givenName?: string
   identities?: MicrosoftGraphObjectIdentity[]
   imAddresses?: string[]
   isResourceAccount?: boolean
   jobTitle?: string
   lastPasswordChangeDateTime?: string
   legalAgeGroupClassification?: string
   licenseAssignmentStates?: MicrosoftGraphLicenseAssignmentState[]
   mail?: string
   mailNickname?: string
   mobilePhone?: string
   officeLocation?: string
   onPremisesDistinguishedName?: string
   onPremisesDomainName?: string
   onPremisesExtensionAttributes?: MicrosoftGraphOnPremisesExtensionAttributes
   onPremisesImmutableId?: string
   onPremisesLastSyncDateTime?: string
   onPremisesProvisioningErrors?: MicrosoftGraphOnPremisesProvisioningError[]
   onPremisesSamAccountName?: string
   onPremisesSecurityIdentifier?: string
   onPremisesSyncEnabled?: boolean
   onPremisesUserPrincipalName?: string
   otherMails?: string[]
   passwordPolicies?: string
   passwordProfile?: MicrosoftGraphPasswordProfile
   postalCode?: string
   preferredDataLocation?: string
   preferredLanguage?: string
   provisionedPlans?: {capabilityStatus?: string,provisioningStatus?: string,service?: string,"@odata.type"?: string,}
   proxyAddresses?: string[]
   securityIdentifier?: string
   showInAddressList?: boolean
   signInSessionsValidFromDateTime?: string
   state?: string
   streetAddress?: string
   surname?: string
   usageLocation?: string
   userPrincipalName?: string
   userType?: string
   mailboxSettings?: MicrosoftGraphMailboxSettings
   deviceEnrollmentLimit?: number
   aboutMe?: string
   birthday?: string
   hireDate?: string
   interests?: string[]
   mySite?: string
   pastProjects?: string[]
   preferredName?: string
   responsibilities?: string[]
   schools?: string[]
   skills?: string[]
   appRoleAssignments?: MicrosoftGraphAppRoleAssignment[]
   createdObjects?: MicrosoftGraphDirectoryObject[]
   directReports?: MicrosoftGraphDirectoryObject[]
   licenseDetails?: MicrosoftGraphLicenseDetails[]
   manager?: MicrosoftGraphDirectoryObject
   memberOf?: MicrosoftGraphDirectoryObject[]
   oauth2PermissionGrants?: MicrosoftGraphOAuth2PermissionGrant[]
   ownedDevices?: MicrosoftGraphDirectoryObject[]
   ownedObjects?: MicrosoftGraphDirectoryObject[]
   registeredDevices?: MicrosoftGraphDirectoryObject[]
   scopedRoleMemberOf?: MicrosoftGraphScopedRoleMembership[]
   transitiveMemberOf?: MicrosoftGraphDirectoryObject[]
   calendar?: MicrosoftGraphCalendar
   calendarGroups?: MicrosoftGraphCalendarGroup[]
   calendars?: MicrosoftGraphCalendar[]
   calendarView?: MicrosoftGraphEvent[]
   contactFolders?: MicrosoftGraphContactFolder[]
   contacts?: MicrosoftGraphContact[]
   events?: MicrosoftGraphEvent[]
   inferenceClassification?: MicrosoftGraphInferenceClassification
   mailFolders?: MicrosoftGraphMailFolder[]
   messages?: MicrosoftGraphMessage[]
   outlook?: MicrosoftGraphOutlookUser
   people?: MicrosoftGraphPerson[]
   drive?: MicrosoftGraphDrive
   drives?: MicrosoftGraphDrive[]
   followedSites?: MicrosoftGraphSite[]
   extensions?: MicrosoftGraphExtension[]
   agreementAcceptances?: MicrosoftGraphAgreementAcceptance[]
   managedDevices?: MicrosoftGraphManagedDevice[]
   managedAppRegistrations?: MicrosoftGraphManagedAppRegistration[]
   deviceManagementTroubleshootingEvents?: MicrosoftGraphDeviceManagementTroubleshootingEvent[]
   planner?: MicrosoftGraphPlannerUser
   insights?: MicrosoftGraphOfficeGraphInsights
   settings?: MicrosoftGraphUserSettings
   onenote?: MicrosoftGraphOnenote
   photo?: MicrosoftGraphProfilePhoto
   photos?: MicrosoftGraphProfilePhoto[]
   activities?: MicrosoftGraphUserActivity[]
   onlineMeetings?: MicrosoftGraphOnlineMeeting[]
   presence?: MicrosoftGraphPresence
   authentication?: MicrosoftGraphAuthentication
   chats?: MicrosoftGraphChat[]
   joinedTeams?: MicrosoftGraphTeam[]
   teamwork?: MicrosoftGraphUserTeamwork
   todo?: MicrosoftGraphTodo
   "@odata.type"?: string
}
export interface MicrosoftGraphAppRoleAssignment extends MicrosoftGraphDirectoryObject{
   appRoleId?: string
   createdDateTime?: string
   principalDisplayName?: string
   principalId?: string
   principalType?: string
   resourceDisplayName?: string
   resourceId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphLicenseDetails extends MicrosoftGraphEntity{
   servicePlans?: {appliesTo?: string,provisioningStatus?: string,servicePlanId?: string,servicePlanName?: string,"@odata.type"?: string,}
   skuId?: string
   skuPartNumber?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOAuth2PermissionGrant extends MicrosoftGraphEntity{
   clientId?: string
   consentType?: string
   principalId?: string
   resourceId?: string
   scope?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphScopedRoleMembership extends MicrosoftGraphEntity{
   administrativeUnitId?: string
   roleId?: string
   roleMemberInfo?: {displayName?: string,id?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphCalendar extends MicrosoftGraphEntity{
   allowedOnlineMeetingProviders?: MicrosoftGraphOnlineMeetingProviderType[]
   canEdit?: boolean
   canShare?: boolean
   canViewPrivateItems?: boolean
   changeKey?: string
   color?: MicrosoftGraphCalendarColor
   defaultOnlineMeetingProvider?: MicrosoftGraphOnlineMeetingProviderType
   hexColor?: string
   isDefaultCalendar?: boolean
   isRemovable?: boolean
   isTallyingResponses?: boolean
   name?: string
   owner?: MicrosoftGraphEmailAddress
   calendarPermissions?: MicrosoftGraphCalendarPermission[]
   calendarView?: MicrosoftGraphEvent[]
   events?: MicrosoftGraphEvent[]
   multiValueExtendedProperties?: MicrosoftGraphMultiValueLegacyExtendedProperty[]
   singleValueExtendedProperties?: MicrosoftGraphSingleValueLegacyExtendedProperty[]
   "@odata.type"?: string
}
export interface MicrosoftGraphCalendarGroup extends MicrosoftGraphEntity{
   changeKey?: string
   classId?: string
   name?: string
   calendars?: MicrosoftGraphCalendar[]
   "@odata.type"?: string
}
export interface MicrosoftGraphOutlookItem extends MicrosoftGraphEntity{
   categories?: string[]
   changeKey?: string
   createdDateTime?: string
   lastModifiedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEvent extends MicrosoftGraphOutlookItem{
   allowNewTimeProposals?: boolean
   attendees?: MicrosoftGraphAttendee[]
   body?: MicrosoftGraphItemBody
   bodyPreview?: string
   end?: MicrosoftGraphDateTimeTimeZone
   hasAttachments?: boolean
   hideAttendees?: boolean
   iCalUId?: string
   importance?: MicrosoftGraphImportance
   isAllDay?: boolean
   isCancelled?: boolean
   isDraft?: boolean
   isOnlineMeeting?: boolean
   isOrganizer?: boolean
   isReminderOn?: boolean
   location?: MicrosoftGraphLocation
   locations?: MicrosoftGraphLocation[]
   onlineMeeting?: MicrosoftGraphOnlineMeetingInfo
   onlineMeetingProvider?: MicrosoftGraphOnlineMeetingProviderType
   onlineMeetingUrl?: string
   organizer?: MicrosoftGraphRecipient
   originalEndTimeZone?: string
   originalStart?: string
   originalStartTimeZone?: string
   recurrence?: MicrosoftGraphPatternedRecurrence
   reminderMinutesBeforeStart?: number
   responseRequested?: boolean
   responseStatus?: MicrosoftGraphResponseStatus
   sensitivity?: MicrosoftGraphSensitivity
   seriesMasterId?: string
   showAs?: MicrosoftGraphFreeBusyStatus
   start?: MicrosoftGraphDateTimeTimeZone
   subject?: string
   transactionId?: string
   type?: MicrosoftGraphEventType
   webLink?: string
   attachments?: MicrosoftGraphAttachment[]
   calendar?: MicrosoftGraphCalendar
   extensions?: MicrosoftGraphExtension[]
   instances?: MicrosoftGraphEvent[]
   multiValueExtendedProperties?: MicrosoftGraphMultiValueLegacyExtendedProperty[]
   singleValueExtendedProperties?: MicrosoftGraphSingleValueLegacyExtendedProperty[]
   "@odata.type"?: string
}
export interface MicrosoftGraphContactFolder extends MicrosoftGraphEntity{
   displayName?: string
   parentFolderId?: string
   childFolders?: MicrosoftGraphContactFolder[]
   contacts?: MicrosoftGraphContact[]
   multiValueExtendedProperties?: MicrosoftGraphMultiValueLegacyExtendedProperty[]
   singleValueExtendedProperties?: MicrosoftGraphSingleValueLegacyExtendedProperty[]
   "@odata.type"?: string
}
export interface MicrosoftGraphContact extends MicrosoftGraphOutlookItem{
   assistantName?: string
   birthday?: string
   businessAddress?: MicrosoftGraphPhysicalAddress
   businessHomePage?: string
   businessPhones?: string[]
   children?: string[]
   companyName?: string
   department?: string
   displayName?: string
   emailAddresses?: MicrosoftGraphEmailAddress[]
   fileAs?: string
   generation?: string
   givenName?: string
   homeAddress?: MicrosoftGraphPhysicalAddress
   homePhones?: string[]
   imAddresses?: string[]
   initials?: string
   jobTitle?: string
   manager?: string
   middleName?: string
   mobilePhone?: string
   nickName?: string
   officeLocation?: string
   otherAddress?: MicrosoftGraphPhysicalAddress
   parentFolderId?: string
   personalNotes?: string
   profession?: string
   spouseName?: string
   surname?: string
   title?: string
   yomiCompanyName?: string
   yomiGivenName?: string
   yomiSurname?: string
   extensions?: MicrosoftGraphExtension[]
   multiValueExtendedProperties?: MicrosoftGraphMultiValueLegacyExtendedProperty[]
   photo?: MicrosoftGraphProfilePhoto
   singleValueExtendedProperties?: MicrosoftGraphSingleValueLegacyExtendedProperty[]
   "@odata.type"?: string
}
export interface MicrosoftGraphInferenceClassification extends MicrosoftGraphEntity{
   overrides?: MicrosoftGraphInferenceClassificationOverride[]
   "@odata.type"?: string
}
export interface MicrosoftGraphMailFolder extends MicrosoftGraphEntity{
   childFolderCount?: number
   displayName?: string
   isHidden?: boolean
   parentFolderId?: string
   totalItemCount?: number
   unreadItemCount?: number
   childFolders?: MicrosoftGraphMailFolder[]
   messageRules?: MicrosoftGraphMessageRule[]
   messages?: MicrosoftGraphMessage[]
   multiValueExtendedProperties?: MicrosoftGraphMultiValueLegacyExtendedProperty[]
   singleValueExtendedProperties?: MicrosoftGraphSingleValueLegacyExtendedProperty[]
   "@odata.type"?: string
}
export interface MicrosoftGraphMessage extends MicrosoftGraphOutlookItem{
   bccRecipients?: MicrosoftGraphRecipient[]
   body?: MicrosoftGraphItemBody
   bodyPreview?: string
   ccRecipients?: MicrosoftGraphRecipient[]
   conversationId?: string
   conversationIndex?: string
   flag?: MicrosoftGraphFollowupFlag
   from?: MicrosoftGraphRecipient
   hasAttachments?: boolean
   importance?: MicrosoftGraphImportance
   inferenceClassification?: MicrosoftGraphInferenceClassificationType
   internetMessageHeaders?: MicrosoftGraphInternetMessageHeader[]
   internetMessageId?: string
   isDeliveryReceiptRequested?: boolean
   isDraft?: boolean
   isRead?: boolean
   isReadReceiptRequested?: boolean
   parentFolderId?: string
   receivedDateTime?: string
   replyTo?: MicrosoftGraphRecipient[]
   sender?: MicrosoftGraphRecipient
   sentDateTime?: string
   subject?: string
   toRecipients?: MicrosoftGraphRecipient[]
   uniqueBody?: MicrosoftGraphItemBody
   webLink?: string
   attachments?: MicrosoftGraphAttachment[]
   extensions?: MicrosoftGraphExtension[]
   multiValueExtendedProperties?: MicrosoftGraphMultiValueLegacyExtendedProperty[]
   singleValueExtendedProperties?: MicrosoftGraphSingleValueLegacyExtendedProperty[]
   "@odata.type"?: string
}
export interface MicrosoftGraphOutlookUser extends MicrosoftGraphEntity{
   masterCategories?: MicrosoftGraphOutlookCategory[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPerson extends MicrosoftGraphEntity{
   birthday?: string
   companyName?: string
   department?: string
   displayName?: string
   givenName?: string
   imAddress?: string
   isFavorite?: boolean
   jobTitle?: string
   officeLocation?: string
   personNotes?: string
   personType?: MicrosoftGraphPersonType
   phones?: MicrosoftGraphPhone[]
   postalAddresses?: MicrosoftGraphLocation[]
   profession?: string
   scoredEmailAddresses?: MicrosoftGraphScoredEmailAddress[]
   surname?: string
   userPrincipalName?: string
   websites?: MicrosoftGraphWebsite[]
   yomiCompany?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphBaseItem extends MicrosoftGraphEntity{
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   description?: string
   eTag?: string
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   name?: string
   parentReference?: MicrosoftGraphItemReference
   webUrl?: string
   createdByUser?: MicrosoftGraphUser
   lastModifiedByUser?: MicrosoftGraphUser
   "@odata.type"?: string
}
export interface MicrosoftGraphDrive extends MicrosoftGraphBaseItem{
   driveType?: string
   owner?: MicrosoftGraphIdentitySet
   quota?: MicrosoftGraphQuota
   sharePointIds?: MicrosoftGraphSharepointIds
   system?: MicrosoftGraphSystemFacet
   bundles?: MicrosoftGraphDriveItem[]
   following?: MicrosoftGraphDriveItem[]
   items?: MicrosoftGraphDriveItem[]
   list?: MicrosoftGraphList
   root?: MicrosoftGraphDriveItem
   special?: MicrosoftGraphDriveItem[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSite extends MicrosoftGraphBaseItem{
   displayName?: string
   error?: MicrosoftGraphPublicError
   root?: MicrosoftGraphRoot
   sharepointIds?: MicrosoftGraphSharepointIds
   siteCollection?: MicrosoftGraphSiteCollection
   analytics?: MicrosoftGraphItemAnalytics
   columns?: MicrosoftGraphColumnDefinition[]
   contentTypes?: MicrosoftGraphContentType[]
   drive?: MicrosoftGraphDrive
   drives?: MicrosoftGraphDrive[]
   externalColumns?: MicrosoftGraphColumnDefinition[]
   items?: MicrosoftGraphBaseItem[]
   lists?: MicrosoftGraphList[]
   operations?: MicrosoftGraphRichLongRunningOperation[]
   permissions?: MicrosoftGraphPermission[]
   sites?: MicrosoftGraphSite[]
   termStore?: MicrosoftGraphTermStoreStore
   termStores?: MicrosoftGraphTermStoreStore[]
   onenote?: MicrosoftGraphOnenote
   "@odata.type"?: string
}
export interface MicrosoftGraphExtension extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphAgreementAcceptance extends MicrosoftGraphEntity{
   agreementFileId?: string
   agreementId?: string
   deviceDisplayName?: string
   deviceId?: string
   deviceOSType?: string
   deviceOSVersion?: string
   expirationDateTime?: string
   recordedDateTime?: string
   state?: MicrosoftGraphAgreementAcceptanceState
   userDisplayName?: string
   userEmail?: string
   userId?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedDevice extends MicrosoftGraphEntity{
   activationLockBypassCode?: string
   androidSecurityPatchLevel?: string
   azureADDeviceId?: string
   azureADRegistered?: boolean
   complianceGracePeriodExpirationDateTime?: string
   complianceState?: string
   configurationManagerClientEnabledFeatures?: MicrosoftGraphConfigurationManagerClientEnabledFeatures
   deviceActionResults?: MicrosoftGraphDeviceActionResult[]
   deviceCategoryDisplayName?: string
   deviceEnrollmentType?: string
   deviceHealthAttestationState?: MicrosoftGraphDeviceHealthAttestationState
   deviceName?: string
   deviceRegistrationState?: string
   easActivated?: boolean
   easActivationDateTime?: string
   easDeviceId?: string
   emailAddress?: string
   enrolledDateTime?: string
   ethernetMacAddress?: string
   exchangeAccessState?: string
   exchangeAccessStateReason?: string
   exchangeLastSuccessfulSyncDateTime?: string
   freeStorageSpaceInBytes?: number
   iccid?: string
   imei?: string
   isEncrypted?: boolean
   isSupervised?: boolean
   jailBroken?: string
   lastSyncDateTime?: string
   managedDeviceName?: string
   managedDeviceOwnerType?: string
   managementAgent?: string
   managementCertificateExpirationDate?: string
   manufacturer?: string
   meid?: string
   model?: string
   notes?: string
   operatingSystem?: string
   osVersion?: string
   partnerReportedThreatState?: string
   phoneNumber?: string
   physicalMemoryInBytes?: number
   remoteAssistanceSessionErrorDetails?: string
   remoteAssistanceSessionUrl?: string
   requireUserEnrollmentApproval?: boolean
   serialNumber?: string
   subscriberCarrier?: string
   totalStorageSpaceInBytes?: number
   udid?: string
   userDisplayName?: string
   userId?: string
   userPrincipalName?: string
   wiFiMacAddress?: string
   deviceCompliancePolicyStates?: MicrosoftGraphDeviceCompliancePolicyState[]
   deviceConfigurationStates?: MicrosoftGraphDeviceConfigurationState[]
   deviceCategory?: MicrosoftGraphDeviceCategory
   users?: MicrosoftGraphUser[]
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedAppRegistration extends MicrosoftGraphEntity{
   appIdentifier?: MicrosoftGraphMobileAppIdentifier
   applicationVersion?: string
   createdDateTime?: string
   deviceName?: string
   deviceTag?: string
   deviceType?: string
   flaggedReasons?: string[]
   lastSyncDateTime?: string
   managementSdkVersion?: string
   platformVersion?: string
   userId?: string
   version?: string
   appliedPolicies?: MicrosoftGraphManagedAppPolicy[]
   intendedPolicies?: MicrosoftGraphManagedAppPolicy[]
   operations?: MicrosoftGraphManagedAppOperation[]
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceManagementTroubleshootingEvent extends MicrosoftGraphEntity{
   correlationId?: string
   eventDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerUser extends MicrosoftGraphEntity{
   plans?: MicrosoftGraphPlannerPlan[]
   tasks?: MicrosoftGraphPlannerTask[]
   "@odata.type"?: string
}
export interface MicrosoftGraphOfficeGraphInsights extends MicrosoftGraphEntity{
   shared?: MicrosoftGraphSharedInsight[]
   trending?: MicrosoftGraphTrending[]
   used?: MicrosoftGraphUsedInsight[]
   "@odata.type"?: string
}
export interface MicrosoftGraphUserSettings extends MicrosoftGraphEntity{
   contributionToContentDiscoveryAsOrganizationDisabled?: boolean
   contributionToContentDiscoveryDisabled?: boolean
   shiftPreferences?: MicrosoftGraphShiftPreferences
   "@odata.type"?: string
}
export interface MicrosoftGraphOnenote extends MicrosoftGraphEntity{
   notebooks?: MicrosoftGraphNotebook[]
   operations?: MicrosoftGraphOnenoteOperation[]
   pages?: MicrosoftGraphOnenotePage[]
   resources?: MicrosoftGraphOnenoteResource[]
   sectionGroups?: MicrosoftGraphSectionGroup[]
   sections?: MicrosoftGraphOnenoteSection[]
   "@odata.type"?: string
}
export interface MicrosoftGraphProfilePhoto extends MicrosoftGraphEntity{
   height?: number
   width?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphUserActivity extends MicrosoftGraphEntity{
   activationUrl?: string
   activitySourceHost?: string
   appActivityId?: string
   appDisplayName?: string
   contentInfo?: MicrosoftGraphJson
   contentUrl?: string
   createdDateTime?: string
   expirationDateTime?: string
   fallbackUrl?: string
   lastModifiedDateTime?: string
   status?: MicrosoftGraphStatus
   userTimezone?: string
   visualElements?: {attribution?: MicrosoftGraphImageInfo,backgroundColor?: string,content?: MicrosoftGraphJson,description?: string,displayText?: string,"@odata.type"?: string,}
   historyItems?: MicrosoftGraphActivityHistoryItem[]
   "@odata.type"?: string
}
export interface MicrosoftGraphOnlineMeeting extends MicrosoftGraphEntity{
   allowAttendeeToEnableCamera?: boolean
   allowAttendeeToEnableMic?: boolean
   allowedPresenters?: MicrosoftGraphOnlineMeetingPresenters
   allowMeetingChat?: MicrosoftGraphMeetingChatMode
   allowTeamworkReactions?: boolean
   attendeeReport?: string
   audioConferencing?: MicrosoftGraphAudioConferencing
   broadcastSettings?: MicrosoftGraphBroadcastMeetingSettings
   chatInfo?: MicrosoftGraphChatInfo
   creationDateTime?: string
   endDateTime?: string
   externalId?: string
   isBroadcast?: boolean
   isEntryExitAnnounced?: boolean
   joinInformation?: MicrosoftGraphItemBody
   joinWebUrl?: string
   lobbyBypassSettings?: MicrosoftGraphLobbyBypassSettings
   participants?: MicrosoftGraphMeetingParticipants
   recordAutomatically?: boolean
   startDateTime?: string
   subject?: string
   videoTeleconferenceId?: string
   attendanceReports?: MicrosoftGraphMeetingAttendanceReport[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPresence extends MicrosoftGraphEntity{
   activity?: string
   availability?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthentication extends MicrosoftGraphEntity{
   emailMethods?: MicrosoftGraphEmailAuthenticationMethod[]
   fido2Methods?: MicrosoftGraphFido2AuthenticationMethod[]
   methods?: MicrosoftGraphAuthenticationMethod[]
   microsoftAuthenticatorMethods?: MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethod[]
   operations?: MicrosoftGraphLongRunningOperation[]
   passwordMethods?: MicrosoftGraphPasswordAuthenticationMethod[]
   phoneMethods?: MicrosoftGraphPhoneAuthenticationMethod[]
   softwareOathMethods?: MicrosoftGraphSoftwareOathAuthenticationMethod[]
   temporaryAccessPassMethods?: MicrosoftGraphTemporaryAccessPassAuthenticationMethod[]
   windowsHelloForBusinessMethods?: MicrosoftGraphWindowsHelloForBusinessAuthenticationMethod[]
   "@odata.type"?: string
}
export interface MicrosoftGraphChat extends MicrosoftGraphEntity{
   chatType?: string
   createdDateTime?: string
   lastUpdatedDateTime?: string
   onlineMeetingInfo?: MicrosoftGraphTeamworkOnlineMeetingInfo
   tenantId?: string
   topic?: string
   viewpoint?: MicrosoftGraphChatViewpoint
   webUrl?: string
   installedApps?: MicrosoftGraphTeamsAppInstallation[]
   lastMessagePreview?: MicrosoftGraphChatMessageInfo
   members?: MicrosoftGraphConversationMember[]
   messages?: MicrosoftGraphChatMessage[]
   pinnedMessages?: MicrosoftGraphPinnedChatMessageInfo[]
   tabs?: MicrosoftGraphTeamsTab[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTeam extends MicrosoftGraphEntity{
   classification?: string
   createdDateTime?: string
   description?: string
   displayName?: string
   funSettings?: MicrosoftGraphTeamFunSettings
   guestSettings?: MicrosoftGraphTeamGuestSettings
   internalId?: string
   isArchived?: boolean
   memberSettings?: MicrosoftGraphTeamMemberSettings
   messagingSettings?: MicrosoftGraphTeamMessagingSettings
   specialization?: MicrosoftGraphTeamSpecialization
   summary?: MicrosoftGraphTeamSummary
   tenantId?: string
   visibility?: MicrosoftGraphTeamVisibilityType
   webUrl?: string
   allChannels?: MicrosoftGraphChannel[]
   channels?: MicrosoftGraphChannel[]
   group?: MicrosoftGraphGroup
   incomingChannels?: MicrosoftGraphChannel[]
   installedApps?: MicrosoftGraphTeamsAppInstallation[]
   members?: MicrosoftGraphConversationMember[]
   operations?: MicrosoftGraphTeamsAsyncOperation[]
   photo?: MicrosoftGraphProfilePhoto
   primaryChannel?: MicrosoftGraphChannel
   tags?: MicrosoftGraphTeamworkTag[]
   template?: MicrosoftGraphTeamsTemplate
   schedule?: MicrosoftGraphSchedule
   "@odata.type"?: string
}
export interface MicrosoftGraphUserTeamwork extends MicrosoftGraphEntity{
   associatedTeams?: MicrosoftGraphAssociatedTeamInfo[]
   installedApps?: MicrosoftGraphUserScopeTeamsAppInstallation[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTodo extends MicrosoftGraphEntity{
   lists?: MicrosoftGraphTodoTaskList[]
   "@odata.type"?: string
}
export interface MicrosoftGraphApplication extends MicrosoftGraphDirectoryObject{
   addIns?: {id?: string,properties?: {key?: string,value?: string,"@odata.type"?: string,},type?: string,"@odata.type"?: string,}
   api?: MicrosoftGraphApiApplication
   appId?: string
   applicationTemplateId?: string
   appRoles?: {allowedMemberTypes?: string[],description?: string,displayName?: string,id?: string,isEnabled?: boolean,origin?: string,value?: string,"@odata.type"?: string,}
   certification?: MicrosoftGraphCertification
   createdDateTime?: string
   defaultRedirectUri?: string
   description?: string
   disabledByMicrosoftStatus?: string
   displayName?: string
   groupMembershipClaims?: string
   identifierUris?: string[]
   info?: MicrosoftGraphInformationalUrl
   isDeviceOnlyAuthSupported?: boolean
   isFallbackPublicClient?: boolean
   keyCredentials?: {customKeyIdentifier?: string,displayName?: string,endDateTime?: string,key?: string,keyId?: string,startDateTime?: string,type?: string,usage?: string,"@odata.type"?: string,}
   logo?: string
   notes?: string
   oauth2RequirePostResponse?: boolean
   optionalClaims?: MicrosoftGraphOptionalClaims
   parentalControlSettings?: MicrosoftGraphParentalControlSettings
   passwordCredentials?: {customKeyIdentifier?: string,displayName?: string,endDateTime?: string,hint?: string,keyId?: string,secretText?: string,startDateTime?: string,"@odata.type"?: string,}
   publicClient?: MicrosoftGraphPublicClientApplication
   publisherDomain?: string
   requiredResourceAccess?: {resourceAccess?: {id?: string,type?: string,"@odata.type"?: string,},resourceAppId?: string,"@odata.type"?: string,}
   samlMetadataUrl?: string
   serviceManagementReference?: string
   signInAudience?: string
   spa?: MicrosoftGraphSpaApplication
   tags?: string[]
   tokenEncryptionKeyId?: string
   verifiedPublisher?: MicrosoftGraphVerifiedPublisher
   web?: MicrosoftGraphWebApplication
   createdOnBehalfOf?: MicrosoftGraphDirectoryObject
   extensionProperties?: MicrosoftGraphExtensionProperty[]
   federatedIdentityCredentials?: MicrosoftGraphFederatedIdentityCredential[]
   homeRealmDiscoveryPolicies?: MicrosoftGraphHomeRealmDiscoveryPolicy[]
   owners?: MicrosoftGraphDirectoryObject[]
   tokenIssuancePolicies?: MicrosoftGraphTokenIssuancePolicy[]
   tokenLifetimePolicies?: MicrosoftGraphTokenLifetimePolicy[]
   "@odata.type"?: string
}
export interface MicrosoftGraphServicePrincipal extends MicrosoftGraphDirectoryObject{
   accountEnabled?: boolean
   addIns?: {id?: string,properties?: {key?: string,value?: string,"@odata.type"?: string,},type?: string,"@odata.type"?: string,}
   alternativeNames?: string[]
   appDescription?: string
   appDisplayName?: string
   appId?: string
   applicationTemplateId?: string
   appOwnerOrganizationId?: string
   appRoleAssignmentRequired?: boolean
   appRoles?: {allowedMemberTypes?: string[],description?: string,displayName?: string,id?: string,isEnabled?: boolean,origin?: string,value?: string,"@odata.type"?: string,}
   description?: string
   disabledByMicrosoftStatus?: string
   displayName?: string
   homepage?: string
   info?: MicrosoftGraphInformationalUrl
   keyCredentials?: {customKeyIdentifier?: string,displayName?: string,endDateTime?: string,key?: string,keyId?: string,startDateTime?: string,type?: string,usage?: string,"@odata.type"?: string,}
   loginUrl?: string
   logoutUrl?: string
   notes?: string
   notificationEmailAddresses?: string[]
   oauth2PermissionScopes?: {adminConsentDescription?: string,adminConsentDisplayName?: string,id?: string,isEnabled?: boolean,origin?: string,type?: string,userConsentDescription?: string,userConsentDisplayName?: string,value?: string,"@odata.type"?: string,}
   passwordCredentials?: {customKeyIdentifier?: string,displayName?: string,endDateTime?: string,hint?: string,keyId?: string,secretText?: string,startDateTime?: string,"@odata.type"?: string,}
   preferredSingleSignOnMode?: string
   preferredTokenSigningKeyThumbprint?: string
   replyUrls?: string[]
   resourceSpecificApplicationPermissions?: {description?: string,displayName?: string,id?: string,isEnabled?: boolean,value?: string,"@odata.type"?: string,}
   samlSingleSignOnSettings?: MicrosoftGraphSamlSingleSignOnSettings
   servicePrincipalNames?: string[]
   servicePrincipalType?: string
   signInAudience?: string
   tags?: string[]
   tokenEncryptionKeyId?: string
   verifiedPublisher?: MicrosoftGraphVerifiedPublisher
   appRoleAssignedTo?: MicrosoftGraphAppRoleAssignment[]
   appRoleAssignments?: MicrosoftGraphAppRoleAssignment[]
   claimsMappingPolicies?: MicrosoftGraphClaimsMappingPolicy[]
   createdObjects?: MicrosoftGraphDirectoryObject[]
   delegatedPermissionClassifications?: MicrosoftGraphDelegatedPermissionClassification[]
   endpoints?: MicrosoftGraphEndpoint[]
   federatedIdentityCredentials?: MicrosoftGraphFederatedIdentityCredential[]
   homeRealmDiscoveryPolicies?: MicrosoftGraphHomeRealmDiscoveryPolicy[]
   memberOf?: MicrosoftGraphDirectoryObject[]
   oauth2PermissionGrants?: MicrosoftGraphOAuth2PermissionGrant[]
   ownedObjects?: MicrosoftGraphDirectoryObject[]
   owners?: MicrosoftGraphDirectoryObject[]
   tokenIssuancePolicies?: MicrosoftGraphTokenIssuancePolicy[]
   tokenLifetimePolicies?: MicrosoftGraphTokenLifetimePolicy[]
   transitiveMemberOf?: MicrosoftGraphDirectoryObject[]
   "@odata.type"?: string
}
export interface MicrosoftGraphExtensionProperty extends MicrosoftGraphDirectoryObject{
   appDisplayName?: string
   dataType?: string
   isSyncedFromOnPremises?: boolean
   name?: string
   targetObjects?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphFederatedIdentityCredential extends MicrosoftGraphEntity{
   audiences?: string[]
   description?: string
   issuer?: string
   name?: string
   subject?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPolicyBase extends MicrosoftGraphDirectoryObject{
   description?: string
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphStsPolicy extends MicrosoftGraphPolicyBase{
   definition?: string[]
   isOrganizationDefault?: boolean
   appliesTo?: MicrosoftGraphDirectoryObject[]
   "@odata.type"?: string
}
export interface MicrosoftGraphHomeRealmDiscoveryPolicy extends MicrosoftGraphStsPolicy{
   "@odata.type"?: string
}
export interface MicrosoftGraphTokenIssuancePolicy extends MicrosoftGraphStsPolicy{
   "@odata.type"?: string
}
export interface MicrosoftGraphTokenLifetimePolicy extends MicrosoftGraphStsPolicy{
   "@odata.type"?: string
}
export interface MicrosoftGraphApplicationTemplate extends MicrosoftGraphEntity{
   categories?: string[]
   description?: string
   displayName?: string
   homePageUrl?: string
   logoUrl?: string
   publisher?: string
   supportedProvisioningTypes?: string[]
   supportedSingleSignOnModes?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphClaimsMappingPolicy extends MicrosoftGraphStsPolicy{
   "@odata.type"?: string
}
export interface MicrosoftGraphDelegatedPermissionClassification extends MicrosoftGraphEntity{
   classification?: MicrosoftGraphPermissionClassificationType
   permissionId?: string
   permissionName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEndpoint extends MicrosoftGraphDirectoryObject{
   capability?: string
   providerId?: string
   providerName?: string
   providerResourceId?: string
   uri?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthenticationMethodConfiguration extends MicrosoftGraphEntity{
   state?: MicrosoftGraphAuthenticationMethodState
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthenticationMethodsPolicy extends MicrosoftGraphEntity{
   description?: string
   displayName?: string
   lastModifiedDateTime?: string
   policyVersion?: string
   reconfirmationInDays?: number
   registrationEnforcement?: MicrosoftGraphRegistrationEnforcement
   authenticationMethodConfigurations?: MicrosoftGraphAuthenticationMethodConfiguration[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthenticationMethodTarget extends MicrosoftGraphEntity{
   isRegistrationRequired?: boolean
   targetType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEmailAuthenticationMethodConfiguration extends MicrosoftGraphAuthenticationMethodConfiguration{
   allowExternalIdToUseEmailOtp?: MicrosoftGraphExternalEmailOtpState
   includeTargets?: MicrosoftGraphAuthenticationMethodTarget[]
   "@odata.type"?: string
}
export interface MicrosoftGraphFido2AuthenticationMethodConfiguration extends MicrosoftGraphAuthenticationMethodConfiguration{
   isAttestationEnforced?: boolean
   isSelfServiceRegistrationAllowed?: boolean
   keyRestrictions?: MicrosoftGraphFido2KeyRestrictions
   includeTargets?: MicrosoftGraphAuthenticationMethodTarget[]
   "@odata.type"?: string
}
export interface MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodConfiguration extends MicrosoftGraphAuthenticationMethodConfiguration{
   featureSettings?: MicrosoftGraphMicrosoftAuthenticatorFeatureSettings
   includeTargets?: MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodTarget[]
   "@odata.type"?: string
}
export interface MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodTarget extends MicrosoftGraphAuthenticationMethodTarget{
   authenticationMode?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPolicyRoot extends MicrosoftGraphEntity{
   authenticationMethodsPolicy?: MicrosoftGraphAuthenticationMethodsPolicy
   authenticationFlowsPolicy?: MicrosoftGraphAuthenticationFlowsPolicy
   activityBasedTimeoutPolicies?: MicrosoftGraphActivityBasedTimeoutPolicy[]
   authorizationPolicy?: MicrosoftGraphAuthorizationPolicy
   claimsMappingPolicies?: MicrosoftGraphClaimsMappingPolicy[]
   crossTenantAccessPolicy?: MicrosoftGraphCrossTenantAccessPolicy
   homeRealmDiscoveryPolicies?: MicrosoftGraphHomeRealmDiscoveryPolicy[]
   permissionGrantPolicies?: MicrosoftGraphPermissionGrantPolicy[]
   tokenIssuancePolicies?: MicrosoftGraphTokenIssuancePolicy[]
   tokenLifetimePolicies?: MicrosoftGraphTokenLifetimePolicy[]
   featureRolloutPolicies?: MicrosoftGraphFeatureRolloutPolicy[]
   adminConsentRequestPolicy?: MicrosoftGraphAdminConsentRequestPolicy
   conditionalAccessPolicies?: MicrosoftGraphConditionalAccessPolicy[]
   identitySecurityDefaultsEnforcementPolicy?: MicrosoftGraphIdentitySecurityDefaultsEnforcementPolicy
   roleManagementPolicies?: MicrosoftGraphUnifiedRoleManagementPolicy[]
   roleManagementPolicyAssignments?: MicrosoftGraphUnifiedRoleManagementPolicyAssignment[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthenticationFlowsPolicy extends MicrosoftGraphEntity{
   description?: string
   displayName?: string
   selfServiceSignUp?: MicrosoftGraphSelfServiceSignUpAuthenticationFlowConfiguration
   "@odata.type"?: string
}
export interface MicrosoftGraphActivityBasedTimeoutPolicy extends MicrosoftGraphStsPolicy{
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthorizationPolicy extends MicrosoftGraphPolicyBase{
   allowedToSignUpEmailBasedSubscriptions?: boolean
   allowedToUseSSPR?: boolean
   allowEmailVerifiedUsersToJoinOrganization?: boolean
   allowInvitesFrom?: MicrosoftGraphAllowInvitesFrom
   blockMsolPowerShell?: boolean
   defaultUserRolePermissions?: {allowedToCreateApps?: boolean,allowedToCreateSecurityGroups?: boolean,allowedToReadOtherUsers?: boolean,permissionGrantPoliciesAssigned?: string[],"@odata.type"?: string,}
   guestUserRoleId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCrossTenantAccessPolicy extends MicrosoftGraphPolicyBase{
   default?: MicrosoftGraphCrossTenantAccessPolicyConfigurationDefault
   partners?: {b2bCollaborationInbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting,b2bCollaborationOutbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting,b2bDirectConnectInbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting,b2bDirectConnectOutbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting,inboundTrust?: MicrosoftGraphCrossTenantAccessPolicyInboundTrust,isServiceProvider?: boolean,tenantId?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphPermissionGrantPolicy extends MicrosoftGraphPolicyBase{
   excludes?: MicrosoftGraphPermissionGrantConditionSet[]
   includes?: MicrosoftGraphPermissionGrantConditionSet[]
   "@odata.type"?: string
}
export interface MicrosoftGraphFeatureRolloutPolicy extends MicrosoftGraphEntity{
   description?: string
   displayName?: string
   feature?: string
   isAppliedToOrganization?: boolean
   isEnabled?: boolean
   appliesTo?: MicrosoftGraphDirectoryObject[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAdminConsentRequestPolicy extends MicrosoftGraphEntity{
   isEnabled?: boolean
   notifyReviewers?: boolean
   remindersEnabled?: boolean
   requestDurationInDays?: number
   reviewers?: MicrosoftGraphAccessReviewReviewerScope[]
   version?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessPolicy extends MicrosoftGraphEntity{
   conditions?: {applications?: MicrosoftGraphConditionalAccessApplications,clientApplications?: MicrosoftGraphConditionalAccessClientApplications,clientAppTypes?: string[],devices?: MicrosoftGraphConditionalAccessDevices,locations?: MicrosoftGraphConditionalAccessLocations,platforms?: MicrosoftGraphConditionalAccessPlatforms,servicePrincipalRiskLevels?: string[],signInRiskLevels?: string[],userRiskLevels?: string[],users?: MicrosoftGraphConditionalAccessUsers,"@odata.type"?: string,}
   createdDateTime?: string
   description?: string
   displayName?: string
   grantControls?: MicrosoftGraphConditionalAccessGrantControls
   modifiedDateTime?: string
   sessionControls?: MicrosoftGraphConditionalAccessSessionControls
   state?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentitySecurityDefaultsEnforcementPolicy extends MicrosoftGraphPolicyBase{
   isEnabled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicy extends MicrosoftGraphEntity{
   description?: string
   displayName?: string
   isOrganizationDefault?: boolean
   lastModifiedBy?: MicrosoftGraphIdentity
   lastModifiedDateTime?: string
   scopeId?: string
   scopeType?: string
   effectiveRules?: MicrosoftGraphUnifiedRoleManagementPolicyRule[]
   rules?: MicrosoftGraphUnifiedRoleManagementPolicyRule[]
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyAssignment extends MicrosoftGraphEntity{
   policyId?: string
   roleDefinitionId?: string
   scopeId?: string
   scopeType?: string
   policy?: MicrosoftGraphUnifiedRoleManagementPolicy
   "@odata.type"?: string
}
export interface MicrosoftGraphTemporaryAccessPassAuthenticationMethodConfiguration extends MicrosoftGraphAuthenticationMethodConfiguration{
   defaultLength?: number
   defaultLifetimeInMinutes?: number
   isUsableOnce?: boolean
   maximumLifetimeInMinutes?: number
   minimumLifetimeInMinutes?: number
   includeTargets?: MicrosoftGraphAuthenticationMethodTarget[]
   "@odata.type"?: string
}
export interface MicrosoftGraphX509CertificateAuthenticationMethodConfiguration extends MicrosoftGraphAuthenticationMethodConfiguration{
   authenticationModeConfiguration?: MicrosoftGraphX509CertificateAuthenticationModeConfiguration
   certificateUserBindings?: MicrosoftGraphX509CertificateUserBinding[]
   includeTargets?: MicrosoftGraphAuthenticationMethodTarget[]
   "@odata.type"?: string
}
export interface MicrosoftGraphBitlocker extends MicrosoftGraphEntity{
   recoveryKeys?: MicrosoftGraphBitlockerRecoveryKey[]
   "@odata.type"?: string
}
export interface MicrosoftGraphBitlockerRecoveryKey extends MicrosoftGraphEntity{
   createdDateTime?: string
   deviceId?: string
   key?: string
   volumeType?: MicrosoftGraphVolumeType
   "@odata.type"?: string
}
export interface MicrosoftGraphInformationProtection extends MicrosoftGraphEntity{
   bitlocker?: MicrosoftGraphBitlocker
   threatAssessmentRequests?: MicrosoftGraphThreatAssessmentRequest[]
   "@odata.type"?: string
}
export interface MicrosoftGraphThreatAssessmentRequest extends MicrosoftGraphEntity{
   category?: string
   contentType?: MicrosoftGraphThreatAssessmentContentType
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   expectedAssessment?: string
   requestSource?: MicrosoftGraphThreatAssessmentRequestSource
   status?: MicrosoftGraphThreatAssessmentStatus
   results?: MicrosoftGraphThreatAssessmentResult[]
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingAppointment extends MicrosoftGraphEntity{
   additionalInformation?: string
   anonymousJoinWebUrl?: string
   customers?: {"@odata.type"?: string,}
   customerTimeZone?: string
   duration?: string
   endDateTime?: {dateTime?: string,timeZone?: string,"@odata.type"?: string,}
   filledAttendeesCount?: number
   isLocationOnline?: boolean
   joinWebUrl?: string
   maximumAttendeesCount?: number
   optOutOfCustomerEmail?: boolean
   postBuffer?: string
   preBuffer?: string
   price?: unknown
   priceType?: string
   reminders?: MicrosoftGraphBookingReminder[]
   selfServiceAppointmentId?: string
   serviceId?: string
   serviceLocation?: MicrosoftGraphLocation
   serviceName?: string
   serviceNotes?: string
   smsNotificationsEnabled?: boolean
   staffMemberIds?: string[]
   startDateTime?: {dateTime?: string,timeZone?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingBusiness extends MicrosoftGraphEntity{
   address?: MicrosoftGraphPhysicalAddress
   businessHours?: MicrosoftGraphBookingWorkHours[]
   businessType?: string
   defaultCurrencyIso?: string
   displayName?: string
   email?: string
   isPublished?: boolean
   languageTag?: string
   phone?: string
   publicUrl?: string
   schedulingPolicy?: MicrosoftGraphBookingSchedulingPolicy
   webSiteUrl?: string
   appointments?: MicrosoftGraphBookingAppointment[]
   calendarView?: MicrosoftGraphBookingAppointment[]
   customers?: MicrosoftGraphBookingCustomerBase[]
   customQuestions?: MicrosoftGraphBookingCustomQuestion[]
   services?: MicrosoftGraphBookingService[]
   staffMembers?: MicrosoftGraphBookingStaffMemberBase[]
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingCustomerBase extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingCustomQuestion extends MicrosoftGraphEntity{
   answerInputType?: MicrosoftGraphAnswerInputType
   answerOptions?: string[]
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingService extends MicrosoftGraphEntity{
   additionalInformation?: string
   customQuestions?: MicrosoftGraphBookingQuestionAssignment[]
   defaultDuration?: string
   defaultLocation?: MicrosoftGraphLocation
   defaultPrice?: unknown
   defaultPriceType?: string
   defaultReminders?: MicrosoftGraphBookingReminder[]
   description?: string
   displayName?: string
   isAnonymousJoinEnabled?: boolean
   isHiddenFromCustomers?: boolean
   isLocationOnline?: boolean
   languageTag?: string
   maximumAttendeesCount?: number
   notes?: string
   postBuffer?: string
   preBuffer?: string
   schedulingPolicy?: MicrosoftGraphBookingSchedulingPolicy
   smsNotificationsEnabled?: boolean
   staffMemberIds?: string[]
   webUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingStaffMemberBase extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingCurrency extends MicrosoftGraphEntity{
   symbol?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingCustomer extends MicrosoftGraphBookingCustomerBase{
   addresses?: MicrosoftGraphPhysicalAddress[]
   displayName?: string
   emailAddress?: string
   phones?: MicrosoftGraphPhone[]
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingStaffMember extends MicrosoftGraphBookingStaffMemberBase{
   availabilityIsAffectedByPersonalCalendar?: boolean
   displayName?: string
   emailAddress?: string
   isEmailNotificationEnabled?: boolean
   role?: string
   timeZone?: string
   useBusinessHours?: boolean
   workingHours?: MicrosoftGraphBookingWorkHours[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSolutionsRoot{
   bookingBusinesses?: MicrosoftGraphBookingBusiness[]
   bookingCurrencies?: MicrosoftGraphBookingCurrency[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthoredNote extends MicrosoftGraphEntity{
   author?: MicrosoftGraphIdentity
   content?: MicrosoftGraphItemBody
   createdDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPrivacy{
   subjectRightsRequests?: MicrosoftGraphSubjectRightsRequest[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSubjectRightsRequest extends MicrosoftGraphEntity{
   assignedTo?: MicrosoftGraphIdentity
   closedDateTime?: string
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   dataSubject?: MicrosoftGraphDataSubject
   dataSubjectType?: MicrosoftGraphDataSubjectType
   description?: string
   displayName?: string
   history?: MicrosoftGraphSubjectRightsRequestHistory[]
   insight?: MicrosoftGraphSubjectRightsRequestDetail
   internalDueDateTime?: string
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   regulations?: string[]
   stages?: MicrosoftGraphSubjectRightsRequestStageDetail[]
   status?: MicrosoftGraphSubjectRightsRequestStatus
   type?: MicrosoftGraphSubjectRightsRequestType
   notes?: MicrosoftGraphAuthoredNote[]
   team?: MicrosoftGraphTeam
   "@odata.type"?: string
}
export interface MicrosoftGraphChannel extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   displayName?: string
   email?: string
   isFavoriteByDefault?: boolean
   membershipType?: MicrosoftGraphChannelMembershipType
   tenantId?: string
   webUrl?: string
   filesFolder?: MicrosoftGraphDriveItem
   members?: MicrosoftGraphConversationMember[]
   messages?: MicrosoftGraphChatMessage[]
   sharedWithTeams?: MicrosoftGraphSharedWithChannelTeamInfo[]
   tabs?: MicrosoftGraphTeamsTab[]
   "@odata.type"?: string
}
export interface MicrosoftGraphGroup extends MicrosoftGraphDirectoryObject{
   assignedLabels?: MicrosoftGraphAssignedLabel[]
   assignedLicenses?: MicrosoftGraphAssignedLicense[]
   classification?: string
   createdDateTime?: string
   description?: string
   displayName?: string
   expirationDateTime?: string
   groupTypes?: string[]
   hasMembersWithLicenseErrors?: boolean
   isAssignableToRole?: boolean
   licenseProcessingState?: MicrosoftGraphLicenseProcessingState
   mail?: string
   mailEnabled?: boolean
   mailNickname?: string
   membershipRule?: string
   membershipRuleProcessingState?: string
   onPremisesDomainName?: string
   onPremisesLastSyncDateTime?: string
   onPremisesNetBiosName?: string
   onPremisesProvisioningErrors?: MicrosoftGraphOnPremisesProvisioningError[]
   onPremisesSamAccountName?: string
   onPremisesSecurityIdentifier?: string
   onPremisesSyncEnabled?: boolean
   preferredDataLocation?: string
   preferredLanguage?: string
   proxyAddresses?: string[]
   renewedDateTime?: string
   securityEnabled?: boolean
   securityIdentifier?: string
   theme?: string
   visibility?: string
   allowExternalSenders?: boolean
   autoSubscribeNewMembers?: boolean
   hideFromAddressLists?: boolean
   hideFromOutlookClients?: boolean
   isSubscribedByMail?: boolean
   unseenCount?: number
   isArchived?: boolean
   appRoleAssignments?: MicrosoftGraphAppRoleAssignment[]
   createdOnBehalfOf?: MicrosoftGraphDirectoryObject
   memberOf?: MicrosoftGraphDirectoryObject[]
   members?: MicrosoftGraphDirectoryObject[]
   membersWithLicenseErrors?: MicrosoftGraphDirectoryObject[]
   owners?: MicrosoftGraphDirectoryObject[]
   permissionGrants?: MicrosoftGraphResourceSpecificPermissionGrant[]
   settings?: MicrosoftGraphGroupSetting[]
   transitiveMemberOf?: MicrosoftGraphDirectoryObject[]
   transitiveMembers?: MicrosoftGraphDirectoryObject[]
   acceptedSenders?: MicrosoftGraphDirectoryObject[]
   calendar?: MicrosoftGraphCalendar
   calendarView?: MicrosoftGraphEvent[]
   conversations?: MicrosoftGraphConversation[]
   events?: MicrosoftGraphEvent[]
   rejectedSenders?: MicrosoftGraphDirectoryObject[]
   threads?: MicrosoftGraphConversationThread[]
   drive?: MicrosoftGraphDrive
   drives?: MicrosoftGraphDrive[]
   sites?: MicrosoftGraphSite[]
   extensions?: MicrosoftGraphExtension[]
   groupLifecyclePolicies?: MicrosoftGraphGroupLifecyclePolicy[]
   planner?: MicrosoftGraphPlannerGroup
   onenote?: MicrosoftGraphOnenote
   photo?: MicrosoftGraphProfilePhoto
   photos?: MicrosoftGraphProfilePhoto[]
   team?: MicrosoftGraphTeam
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamsAppInstallation extends MicrosoftGraphEntity{
   teamsApp?: MicrosoftGraphTeamsApp
   teamsAppDefinition?: MicrosoftGraphTeamsAppDefinition
   "@odata.type"?: string
}
export interface MicrosoftGraphConversationMember extends MicrosoftGraphEntity{
   displayName?: string
   roles?: string[]
   visibleHistoryStartDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamsAsyncOperation extends MicrosoftGraphEntity{
   attemptsCount?: number
   createdDateTime?: string
   error?: MicrosoftGraphOperationError
   lastActionDateTime?: string
   operationType?: string
   status?: string
   targetResourceId?: string
   targetResourceLocation?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamworkTag extends MicrosoftGraphEntity{
   description?: string
   displayName?: string
   memberCount?: number
   tagType?: MicrosoftGraphTeamworkTagType
   teamId?: string
   members?: MicrosoftGraphTeamworkTagMember[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamsTemplate extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphSchedule extends MicrosoftGraphEntity{
   enabled?: boolean
   offerShiftRequestsEnabled?: boolean
   openShiftsEnabled?: boolean
   provisionStatus?: MicrosoftGraphOperationStatus
   provisionStatusCode?: string
   swapShiftsRequestsEnabled?: boolean
   timeClockEnabled?: boolean
   timeOffRequestsEnabled?: boolean
   timeZone?: string
   workforceIntegrationIds?: string[]
   offerShiftRequests?: MicrosoftGraphOfferShiftRequest[]
   openShiftChangeRequests?: MicrosoftGraphOpenShiftChangeRequest[]
   openShifts?: MicrosoftGraphOpenShift[]
   schedulingGroups?: MicrosoftGraphSchedulingGroup[]
   shifts?: MicrosoftGraphShift[]
   swapShiftsChangeRequests?: MicrosoftGraphSwapShiftsChangeRequest[]
   timeOffReasons?: MicrosoftGraphTimeOffReason[]
   timeOffRequests?: MicrosoftGraphTimeOffRequest[]
   timesOff?: MicrosoftGraphTimeOff[]
   "@odata.type"?: string
}
export interface MicrosoftGraphCompliance{
   "@odata.type"?: string
}
export interface MicrosoftGraphResourceSpecificPermissionGrant extends MicrosoftGraphDirectoryObject{
   clientAppId?: string
   clientId?: string
   permission?: string
   permissionType?: string
   resourceAppId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphGroupSetting extends MicrosoftGraphEntity{
   displayName?: string
   templateId?: string
   values?: {name?: string,value?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphConversation extends MicrosoftGraphEntity{
   hasAttachments?: boolean
   lastDeliveredDateTime?: string
   preview?: string
   topic?: string
   uniqueSenders?: string[]
   threads?: MicrosoftGraphConversationThread[]
   "@odata.type"?: string
}
export interface MicrosoftGraphConversationThread extends MicrosoftGraphEntity{
   ccRecipients?: {emailAddress?: MicrosoftGraphEmailAddress,"@odata.type"?: string,}
   hasAttachments?: boolean
   isLocked?: boolean
   lastDeliveredDateTime?: string
   preview?: string
   topic?: string
   toRecipients?: {emailAddress?: MicrosoftGraphEmailAddress,"@odata.type"?: string,}
   uniqueSenders?: string[]
   posts?: MicrosoftGraphPost[]
   "@odata.type"?: string
}
export interface MicrosoftGraphGroupLifecyclePolicy extends MicrosoftGraphEntity{
   alternateNotificationEmails?: string
   groupLifetimeInDays?: number
   managedGroupTypes?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerGroup extends MicrosoftGraphEntity{
   plans?: MicrosoftGraphPlannerPlan[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurity extends MicrosoftGraphEntity{
   cases?: MicrosoftGraphSecurityCasesRoot
   attackSimulation?: MicrosoftGraphAttackSimulationRoot
   alerts?: MicrosoftGraphAlert[]
   secureScoreControlProfiles?: MicrosoftGraphSecureScoreControlProfile[]
   secureScores?: MicrosoftGraphSecureScore[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAttackSimulationRoot extends MicrosoftGraphEntity{
   simulationAutomations?: MicrosoftGraphSimulationAutomation[]
   simulations?: MicrosoftGraphSimulation[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAlert extends MicrosoftGraphEntity{
   activityGroupName?: string
   alertDetections?: MicrosoftGraphAlertDetection[]
   assignedTo?: string
   azureSubscriptionId?: string
   azureTenantId?: string
   category?: string
   closedDateTime?: string
   cloudAppStates?: MicrosoftGraphCloudAppSecurityState[]
   comments?: string[]
   confidence?: number
   createdDateTime?: string
   description?: string
   detectionIds?: string[]
   eventDateTime?: string
   feedback?: MicrosoftGraphAlertFeedback
   fileStates?: MicrosoftGraphFileSecurityState[]
   historyStates?: MicrosoftGraphAlertHistoryState[]
   hostStates?: MicrosoftGraphHostSecurityState[]
   incidentIds?: string[]
   investigationSecurityStates?: MicrosoftGraphInvestigationSecurityState[]
   lastEventDateTime?: string
   lastModifiedDateTime?: string
   malwareStates?: MicrosoftGraphMalwareState[]
   messageSecurityStates?: MicrosoftGraphMessageSecurityState[]
   networkConnections?: MicrosoftGraphNetworkConnection[]
   processes?: MicrosoftGraphProcess[]
   recommendedActions?: string[]
   registryKeyStates?: MicrosoftGraphRegistryKeyState[]
   securityResources?: MicrosoftGraphSecurityResource[]
   severity?: string
   sourceMaterials?: string[]
   status?: string
   tags?: string[]
   title?: string
   triggers?: MicrosoftGraphAlertTrigger[]
   uriClickSecurityStates?: MicrosoftGraphUriClickSecurityState[]
   userStates?: MicrosoftGraphUserSecurityState[]
   vendorInformation?: MicrosoftGraphSecurityVendorInformation
   vulnerabilityStates?: MicrosoftGraphVulnerabilityState[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSecureScoreControlProfile extends MicrosoftGraphEntity{
   actionType?: string
   actionUrl?: string
   azureTenantId?: string
   complianceInformation?: MicrosoftGraphComplianceInformation[]
   controlCategory?: string
   controlStateUpdates?: MicrosoftGraphSecureScoreControlStateUpdate[]
   deprecated?: boolean
   implementationCost?: string
   lastModifiedDateTime?: string
   maxScore?: unknown
   rank?: number
   remediation?: string
   remediationImpact?: string
   service?: string
   threats?: string[]
   tier?: string
   title?: string
   userImpact?: string
   vendorInformation?: MicrosoftGraphSecurityVendorInformation
   "@odata.type"?: string
}
export interface MicrosoftGraphSecureScore extends MicrosoftGraphEntity{
   activeUserCount?: number
   averageComparativeScores?: MicrosoftGraphAverageComparativeScore[]
   azureTenantId?: string
   controlScores?: MicrosoftGraphControlScore[]
   createdDateTime?: string
   currentScore?: unknown
   enabledServices?: string[]
   licensedUserCount?: number
   maxScore?: unknown
   vendorInformation?: MicrosoftGraphSecurityVendorInformation
   "@odata.type"?: string
}
export interface MicrosoftGraphItemAnalytics extends MicrosoftGraphEntity{
   allTime?: MicrosoftGraphItemActivityStat
   itemActivityStats?: MicrosoftGraphItemActivityStat[]
   lastSevenDays?: MicrosoftGraphItemActivityStat
   "@odata.type"?: string
}
export interface MicrosoftGraphColumnDefinition extends MicrosoftGraphEntity{
   boolean?: MicrosoftGraphBooleanColumn
   calculated?: MicrosoftGraphCalculatedColumn
   choice?: MicrosoftGraphChoiceColumn
   columnGroup?: string
   contentApprovalStatus?: MicrosoftGraphContentApprovalStatusColumn
   currency?: MicrosoftGraphCurrencyColumn
   dateTime?: MicrosoftGraphDateTimeColumn
   defaultValue?: MicrosoftGraphDefaultColumnValue
   description?: string
   displayName?: string
   enforceUniqueValues?: boolean
   geolocation?: MicrosoftGraphGeolocationColumn
   hidden?: boolean
   hyperlinkOrPicture?: MicrosoftGraphHyperlinkOrPictureColumn
   indexed?: boolean
   isDeletable?: boolean
   isReorderable?: boolean
   isSealed?: boolean
   lookup?: MicrosoftGraphLookupColumn
   name?: string
   number?: MicrosoftGraphNumberColumn
   personOrGroup?: MicrosoftGraphPersonOrGroupColumn
   propagateChanges?: boolean
   readOnly?: boolean
   required?: boolean
   sourceContentType?: MicrosoftGraphContentTypeInfo
   term?: MicrosoftGraphTermColumn
   text?: MicrosoftGraphTextColumn
   thumbnail?: MicrosoftGraphThumbnailColumn
   type?: MicrosoftGraphColumnTypes
   validation?: MicrosoftGraphColumnValidation
   sourceColumn?: MicrosoftGraphColumnDefinition
   "@odata.type"?: string
}
export interface MicrosoftGraphContentType extends MicrosoftGraphEntity{
   associatedHubsUrls?: string[]
   description?: string
   documentSet?: MicrosoftGraphDocumentSet
   documentTemplate?: MicrosoftGraphDocumentSetContent
   group?: string
   hidden?: boolean
   inheritedFrom?: MicrosoftGraphItemReference
   isBuiltIn?: boolean
   name?: string
   order?: MicrosoftGraphContentTypeOrder
   parentId?: string
   propagateChanges?: boolean
   readOnly?: boolean
   sealed?: boolean
   base?: MicrosoftGraphContentType
   baseTypes?: MicrosoftGraphContentType[]
   columnLinks?: MicrosoftGraphColumnLink[]
   columnPositions?: MicrosoftGraphColumnDefinition[]
   columns?: MicrosoftGraphColumnDefinition[]
   "@odata.type"?: string
}
export interface MicrosoftGraphList extends MicrosoftGraphBaseItem{
   displayName?: string
   list?: MicrosoftGraphListInfo
   sharepointIds?: MicrosoftGraphSharepointIds
   system?: MicrosoftGraphSystemFacet
   columns?: MicrosoftGraphColumnDefinition[]
   contentTypes?: MicrosoftGraphContentType[]
   drive?: MicrosoftGraphDrive
   items?: MicrosoftGraphListItem[]
   operations?: MicrosoftGraphRichLongRunningOperation[]
   subscriptions?: MicrosoftGraphSubscription[]
   "@odata.type"?: string
}
export interface MicrosoftGraphLongRunningOperation extends MicrosoftGraphEntity{
   createdDateTime?: string
   lastActionDateTime?: string
   resourceLocation?: string
   status?: MicrosoftGraphLongRunningOperationStatus
   statusDetail?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRichLongRunningOperation extends MicrosoftGraphLongRunningOperation{
   error?: MicrosoftGraphPublicError
   percentageComplete?: number
   resourceId?: string
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPermission extends MicrosoftGraphEntity{
   expirationDateTime?: string
   grantedTo?: MicrosoftGraphIdentitySet
   grantedToIdentities?: MicrosoftGraphIdentitySet[]
   grantedToIdentitiesV2?: MicrosoftGraphSharePointIdentitySet[]
   grantedToV2?: MicrosoftGraphSharePointIdentitySet
   hasPassword?: boolean
   inheritedFrom?: MicrosoftGraphItemReference
   invitation?: MicrosoftGraphSharingInvitation
   link?: MicrosoftGraphSharingLink
   roles?: string[]
   shareId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentityApiConnector extends MicrosoftGraphEntity{
   authenticationConfiguration?: MicrosoftGraphApiAuthenticationConfigurationBase
   displayName?: string
   targetUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentityProviderBase extends MicrosoftGraphEntity{
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAppleManagedIdentityProvider extends MicrosoftGraphIdentityProviderBase{
   certificateData?: string
   developerId?: string
   keyId?: string
   serviceId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentityUserFlow extends MicrosoftGraphEntity{
   userFlowType?: string
   userFlowTypeVersion?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphB2xIdentityUserFlow extends MicrosoftGraphIdentityUserFlow{
   apiConnectorConfiguration?: MicrosoftGraphUserFlowApiConnectorConfiguration
   identityProviders?: MicrosoftGraphIdentityProvider[]
   languages?: MicrosoftGraphUserFlowLanguageConfiguration[]
   userAttributeAssignments?: MicrosoftGraphIdentityUserFlowAttributeAssignment[]
   userFlowIdentityProviders?: MicrosoftGraphIdentityProviderBase[]
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentityProvider extends MicrosoftGraphEntity{
   clientId?: string
   clientSecret?: string
   name?: string
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUserFlowLanguageConfiguration extends MicrosoftGraphEntity{
   displayName?: string
   isEnabled?: boolean
   defaultPages?: MicrosoftGraphUserFlowLanguagePage[]
   overridesPages?: MicrosoftGraphUserFlowLanguagePage[]
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentityUserFlowAttributeAssignment extends MicrosoftGraphEntity{
   displayName?: string
   isOptional?: boolean
   requiresVerification?: boolean
   userAttributeValues?: MicrosoftGraphUserAttributeValuesItem[]
   userInputType?: string
   userAttribute?: MicrosoftGraphIdentityUserFlowAttribute
   "@odata.type"?: string
}
export interface MicrosoftGraphBuiltInIdentityProvider extends MicrosoftGraphIdentityProviderBase{
   identityProviderType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentityUserFlowAttribute extends MicrosoftGraphEntity{
   dataType?: string
   description?: string
   displayName?: string
   userFlowAttributeType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentityBuiltInUserFlowAttribute extends MicrosoftGraphIdentityUserFlowAttribute{
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentityContainer extends MicrosoftGraphEntity{
   apiConnectors?: MicrosoftGraphIdentityApiConnector[]
   b2xUserFlows?: MicrosoftGraphB2xIdentityUserFlow[]
   identityProviders?: MicrosoftGraphIdentityProviderBase[]
   userFlowAttributes?: MicrosoftGraphIdentityUserFlowAttribute[]
   conditionalAccess?: MicrosoftGraphConditionalAccessRoot
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessRoot extends MicrosoftGraphEntity{
   authenticationContextClassReferences?: MicrosoftGraphAuthenticationContextClassReference[]
   namedLocations?: MicrosoftGraphNamedLocation[]
   policies?: MicrosoftGraphConditionalAccessPolicy[]
   templates?: MicrosoftGraphConditionalAccessTemplate[]
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentityCustomUserFlowAttribute extends MicrosoftGraphIdentityUserFlowAttribute{
   "@odata.type"?: string
}
export interface MicrosoftGraphSocialIdentityProvider extends MicrosoftGraphIdentityProviderBase{
   clientId?: string
   clientSecret?: string
   identityProviderType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUserFlowLanguagePage extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphAdministrativeUnit extends MicrosoftGraphDirectoryObject{
   description?: string
   displayName?: string
   visibility?: string
   members?: MicrosoftGraphDirectoryObject[]
   scopedRoleMembers?: MicrosoftGraphScopedRoleMembership[]
   extensions?: MicrosoftGraphExtension[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAppScope extends MicrosoftGraphEntity{
   displayName?: string
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCertificateBasedAuthConfiguration extends MicrosoftGraphEntity{
   certificateAuthorities?: {certificate?: string,certificateRevocationListUrl?: string,deltaCertificateRevocationListUrl?: string,isRootAuthority?: boolean,issuer?: string,issuerSki?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphContract extends MicrosoftGraphDirectoryObject{
   contractType?: string
   customerId?: string
   defaultDomainName?: string
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCrossTenantAccessPolicyConfigurationDefault extends MicrosoftGraphEntity{
   b2bCollaborationInbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting
   b2bCollaborationOutbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting
   b2bDirectConnectInbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting
   b2bDirectConnectOutbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting
   inboundTrust?: MicrosoftGraphCrossTenantAccessPolicyInboundTrust
   isServiceDefault?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphCrossTenantAccessPolicyConfigurationPartner{
   b2bCollaborationInbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting
   b2bCollaborationOutbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting
   b2bDirectConnectInbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting
   b2bDirectConnectOutbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting
   inboundTrust?: MicrosoftGraphCrossTenantAccessPolicyInboundTrust
   isServiceProvider?: boolean
   tenantId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDevice extends MicrosoftGraphDirectoryObject{
   accountEnabled?: boolean
   alternativeSecurityIds?: {identityProvider?: string,key?: string,type?: number,"@odata.type"?: string,}
   approximateLastSignInDateTime?: string
   complianceExpirationDateTime?: string
   deviceId?: string
   deviceMetadata?: string
   deviceVersion?: number
   displayName?: string
   isCompliant?: boolean
   isManaged?: boolean
   mdmAppId?: string
   onPremisesLastSyncDateTime?: string
   onPremisesSyncEnabled?: boolean
   operatingSystem?: string
   operatingSystemVersion?: string
   physicalIds?: string[]
   profileType?: string
   systemLabels?: string[]
   trustType?: string
   memberOf?: MicrosoftGraphDirectoryObject[]
   registeredOwners?: MicrosoftGraphDirectoryObject[]
   registeredUsers?: MicrosoftGraphDirectoryObject[]
   transitiveMemberOf?: MicrosoftGraphDirectoryObject[]
   extensions?: MicrosoftGraphExtension[]
   "@odata.type"?: string
}
export interface MicrosoftGraphDirectory extends MicrosoftGraphEntity{
   administrativeUnits?: MicrosoftGraphAdministrativeUnit[]
   deletedItems?: MicrosoftGraphDirectoryObject[]
   federationConfigurations?: MicrosoftGraphIdentityProviderBase[]
   "@odata.type"?: string
}
export interface MicrosoftGraphDirectoryObjectPartnerReference extends MicrosoftGraphDirectoryObject{
   description?: string
   displayName?: string
   externalPartnerTenantId?: string
   objectType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDirectoryRole extends MicrosoftGraphDirectoryObject{
   description?: string
   displayName?: string
   roleTemplateId?: string
   members?: MicrosoftGraphDirectoryObject[]
   scopedMembers?: MicrosoftGraphScopedRoleMembership[]
   "@odata.type"?: string
}
export interface MicrosoftGraphDirectoryRoleTemplate extends MicrosoftGraphDirectoryObject{
   description?: string
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDomain extends MicrosoftGraphEntity{
   authenticationType?: string
   availabilityStatus?: string
   isAdminManaged?: boolean
   isDefault?: boolean
   isInitial?: boolean
   isRoot?: boolean
   isVerified?: boolean
   manufacturer?: string
   model?: string
   passwordNotificationWindowInDays?: number
   passwordValidityPeriodInDays?: number
   state?: MicrosoftGraphDomainState
   supportedServices?: string[]
   domainNameReferences?: MicrosoftGraphDirectoryObject[]
   federationConfiguration?: MicrosoftGraphInternalDomainFederation[]
   serviceConfigurationRecords?: MicrosoftGraphDomainDnsRecord[]
   verificationDnsRecords?: MicrosoftGraphDomainDnsRecord[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSamlOrWsFedProvider extends MicrosoftGraphIdentityProviderBase{
   issuerUri?: string
   metadataExchangeUri?: string
   passiveSignInUri?: string
   preferredAuthenticationProtocol?: MicrosoftGraphAuthenticationProtocol
   signingCertificate?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphInternalDomainFederation extends MicrosoftGraphSamlOrWsFedProvider{
   activeSignInUri?: string
   federatedIdpMfaBehavior?: MicrosoftGraphFederatedIdpMfaBehavior
   isSignedAuthenticationRequestRequired?: boolean
   nextSigningCertificate?: string
   promptLoginBehavior?: MicrosoftGraphPromptLoginBehavior
   signingCertificateUpdateStatus?: MicrosoftGraphSigningCertificateUpdateStatus
   signOutUri?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDomainDnsRecord extends MicrosoftGraphEntity{
   isOptional?: boolean
   label?: string
   recordType?: string
   supportedService?: string
   ttl?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDomainDnsCnameRecord extends MicrosoftGraphDomainDnsRecord{
   canonicalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDomainDnsMxRecord extends MicrosoftGraphDomainDnsRecord{
   mailExchange?: string
   preference?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDomainDnsSrvRecord extends MicrosoftGraphDomainDnsRecord{
   nameTarget?: string
   port?: number
   priority?: number
   protocol?: string
   service?: string
   weight?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDomainDnsTxtRecord extends MicrosoftGraphDomainDnsRecord{
   text?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDomainDnsUnavailableRecord extends MicrosoftGraphDomainDnsRecord{
   description?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalDomainName extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphGroupSettingTemplate extends MicrosoftGraphDirectoryObject{
   description?: string
   displayName?: string
   values?: {defaultValue?: string,description?: string,name?: string,type?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphOrganization extends MicrosoftGraphDirectoryObject{
   assignedPlans?: {assignedDateTime?: string,capabilityStatus?: string,service?: string,servicePlanId?: string,"@odata.type"?: string,}
   businessPhones?: string[]
   city?: string
   country?: string
   countryLetterCode?: string
   createdDateTime?: string
   displayName?: string
   marketingNotificationEmails?: string[]
   onPremisesLastSyncDateTime?: string
   onPremisesSyncEnabled?: boolean
   postalCode?: string
   preferredLanguage?: string
   privacyProfile?: MicrosoftGraphPrivacyProfile
   provisionedPlans?: {capabilityStatus?: string,provisioningStatus?: string,service?: string,"@odata.type"?: string,}
   securityComplianceNotificationMails?: string[]
   securityComplianceNotificationPhones?: string[]
   state?: string
   street?: string
   technicalNotificationMails?: string[]
   tenantType?: string
   verifiedDomains?: {capabilities?: string,isDefault?: boolean,isInitial?: boolean,name?: string,type?: string,"@odata.type"?: string,}
   mobileDeviceManagementAuthority?: string
   branding?: MicrosoftGraphOrganizationalBranding
   certificateBasedAuthConfiguration?: MicrosoftGraphCertificateBasedAuthConfiguration[]
   extensions?: MicrosoftGraphExtension[]
   "@odata.type"?: string
}
export interface MicrosoftGraphOrganizationalBrandingProperties extends MicrosoftGraphEntity{
   backgroundColor?: string
   backgroundImage?: string
   backgroundImageRelativeUrl?: string
   bannerLogo?: string
   bannerLogoRelativeUrl?: string
   cdnList?: string[]
   signInPageText?: string
   squareLogo?: string
   squareLogoRelativeUrl?: string
   usernameHintText?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOrganizationalBranding extends MicrosoftGraphOrganizationalBrandingProperties{
   localizations?: MicrosoftGraphOrganizationalBrandingLocalization[]
   "@odata.type"?: string
}
export interface MicrosoftGraphOrganizationalBrandingLocalization extends MicrosoftGraphOrganizationalBrandingProperties{
   "@odata.type"?: string
}
export interface MicrosoftGraphOrgContact extends MicrosoftGraphDirectoryObject{
   addresses?: MicrosoftGraphPhysicalOfficeAddress[]
   companyName?: string
   department?: string
   displayName?: string
   givenName?: string
   jobTitle?: string
   mail?: string
   mailNickname?: string
   onPremisesLastSyncDateTime?: string
   onPremisesProvisioningErrors?: MicrosoftGraphOnPremisesProvisioningError[]
   onPremisesSyncEnabled?: boolean
   phones?: MicrosoftGraphPhone[]
   proxyAddresses?: string[]
   surname?: string
   directReports?: MicrosoftGraphDirectoryObject[]
   manager?: MicrosoftGraphDirectoryObject
   memberOf?: MicrosoftGraphDirectoryObject[]
   transitiveMemberOf?: MicrosoftGraphDirectoryObject[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPermissionGrantConditionSet extends MicrosoftGraphEntity{
   clientApplicationIds?: string[]
   clientApplicationPublisherIds?: string[]
   clientApplicationsFromVerifiedPublisherOnly?: boolean
   clientApplicationTenantIds?: string[]
   permissionClassification?: string
   permissions?: string[]
   permissionType?: MicrosoftGraphPermissionType
   resourceApplication?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRbacApplication extends MicrosoftGraphEntity{
   roleAssignments?: MicrosoftGraphUnifiedRoleAssignment[]
   roleDefinitions?: MicrosoftGraphUnifiedRoleDefinition[]
   roleAssignmentScheduleInstances?: MicrosoftGraphUnifiedRoleAssignmentScheduleInstance[]
   roleAssignmentScheduleRequests?: MicrosoftGraphUnifiedRoleAssignmentScheduleRequest[]
   roleAssignmentSchedules?: MicrosoftGraphUnifiedRoleAssignmentSchedule[]
   roleEligibilityScheduleInstances?: MicrosoftGraphUnifiedRoleEligibilityScheduleInstance[]
   roleEligibilityScheduleRequests?: MicrosoftGraphUnifiedRoleEligibilityScheduleRequest[]
   roleEligibilitySchedules?: MicrosoftGraphUnifiedRoleEligibilitySchedule[]
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleAssignment extends MicrosoftGraphEntity{
   appScopeId?: string
   condition?: string
   directoryScopeId?: string
   principalId?: string
   roleDefinitionId?: string
   appScope?: MicrosoftGraphAppScope
   directoryScope?: MicrosoftGraphDirectoryObject
   principal?: MicrosoftGraphDirectoryObject
   roleDefinition?: MicrosoftGraphUnifiedRoleDefinition
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleDefinition extends MicrosoftGraphEntity{
   description?: string
   displayName?: string
   isBuiltIn?: boolean
   isEnabled?: boolean
   resourceScopes?: string[]
   rolePermissions?: {allowedResourceActions?: string[],condition?: string,excludedResourceActions?: string[],"@odata.type"?: string,}
   templateId?: string
   version?: string
   inheritsPermissionsFrom?: MicrosoftGraphUnifiedRoleDefinition[]
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleScheduleInstanceBase extends MicrosoftGraphEntity{
   appScopeId?: string
   directoryScopeId?: string
   principalId?: string
   roleDefinitionId?: string
   appScope?: MicrosoftGraphAppScope
   directoryScope?: MicrosoftGraphDirectoryObject
   principal?: MicrosoftGraphDirectoryObject
   roleDefinition?: MicrosoftGraphUnifiedRoleDefinition
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleAssignmentScheduleInstance extends MicrosoftGraphUnifiedRoleScheduleInstanceBase{
   assignmentType?: string
   endDateTime?: string
   memberType?: string
   roleAssignmentOriginId?: string
   roleAssignmentScheduleId?: string
   startDateTime?: string
   activatedUsing?: MicrosoftGraphUnifiedRoleEligibilityScheduleInstance
   "@odata.type"?: string
}
export interface MicrosoftGraphRequest extends MicrosoftGraphEntity{
   approvalId?: string
   completedDateTime?: string
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   customData?: string
   status?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleAssignmentScheduleRequest extends MicrosoftGraphRequest{
   action?: MicrosoftGraphUnifiedRoleScheduleRequestActions
   appScopeId?: string
   directoryScopeId?: string
   isValidationOnly?: boolean
   justification?: string
   principalId?: string
   roleDefinitionId?: string
   scheduleInfo?: MicrosoftGraphRequestSchedule
   targetScheduleId?: string
   ticketInfo?: MicrosoftGraphTicketInfo
   activatedUsing?: MicrosoftGraphUnifiedRoleEligibilitySchedule
   appScope?: MicrosoftGraphAppScope
   directoryScope?: MicrosoftGraphDirectoryObject
   principal?: MicrosoftGraphDirectoryObject
   roleDefinition?: MicrosoftGraphUnifiedRoleDefinition
   targetSchedule?: MicrosoftGraphUnifiedRoleAssignmentSchedule
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleScheduleBase extends MicrosoftGraphEntity{
   appScopeId?: string
   createdDateTime?: string
   createdUsing?: string
   directoryScopeId?: string
   modifiedDateTime?: string
   principalId?: string
   roleDefinitionId?: string
   status?: string
   appScope?: MicrosoftGraphAppScope
   directoryScope?: MicrosoftGraphDirectoryObject
   principal?: MicrosoftGraphDirectoryObject
   roleDefinition?: MicrosoftGraphUnifiedRoleDefinition
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleAssignmentSchedule extends MicrosoftGraphUnifiedRoleScheduleBase{
   assignmentType?: string
   memberType?: string
   scheduleInfo?: MicrosoftGraphRequestSchedule
   activatedUsing?: MicrosoftGraphUnifiedRoleEligibilitySchedule
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleEligibilityScheduleInstance extends MicrosoftGraphUnifiedRoleScheduleInstanceBase{
   endDateTime?: string
   memberType?: string
   roleEligibilityScheduleId?: string
   startDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleEligibilityScheduleRequest extends MicrosoftGraphRequest{
   action?: MicrosoftGraphUnifiedRoleScheduleRequestActions
   appScopeId?: string
   directoryScopeId?: string
   isValidationOnly?: boolean
   justification?: string
   principalId?: string
   roleDefinitionId?: string
   scheduleInfo?: MicrosoftGraphRequestSchedule
   targetScheduleId?: string
   ticketInfo?: MicrosoftGraphTicketInfo
   appScope?: MicrosoftGraphAppScope
   directoryScope?: MicrosoftGraphDirectoryObject
   principal?: MicrosoftGraphDirectoryObject
   roleDefinition?: MicrosoftGraphUnifiedRoleDefinition
   targetSchedule?: MicrosoftGraphUnifiedRoleEligibilitySchedule
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleEligibilitySchedule extends MicrosoftGraphUnifiedRoleScheduleBase{
   memberType?: string
   scheduleInfo?: MicrosoftGraphRequestSchedule
   "@odata.type"?: string
}
export interface MicrosoftGraphRoleManagement{
   directory?: MicrosoftGraphRbacApplication
   entitlementManagement?: MicrosoftGraphRbacApplication
   "@odata.type"?: string
}
export interface MicrosoftGraphSamlOrWsFedExternalDomainFederation extends MicrosoftGraphSamlOrWsFedProvider{
   domains?: MicrosoftGraphExternalDomainName[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSubscribedSku extends MicrosoftGraphEntity{
   appliesTo?: string
   capabilityStatus?: string
   consumedUnits?: number
   prepaidUnits?: MicrosoftGraphLicenseUnitsDetail
   servicePlans?: {appliesTo?: string,provisioningStatus?: string,servicePlanId?: string,servicePlanName?: string,"@odata.type"?: string,}
   skuId?: string
   skuPartNumber?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationAssignment extends MicrosoftGraphEntity{
   addedStudentAction?: MicrosoftGraphEducationAddedStudentAction
   addToCalendarAction?: MicrosoftGraphEducationAddToCalendarOptions
   allowLateSubmissions?: boolean
   allowStudentsToAddResourcesToSubmission?: boolean
   assignDateTime?: string
   assignedDateTime?: string
   assignTo?: MicrosoftGraphEducationAssignmentRecipient
   classId?: string
   closeDateTime?: string
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   displayName?: string
   dueDateTime?: string
   grading?: MicrosoftGraphEducationAssignmentGradeType
   instructions?: MicrosoftGraphEducationItemBody
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   notificationChannelUrl?: string
   resourcesFolderUrl?: string
   status?: MicrosoftGraphEducationAssignmentStatus
   webUrl?: string
   categories?: MicrosoftGraphEducationCategory[]
   resources?: MicrosoftGraphEducationAssignmentResource[]
   rubric?: MicrosoftGraphEducationRubric
   submissions?: MicrosoftGraphEducationSubmission[]
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationCategory extends MicrosoftGraphEntity{
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationAssignmentResource extends MicrosoftGraphEntity{
   distributeForStudentWork?: boolean
   resource?: MicrosoftGraphEducationResource
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationRubric extends MicrosoftGraphEntity{
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   description?: MicrosoftGraphEducationItemBody
   displayName?: string
   grading?: MicrosoftGraphEducationAssignmentGradeType
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   levels?: MicrosoftGraphRubricLevel[]
   qualities?: MicrosoftGraphRubricQuality[]
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationSubmission extends MicrosoftGraphEntity{
   reassignedBy?: MicrosoftGraphIdentitySet
   reassignedDateTime?: string
   recipient?: MicrosoftGraphEducationSubmissionRecipient
   resourcesFolderUrl?: string
   returnedBy?: MicrosoftGraphIdentitySet
   returnedDateTime?: string
   status?: MicrosoftGraphEducationSubmissionStatus
   submittedBy?: MicrosoftGraphIdentitySet
   submittedDateTime?: string
   unsubmittedBy?: MicrosoftGraphIdentitySet
   unsubmittedDateTime?: string
   outcomes?: MicrosoftGraphEducationOutcome[]
   resources?: MicrosoftGraphEducationSubmissionResource[]
   submittedResources?: MicrosoftGraphEducationSubmissionResource[]
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationAssignmentDefaults extends MicrosoftGraphEntity{
   addedStudentAction?: MicrosoftGraphEducationAddedStudentAction
   addToCalendarAction?: MicrosoftGraphEducationAddToCalendarOptions
   dueTime?: string
   notificationChannelUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationAssignmentSettings extends MicrosoftGraphEntity{
   submissionAnimationDisabled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationClass extends MicrosoftGraphEntity{
   classCode?: string
   course?: MicrosoftGraphEducationCourse
   createdBy?: MicrosoftGraphIdentitySet
   description?: string
   displayName?: string
   externalId?: string
   externalName?: string
   externalSource?: MicrosoftGraphEducationExternalSource
   externalSourceDetail?: string
   grade?: string
   mailNickname?: string
   term?: MicrosoftGraphEducationTerm
   assignmentCategories?: MicrosoftGraphEducationCategory[]
   assignmentDefaults?: MicrosoftGraphEducationAssignmentDefaults
   assignments?: MicrosoftGraphEducationAssignment[]
   assignmentSettings?: MicrosoftGraphEducationAssignmentSettings
   group?: MicrosoftGraphGroup
   members?: MicrosoftGraphEducationUser[]
   schools?: MicrosoftGraphEducationSchool[]
   teachers?: MicrosoftGraphEducationUser[]
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationUser extends MicrosoftGraphEntity{
   relatedContacts?: MicrosoftGraphRelatedContact[]
   accountEnabled?: boolean
   assignedLicenses?: {disabledPlans?: string[],skuId?: string,"@odata.type"?: string,}
   assignedPlans?: {assignedDateTime?: string,capabilityStatus?: string,service?: string,servicePlanId?: string,"@odata.type"?: string,}
   businessPhones?: string[]
   createdBy?: MicrosoftGraphIdentitySet
   department?: string
   displayName?: string
   externalSource?: MicrosoftGraphEducationExternalSource
   externalSourceDetail?: string
   givenName?: string
   mail?: string
   mailingAddress?: MicrosoftGraphPhysicalAddress
   mailNickname?: string
   middleName?: string
   mobilePhone?: string
   officeLocation?: string
   onPremisesInfo?: MicrosoftGraphEducationOnPremisesInfo
   passwordPolicies?: string
   passwordProfile?: MicrosoftGraphPasswordProfile
   preferredLanguage?: string
   primaryRole?: string
   provisionedPlans?: {capabilityStatus?: string,provisioningStatus?: string,service?: string,"@odata.type"?: string,}
   refreshTokensValidFromDateTime?: string
   residenceAddress?: MicrosoftGraphPhysicalAddress
   showInAddressList?: boolean
   student?: MicrosoftGraphEducationStudent
   surname?: string
   teacher?: MicrosoftGraphEducationTeacher
   usageLocation?: string
   userPrincipalName?: string
   userType?: string
   assignments?: MicrosoftGraphEducationAssignment[]
   rubrics?: MicrosoftGraphEducationRubric[]
   classes?: MicrosoftGraphEducationClass[]
   schools?: MicrosoftGraphEducationSchool[]
   taughtClasses?: MicrosoftGraphEducationClass[]
   user?: MicrosoftGraphUser
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationOrganization extends MicrosoftGraphEntity{
   description?: string
   displayName?: string
   externalSource?: MicrosoftGraphEducationExternalSource
   externalSourceDetail?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationSchool extends MicrosoftGraphEducationOrganization{
   address?: MicrosoftGraphPhysicalAddress
   createdBy?: MicrosoftGraphIdentitySet
   externalId?: string
   externalPrincipalId?: string
   fax?: string
   highestGrade?: string
   lowestGrade?: string
   phone?: string
   principalEmail?: string
   principalName?: string
   schoolNumber?: string
   administrativeUnit?: MicrosoftGraphAdministrativeUnit
   classes?: MicrosoftGraphEducationClass[]
   users?: MicrosoftGraphEducationUser[]
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationOutcome extends MicrosoftGraphEntity{
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationFeedbackOutcome extends MicrosoftGraphEducationOutcome{
   feedback?: MicrosoftGraphEducationFeedback
   publishedFeedback?: MicrosoftGraphEducationFeedback
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationPointsOutcome extends MicrosoftGraphEducationOutcome{
   points?: MicrosoftGraphEducationAssignmentPointsGrade
   publishedPoints?: MicrosoftGraphEducationAssignmentPointsGrade
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationRoot{
   classes?: MicrosoftGraphEducationClass[]
   me?: MicrosoftGraphEducationUser
   schools?: MicrosoftGraphEducationSchool[]
   users?: MicrosoftGraphEducationUser[]
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationRubricOutcome extends MicrosoftGraphEducationOutcome{
   publishedRubricQualityFeedback?: MicrosoftGraphRubricQualityFeedbackModel[]
   publishedRubricQualitySelectedLevels?: MicrosoftGraphRubricQualitySelectedColumnModel[]
   rubricQualityFeedback?: MicrosoftGraphRubricQualityFeedbackModel[]
   rubricQualitySelectedLevels?: MicrosoftGraphRubricQualitySelectedColumnModel[]
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationSubmissionResource extends MicrosoftGraphEntity{
   assignmentResourceUrl?: string
   resource?: MicrosoftGraphEducationResource
   "@odata.type"?: string
}
export interface MicrosoftGraphDriveItem extends MicrosoftGraphBaseItem{
   audio?: MicrosoftGraphAudio
   bundle?: MicrosoftGraphBundle
   content?: string
   cTag?: string
   deleted?: MicrosoftGraphDeleted
   file?: MicrosoftGraphFile
   fileSystemInfo?: MicrosoftGraphFileSystemInfo
   folder?: MicrosoftGraphFolder
   image?: MicrosoftGraphImage
   location?: MicrosoftGraphGeoCoordinates
   malware?: MicrosoftGraphMalware
   package?: MicrosoftGraphPackage
   pendingOperations?: MicrosoftGraphPendingOperations
   photo?: MicrosoftGraphPhoto
   publication?: MicrosoftGraphPublicationFacet
   remoteItem?: MicrosoftGraphRemoteItem
   root?: MicrosoftGraphRoot
   searchResult?: MicrosoftGraphSearchResult
   shared?: MicrosoftGraphShared
   sharepointIds?: MicrosoftGraphSharepointIds
   size?: number
   specialFolder?: MicrosoftGraphSpecialFolder
   video?: MicrosoftGraphVideo
   webDavUrl?: string
   workbook?: MicrosoftGraphWorkbook
   analytics?: MicrosoftGraphItemAnalytics
   children?: MicrosoftGraphDriveItem[]
   listItem?: MicrosoftGraphListItem
   permissions?: MicrosoftGraphPermission[]
   subscriptions?: MicrosoftGraphSubscription[]
   thumbnails?: MicrosoftGraphThumbnailSet[]
   versions?: MicrosoftGraphDriveItemVersion[]
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbook extends MicrosoftGraphEntity{
   application?: MicrosoftGraphWorkbookApplication
   comments?: MicrosoftGraphWorkbookComment[]
   functions?: MicrosoftGraphWorkbookFunctions
   names?: MicrosoftGraphWorkbookNamedItem[]
   operations?: MicrosoftGraphWorkbookOperation[]
   tables?: MicrosoftGraphWorkbookTable[]
   worksheets?: MicrosoftGraphWorkbookWorksheet[]
   "@odata.type"?: string
}
export interface MicrosoftGraphListItem extends MicrosoftGraphBaseItem{
   contentType?: MicrosoftGraphContentTypeInfo
   sharepointIds?: MicrosoftGraphSharepointIds
   analytics?: MicrosoftGraphItemAnalytics
   documentSetVersions?: MicrosoftGraphDocumentSetVersion[]
   driveItem?: MicrosoftGraphDriveItem
   fields?: MicrosoftGraphFieldValueSet
   versions?: MicrosoftGraphListItemVersion[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSubscription extends MicrosoftGraphEntity{
   applicationId?: string
   changeType?: string
   clientState?: string
   creatorId?: string
   encryptionCertificate?: string
   encryptionCertificateId?: string
   expirationDateTime?: string
   includeResourceData?: boolean
   latestSupportedTlsVersion?: string
   lifecycleNotificationUrl?: string
   notificationQueryOptions?: string
   notificationUrl?: string
   notificationUrlAppId?: string
   resource?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphThumbnailSet extends MicrosoftGraphEntity{
   large?: MicrosoftGraphThumbnail
   medium?: MicrosoftGraphThumbnail
   small?: MicrosoftGraphThumbnail
   source?: MicrosoftGraphThumbnail
   "@odata.type"?: string
}
export interface MicrosoftGraphBaseItemVersion extends MicrosoftGraphEntity{
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   publication?: MicrosoftGraphPublicationFacet
   "@odata.type"?: string
}
export interface MicrosoftGraphDriveItemVersion extends MicrosoftGraphBaseItemVersion{
   content?: string
   size?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookApplication extends MicrosoftGraphEntity{
   calculationMode?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookComment extends MicrosoftGraphEntity{
   content?: string
   contentType?: string
   replies?: MicrosoftGraphWorkbookCommentReply[]
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookFunctions extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookNamedItem extends MicrosoftGraphEntity{
   comment?: string
   name?: string
   scope?: string
   type?: string
   value?: MicrosoftGraphJson
   visible?: boolean
   worksheet?: MicrosoftGraphWorkbookWorksheet
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookOperation extends MicrosoftGraphEntity{
   error?: MicrosoftGraphWorkbookOperationError
   resourceLocation?: string
   status?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookTable extends MicrosoftGraphEntity{
   highlightFirstColumn?: boolean
   highlightLastColumn?: boolean
   legacyId?: string
   name?: string
   showBandedColumns?: boolean
   showBandedRows?: boolean
   showFilterButton?: boolean
   showHeaders?: boolean
   showTotals?: boolean
   style?: string
   columns?: MicrosoftGraphWorkbookTableColumn[]
   rows?: MicrosoftGraphWorkbookTableRow[]
   sort?: MicrosoftGraphWorkbookTableSort
   worksheet?: MicrosoftGraphWorkbookWorksheet
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookWorksheet extends MicrosoftGraphEntity{
   name?: string
   position?: number
   visibility?: string
   charts?: MicrosoftGraphWorkbookChart[]
   names?: MicrosoftGraphWorkbookNamedItem[]
   pivotTables?: MicrosoftGraphWorkbookPivotTable[]
   protection?: MicrosoftGraphWorkbookWorksheetProtection
   tables?: MicrosoftGraphWorkbookTable[]
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChart extends MicrosoftGraphEntity{
   height?: unknown
   left?: unknown
   name?: string
   top?: unknown
   width?: unknown
   axes?: MicrosoftGraphWorkbookChartAxes
   dataLabels?: MicrosoftGraphWorkbookChartDataLabels
   format?: MicrosoftGraphWorkbookChartAreaFormat
   legend?: MicrosoftGraphWorkbookChartLegend
   series?: MicrosoftGraphWorkbookChartSeries[]
   title?: MicrosoftGraphWorkbookChartTitle
   worksheet?: MicrosoftGraphWorkbookWorksheet
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartAxes extends MicrosoftGraphEntity{
   categoryAxis?: MicrosoftGraphWorkbookChartAxis
   seriesAxis?: MicrosoftGraphWorkbookChartAxis
   valueAxis?: MicrosoftGraphWorkbookChartAxis
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartDataLabels extends MicrosoftGraphEntity{
   position?: string
   separator?: string
   showBubbleSize?: boolean
   showCategoryName?: boolean
   showLegendKey?: boolean
   showPercentage?: boolean
   showSeriesName?: boolean
   showValue?: boolean
   format?: MicrosoftGraphWorkbookChartDataLabelFormat
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartAreaFormat extends MicrosoftGraphEntity{
   fill?: MicrosoftGraphWorkbookChartFill
   font?: MicrosoftGraphWorkbookChartFont
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartLegend extends MicrosoftGraphEntity{
   overlay?: boolean
   position?: string
   visible?: boolean
   format?: MicrosoftGraphWorkbookChartLegendFormat
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartSeries extends MicrosoftGraphEntity{
   name?: string
   format?: MicrosoftGraphWorkbookChartSeriesFormat
   points?: MicrosoftGraphWorkbookChartPoint[]
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartTitle extends MicrosoftGraphEntity{
   overlay?: boolean
   text?: string
   visible?: boolean
   format?: MicrosoftGraphWorkbookChartTitleFormat
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartFill extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartFont extends MicrosoftGraphEntity{
   bold?: boolean
   color?: string
   italic?: boolean
   name?: string
   size?: unknown
   underline?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartAxis extends MicrosoftGraphEntity{
   majorUnit?: MicrosoftGraphJson
   maximum?: MicrosoftGraphJson
   minimum?: MicrosoftGraphJson
   minorUnit?: MicrosoftGraphJson
   format?: MicrosoftGraphWorkbookChartAxisFormat
   majorGridlines?: MicrosoftGraphWorkbookChartGridlines
   minorGridlines?: MicrosoftGraphWorkbookChartGridlines
   title?: MicrosoftGraphWorkbookChartAxisTitle
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartAxisFormat extends MicrosoftGraphEntity{
   font?: MicrosoftGraphWorkbookChartFont
   line?: MicrosoftGraphWorkbookChartLineFormat
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartGridlines extends MicrosoftGraphEntity{
   visible?: boolean
   format?: MicrosoftGraphWorkbookChartGridlinesFormat
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartAxisTitle extends MicrosoftGraphEntity{
   text?: string
   visible?: boolean
   format?: MicrosoftGraphWorkbookChartAxisTitleFormat
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartLineFormat extends MicrosoftGraphEntity{
   color?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartAxisTitleFormat extends MicrosoftGraphEntity{
   font?: MicrosoftGraphWorkbookChartFont
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartDataLabelFormat extends MicrosoftGraphEntity{
   fill?: MicrosoftGraphWorkbookChartFill
   font?: MicrosoftGraphWorkbookChartFont
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartGridlinesFormat extends MicrosoftGraphEntity{
   line?: MicrosoftGraphWorkbookChartLineFormat
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartLegendFormat extends MicrosoftGraphEntity{
   fill?: MicrosoftGraphWorkbookChartFill
   font?: MicrosoftGraphWorkbookChartFont
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartPoint extends MicrosoftGraphEntity{
   value?: MicrosoftGraphJson
   format?: MicrosoftGraphWorkbookChartPointFormat
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartPointFormat extends MicrosoftGraphEntity{
   fill?: MicrosoftGraphWorkbookChartFill
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartSeriesFormat extends MicrosoftGraphEntity{
   fill?: MicrosoftGraphWorkbookChartFill
   line?: MicrosoftGraphWorkbookChartLineFormat
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookChartTitleFormat extends MicrosoftGraphEntity{
   fill?: MicrosoftGraphWorkbookChartFill
   font?: MicrosoftGraphWorkbookChartFont
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookCommentReply extends MicrosoftGraphEntity{
   content?: string
   contentType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookFilter extends MicrosoftGraphEntity{
   criteria?: MicrosoftGraphWorkbookFilterCriteria
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookFormatProtection extends MicrosoftGraphEntity{
   formulaHidden?: boolean
   locked?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookFunctionResult extends MicrosoftGraphEntity{
   error?: string
   value?: MicrosoftGraphJson
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookPivotTable extends MicrosoftGraphEntity{
   name?: string
   worksheet?: MicrosoftGraphWorkbookWorksheet
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookRange extends MicrosoftGraphEntity{
   address?: string
   addressLocal?: string
   cellCount?: number
   columnCount?: number
   columnHidden?: boolean
   columnIndex?: number
   formulas?: MicrosoftGraphJson
   formulasLocal?: MicrosoftGraphJson
   formulasR1C1?: MicrosoftGraphJson
   hidden?: boolean
   numberFormat?: MicrosoftGraphJson
   rowCount?: number
   rowHidden?: boolean
   rowIndex?: number
   text?: MicrosoftGraphJson
   values?: MicrosoftGraphJson
   valueTypes?: MicrosoftGraphJson
   format?: MicrosoftGraphWorkbookRangeFormat
   sort?: MicrosoftGraphWorkbookRangeSort
   worksheet?: MicrosoftGraphWorkbookWorksheet
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookRangeFormat extends MicrosoftGraphEntity{
   columnWidth?: unknown
   horizontalAlignment?: string
   rowHeight?: unknown
   verticalAlignment?: string
   wrapText?: boolean
   borders?: MicrosoftGraphWorkbookRangeBorder[]
   fill?: MicrosoftGraphWorkbookRangeFill
   font?: MicrosoftGraphWorkbookRangeFont
   protection?: MicrosoftGraphWorkbookFormatProtection
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookRangeSort extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookRangeBorder extends MicrosoftGraphEntity{
   color?: string
   sideIndex?: string
   style?: string
   weight?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookRangeFill extends MicrosoftGraphEntity{
   color?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookRangeFont extends MicrosoftGraphEntity{
   bold?: boolean
   color?: string
   italic?: boolean
   name?: string
   size?: unknown
   underline?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookRangeView extends MicrosoftGraphEntity{
   cellAddresses?: MicrosoftGraphJson
   columnCount?: number
   formulas?: MicrosoftGraphJson
   formulasLocal?: MicrosoftGraphJson
   formulasR1C1?: MicrosoftGraphJson
   index?: number
   numberFormat?: MicrosoftGraphJson
   rowCount?: number
   text?: MicrosoftGraphJson
   values?: MicrosoftGraphJson
   valueTypes?: MicrosoftGraphJson
   rows?: MicrosoftGraphWorkbookRangeView[]
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookTableColumn extends MicrosoftGraphEntity{
   index?: number
   name?: string
   values?: MicrosoftGraphJson
   filter?: MicrosoftGraphWorkbookFilter
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookTableRow extends MicrosoftGraphEntity{
   index?: number
   values?: MicrosoftGraphJson
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookTableSort extends MicrosoftGraphEntity{
   fields?: MicrosoftGraphWorkbookSortField[]
   matchCase?: boolean
   method?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookWorksheetProtection extends MicrosoftGraphEntity{
   options?: MicrosoftGraphWorkbookWorksheetProtectionOptions
   protected?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphPlace extends MicrosoftGraphEntity{
   address?: MicrosoftGraphPhysicalAddress
   displayName?: string
   geoCoordinates?: MicrosoftGraphOutlookGeoCoordinates
   phone?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRoom extends MicrosoftGraphPlace{
   audioDeviceName?: string
   bookingType?: MicrosoftGraphBookingType
   building?: string
   capacity?: number
   displayDeviceName?: string
   emailAddress?: string
   floorLabel?: string
   floorNumber?: number
   isWheelChairAccessible?: boolean
   label?: string
   nickname?: string
   tags?: string[]
   videoDeviceName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRoomList extends MicrosoftGraphPlace{
   emailAddress?: string
   rooms?: MicrosoftGraphRoom[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAttachment extends MicrosoftGraphEntity{
   contentType?: string
   isInline?: boolean
   lastModifiedDateTime?: string
   name?: string
   size?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphCalendarPermission extends MicrosoftGraphEntity{
   allowedRoles?: MicrosoftGraphCalendarRoleType[]
   emailAddress?: MicrosoftGraphEmailAddress
   isInsideOrganization?: boolean
   isRemovable?: boolean
   role?: MicrosoftGraphCalendarRoleType
   "@odata.type"?: string
}
export interface MicrosoftGraphMultiValueLegacyExtendedProperty extends MicrosoftGraphEntity{
   value?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSingleValueLegacyExtendedProperty extends MicrosoftGraphEntity{
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCalendarSharingMessage extends MicrosoftGraphMessage{
   canAccept?: boolean
   sharingMessageAction?: MicrosoftGraphCalendarSharingMessageAction
   sharingMessageActions?: MicrosoftGraphCalendarSharingMessageAction[]
   suggestedCalendarName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPost extends MicrosoftGraphOutlookItem{
   body?: MicrosoftGraphItemBody
   conversationId?: string
   conversationThreadId?: string
   from?: {emailAddress?: MicrosoftGraphEmailAddress,"@odata.type"?: string,}
   hasAttachments?: boolean
   newParticipants?: {emailAddress?: MicrosoftGraphEmailAddress,"@odata.type"?: string,}
   receivedDateTime?: string
   sender?: MicrosoftGraphRecipient
   attachments?: MicrosoftGraphAttachment[]
   extensions?: MicrosoftGraphExtension[]
   inReplyTo?: MicrosoftGraphPost
   multiValueExtendedProperties?: MicrosoftGraphMultiValueLegacyExtendedProperty[]
   singleValueExtendedProperties?: MicrosoftGraphSingleValueLegacyExtendedProperty[]
   "@odata.type"?: string
}
export interface MicrosoftGraphEventMessage extends MicrosoftGraphMessage{
   endDateTime?: MicrosoftGraphDateTimeTimeZone
   isAllDay?: boolean
   isDelegated?: boolean
   isOutOfDate?: boolean
   location?: MicrosoftGraphLocation
   meetingMessageType?: MicrosoftGraphMeetingMessageType
   recurrence?: MicrosoftGraphPatternedRecurrence
   startDateTime?: MicrosoftGraphDateTimeTimeZone
   type?: MicrosoftGraphEventType
   event?: MicrosoftGraphEvent
   "@odata.type"?: string
}
export interface MicrosoftGraphEventMessageRequest extends MicrosoftGraphEventMessage{
   allowNewTimeProposals?: boolean
   meetingRequestType?: MicrosoftGraphMeetingRequestType
   previousEndDateTime?: MicrosoftGraphDateTimeTimeZone
   previousLocation?: MicrosoftGraphLocation
   previousStartDateTime?: MicrosoftGraphDateTimeTimeZone
   responseRequested?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphEventMessageResponse extends MicrosoftGraphEventMessage{
   proposedNewTime?: MicrosoftGraphTimeSlot
   responseType?: MicrosoftGraphResponseType
   "@odata.type"?: string
}
export interface MicrosoftGraphFileAttachment extends MicrosoftGraphAttachment{
   contentBytes?: string
   contentId?: string
   contentLocation?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphInferenceClassificationOverride extends MicrosoftGraphEntity{
   classifyAs?: MicrosoftGraphInferenceClassificationType
   senderEmailAddress?: MicrosoftGraphEmailAddress
   "@odata.type"?: string
}
export interface MicrosoftGraphItemAttachment extends MicrosoftGraphAttachment{
   item?: MicrosoftGraphOutlookItem
   "@odata.type"?: string
}
export interface MicrosoftGraphMessageRule extends MicrosoftGraphEntity{
   actions?: MicrosoftGraphMessageRuleActions
   conditions?: MicrosoftGraphMessageRulePredicates
   displayName?: string
   exceptions?: MicrosoftGraphMessageRulePredicates
   hasError?: boolean
   isEnabled?: boolean
   isReadOnly?: boolean
   sequence?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphMailSearchFolder extends MicrosoftGraphMailFolder{
   filterQuery?: string
   includeNestedFolders?: boolean
   isSupported?: boolean
   sourceFolderIds?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphOpenTypeExtension extends MicrosoftGraphExtension{
   extensionName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOutlookCategory extends MicrosoftGraphEntity{
   color?: MicrosoftGraphCategoryColor
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphReferenceAttachment extends MicrosoftGraphAttachment{
   "@odata.type"?: string
}
export interface MicrosoftGraphColumnLink extends MicrosoftGraphEntity{
   name?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphListItemVersion extends MicrosoftGraphBaseItemVersion{
   fields?: MicrosoftGraphFieldValueSet
   "@odata.type"?: string
}
export interface MicrosoftGraphDocumentSetVersion extends MicrosoftGraphListItemVersion{
   comment?: string
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   items?: MicrosoftGraphDocumentSetVersionItem[]
   shouldCaptureMinorVersion?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphFieldValueSet extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphItemActivity extends MicrosoftGraphEntity{
   access?: MicrosoftGraphAccessAction
   activityDateTime?: string
   actor?: MicrosoftGraphIdentitySet
   driveItem?: MicrosoftGraphDriveItem
   "@odata.type"?: string
}
export interface MicrosoftGraphItemActivityStat extends MicrosoftGraphEntity{
   access?: MicrosoftGraphItemActionStat
   create?: MicrosoftGraphItemActionStat
   delete?: MicrosoftGraphItemActionStat
   edit?: MicrosoftGraphItemActionStat
   endDateTime?: string
   incompleteData?: MicrosoftGraphIncompleteData
   isTrending?: boolean
   move?: MicrosoftGraphItemActionStat
   startDateTime?: string
   activities?: MicrosoftGraphItemActivity[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSharedDriveItem extends MicrosoftGraphBaseItem{
   owner?: MicrosoftGraphIdentitySet
   driveItem?: MicrosoftGraphDriveItem
   items?: MicrosoftGraphDriveItem[]
   list?: MicrosoftGraphList
   listItem?: MicrosoftGraphListItem
   permission?: MicrosoftGraphPermission
   root?: MicrosoftGraphDriveItem
   site?: MicrosoftGraphSite
   "@odata.type"?: string
}
export interface MicrosoftGraphSchemaExtension extends MicrosoftGraphEntity{
   description?: string
   owner?: string
   properties?: {name?: string,type?: string,"@odata.type"?: string,}
   status?: string
   targetTypes?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphCloudCommunications extends MicrosoftGraphEntity{
   calls?: MicrosoftGraphCall[]
   callRecords?: MicrosoftGraphCallRecordsCallRecord[]
   onlineMeetings?: MicrosoftGraphOnlineMeeting[]
   presences?: MicrosoftGraphPresence[]
   "@odata.type"?: string
}
export interface MicrosoftGraphCall extends MicrosoftGraphEntity{
   callbackUri?: string
   callChainId?: string
   callOptions?: MicrosoftGraphCallOptions
   callRoutes?: MicrosoftGraphCallRoute[]
   chatInfo?: MicrosoftGraphChatInfo
   direction?: MicrosoftGraphCallDirection
   incomingContext?: MicrosoftGraphIncomingContext
   mediaConfig?: MicrosoftGraphMediaConfig
   mediaState?: MicrosoftGraphCallMediaState
   meetingInfo?: MicrosoftGraphMeetingInfo
   myParticipantId?: string
   requestedModalities?: MicrosoftGraphModality[]
   resultInfo?: MicrosoftGraphResultInfo
   source?: MicrosoftGraphParticipantInfo
   state?: MicrosoftGraphCallState
   subject?: string
   targets?: MicrosoftGraphInvitationParticipantInfo[]
   tenantId?: string
   toneInfo?: MicrosoftGraphToneInfo
   transcription?: MicrosoftGraphCallTranscriptionInfo
   audioRoutingGroups?: MicrosoftGraphAudioRoutingGroup[]
   contentSharingSessions?: MicrosoftGraphContentSharingSession[]
   operations?: MicrosoftGraphCommsOperation[]
   participants?: MicrosoftGraphParticipant[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewHistoryDefinition extends MicrosoftGraphEntity{
   createdBy?: MicrosoftGraphUserIdentity
   createdDateTime?: string
   decisions?: MicrosoftGraphAccessReviewHistoryDecisionFilter[]
   displayName?: string
   reviewHistoryPeriodEndDateTime?: string
   reviewHistoryPeriodStartDateTime?: string
   scheduleSettings?: MicrosoftGraphAccessReviewHistoryScheduleSettings
   scopes?: {"@odata.type"?: string,}
   status?: MicrosoftGraphAccessReviewHistoryStatus
   instances?: MicrosoftGraphAccessReviewHistoryInstance[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewHistoryInstance extends MicrosoftGraphEntity{
   downloadUri?: string
   expirationDateTime?: string
   fulfilledDateTime?: string
   reviewHistoryPeriodEndDateTime?: string
   reviewHistoryPeriodStartDateTime?: string
   runDateTime?: string
   status?: MicrosoftGraphAccessReviewHistoryStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewInstance extends MicrosoftGraphEntity{
   endDateTime?: string
   fallbackReviewers?: MicrosoftGraphAccessReviewReviewerScope[]
   reviewers?: MicrosoftGraphAccessReviewReviewerScope[]
   scope?: MicrosoftGraphAccessReviewScope
   startDateTime?: string
   status?: string
   contactedReviewers?: MicrosoftGraphAccessReviewReviewer[]
   decisions?: MicrosoftGraphAccessReviewInstanceDecisionItem[]
   stages?: MicrosoftGraphAccessReviewStage[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewReviewer extends MicrosoftGraphEntity{
   createdDateTime?: string
   displayName?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewInstanceDecisionItem extends MicrosoftGraphEntity{
   accessReviewId?: string
   appliedBy?: MicrosoftGraphUserIdentity
   appliedDateTime?: string
   applyResult?: string
   decision?: string
   justification?: string
   principal?: MicrosoftGraphIdentity
   principalLink?: string
   recommendation?: string
   resource?: MicrosoftGraphAccessReviewInstanceDecisionItemResource
   resourceLink?: string
   reviewedBy?: MicrosoftGraphUserIdentity
   reviewedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewStage extends MicrosoftGraphEntity{
   endDateTime?: string
   fallbackReviewers?: MicrosoftGraphAccessReviewReviewerScope[]
   reviewers?: MicrosoftGraphAccessReviewReviewerScope[]
   startDateTime?: string
   status?: string
   decisions?: MicrosoftGraphAccessReviewInstanceDecisionItem[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewScheduleDefinition extends MicrosoftGraphEntity{
   additionalNotificationRecipients?: MicrosoftGraphAccessReviewNotificationRecipientItem[]
   createdBy?: MicrosoftGraphUserIdentity
   createdDateTime?: string
   descriptionForAdmins?: string
   descriptionForReviewers?: string
   displayName?: string
   fallbackReviewers?: MicrosoftGraphAccessReviewReviewerScope[]
   instanceEnumerationScope?: MicrosoftGraphAccessReviewScope
   lastModifiedDateTime?: string
   reviewers?: MicrosoftGraphAccessReviewReviewerScope[]
   scope?: MicrosoftGraphAccessReviewScope
   settings?: MicrosoftGraphAccessReviewScheduleSettings
   stageSettings?: MicrosoftGraphAccessReviewStageSettings[]
   status?: string
   instances?: MicrosoftGraphAccessReviewInstance[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewSet extends MicrosoftGraphEntity{
   definitions?: MicrosoftGraphAccessReviewScheduleDefinition[]
   historyDefinitions?: MicrosoftGraphAccessReviewHistoryDefinition[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAppConsentApprovalRoute extends MicrosoftGraphEntity{
   appConsentRequests?: MicrosoftGraphAppConsentRequest[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAppConsentRequest extends MicrosoftGraphEntity{
   appDisplayName?: string
   appId?: string
   pendingScopes?: MicrosoftGraphAppConsentRequestScope[]
   userConsentRequests?: MicrosoftGraphUserConsentRequest[]
   "@odata.type"?: string
}
export interface MicrosoftGraphUserConsentRequest extends MicrosoftGraphRequest{
   reason?: string
   approval?: MicrosoftGraphApproval
   "@odata.type"?: string
}
export interface MicrosoftGraphApproval extends MicrosoftGraphEntity{
   stages?: MicrosoftGraphApprovalStage[]
   "@odata.type"?: string
}
export interface MicrosoftGraphApprovalStage extends MicrosoftGraphEntity{
   assignedToMe?: boolean
   displayName?: string
   justification?: string
   reviewedBy?: MicrosoftGraphIdentity
   reviewedDateTime?: string
   reviewResult?: string
   status?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEntitlementManagement extends MicrosoftGraphEntity{
   accessPackageAssignmentApprovals?: MicrosoftGraphApproval[]
   accessPackages?: MicrosoftGraphAccessPackage[]
   assignmentPolicies?: MicrosoftGraphAccessPackageAssignmentPolicy[]
   assignmentRequests?: MicrosoftGraphAccessPackageAssignmentRequest[]
   assignments?: MicrosoftGraphAccessPackageAssignment[]
   catalogs?: MicrosoftGraphAccessPackageCatalog[]
   connectedOrganizations?: MicrosoftGraphConnectedOrganization[]
   settings?: MicrosoftGraphEntitlementManagementSettings
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessPackage extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   displayName?: string
   isHidden?: boolean
   modifiedDateTime?: string
   accessPackagesIncompatibleWith?: MicrosoftGraphAccessPackage[]
   assignmentPolicies?: MicrosoftGraphAccessPackageAssignmentPolicy[]
   catalog?: MicrosoftGraphAccessPackageCatalog
   incompatibleAccessPackages?: MicrosoftGraphAccessPackage[]
   incompatibleGroups?: MicrosoftGraphGroup[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessPackageAssignmentPolicy extends MicrosoftGraphEntity{
   allowedTargetScope?: MicrosoftGraphAllowedTargetScope
   automaticRequestSettings?: MicrosoftGraphAccessPackageAutomaticRequestSettings
   createdDateTime?: string
   description?: string
   displayName?: string
   expiration?: MicrosoftGraphExpirationPattern
   modifiedDateTime?: string
   requestApprovalSettings?: MicrosoftGraphAccessPackageAssignmentApprovalSettings
   requestorSettings?: MicrosoftGraphAccessPackageAssignmentRequestorSettings
   reviewSettings?: MicrosoftGraphAccessPackageAssignmentReviewSettings
   specificAllowedTargets?: MicrosoftGraphSubjectSet[]
   accessPackage?: MicrosoftGraphAccessPackage
   catalog?: MicrosoftGraphAccessPackageCatalog
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessPackageAssignmentRequest extends MicrosoftGraphEntity{
   completedDateTime?: string
   createdDateTime?: string
   requestType?: MicrosoftGraphAccessPackageRequestType
   schedule?: MicrosoftGraphEntitlementManagementSchedule
   state?: MicrosoftGraphAccessPackageRequestState
   status?: string
   accessPackage?: MicrosoftGraphAccessPackage
   assignment?: MicrosoftGraphAccessPackageAssignment
   requestor?: MicrosoftGraphAccessPackageSubject
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessPackageAssignment extends MicrosoftGraphEntity{
   expiredDateTime?: string
   schedule?: MicrosoftGraphEntitlementManagementSchedule
   state?: MicrosoftGraphAccessPackageAssignmentState
   status?: string
   accessPackage?: MicrosoftGraphAccessPackage
   assignmentPolicy?: MicrosoftGraphAccessPackageAssignmentPolicy
   target?: MicrosoftGraphAccessPackageSubject
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessPackageCatalog extends MicrosoftGraphEntity{
   catalogType?: MicrosoftGraphAccessPackageCatalogType
   createdDateTime?: string
   description?: string
   displayName?: string
   isExternallyVisible?: boolean
   modifiedDateTime?: string
   state?: MicrosoftGraphAccessPackageCatalogState
   accessPackages?: MicrosoftGraphAccessPackage[]
   "@odata.type"?: string
}
export interface MicrosoftGraphConnectedOrganization extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   displayName?: string
   identitySources?: MicrosoftGraphIdentitySource[]
   modifiedDateTime?: string
   state?: MicrosoftGraphConnectedOrganizationState
   externalSponsors?: MicrosoftGraphDirectoryObject[]
   internalSponsors?: MicrosoftGraphDirectoryObject[]
   "@odata.type"?: string
}
export interface MicrosoftGraphEntitlementManagementSettings extends MicrosoftGraphEntity{
   durationUntilExternalUserDeletedAfterBlocked?: string
   externalUserLifecycleAction?: MicrosoftGraphAccessPackageExternalUserLifecycleAction
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentityGovernance{
   accessReviews?: MicrosoftGraphAccessReviewSet
   appConsent?: MicrosoftGraphAppConsentApprovalRoute
   termsOfUse?: MicrosoftGraphTermsOfUseContainer
   entitlementManagement?: MicrosoftGraphEntitlementManagement
   "@odata.type"?: string
}
export interface MicrosoftGraphTermsOfUseContainer extends MicrosoftGraphEntity{
   agreementAcceptances?: MicrosoftGraphAgreementAcceptance[]
   agreements?: MicrosoftGraphAgreement[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAgreement extends MicrosoftGraphEntity{
   displayName?: string
   isPerDeviceAcceptanceRequired?: boolean
   isViewingBeforeAcceptanceRequired?: boolean
   termsExpiration?: MicrosoftGraphTermsExpiration
   userReacceptRequiredFrequency?: string
   acceptances?: MicrosoftGraphAgreementAcceptance[]
   file?: MicrosoftGraphAgreementFile
   files?: MicrosoftGraphAgreementFileLocalization[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAgreementFileProperties extends MicrosoftGraphEntity{
   createdDateTime?: string
   displayName?: string
   fileData?: MicrosoftGraphAgreementFileData
   fileName?: string
   isDefault?: boolean
   isMajorVersion?: boolean
   language?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAgreementFile extends MicrosoftGraphAgreementFileProperties{
   localizations?: MicrosoftGraphAgreementFileLocalization[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAgreementFileLocalization extends MicrosoftGraphAgreementFileProperties{
   versions?: MicrosoftGraphAgreementFileVersion[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAgreementFileVersion extends MicrosoftGraphAgreementFileProperties{
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthenticationContextClassReference extends MicrosoftGraphEntity{
   description?: string
   displayName?: string
   isAvailable?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphNamedLocation extends MicrosoftGraphEntity{
   createdDateTime?: string
   displayName?: string
   modifiedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessTemplate extends MicrosoftGraphEntity{
   description?: string
   details?: {conditions?: {applications?: MicrosoftGraphConditionalAccessApplications,clientApplications?: MicrosoftGraphConditionalAccessClientApplications,clientAppTypes?: string[],devices?: MicrosoftGraphConditionalAccessDevices,locations?: MicrosoftGraphConditionalAccessLocations,platforms?: MicrosoftGraphConditionalAccessPlatforms,servicePrincipalRiskLevels?: string[],signInRiskLevels?: string[],userRiskLevels?: string[],users?: MicrosoftGraphConditionalAccessUsers,"@odata.type"?: string,},grantControls?: MicrosoftGraphConditionalAccessGrantControls,sessionControls?: MicrosoftGraphConditionalAccessSessionControls,"@odata.type"?: string,}
   name?: string
   scenarios?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCountryNamedLocation extends MicrosoftGraphNamedLocation{
   countriesAndRegions?: string[]
   countryLookupMethod?: MicrosoftGraphCountryLookupMethodType
   includeUnknownCountriesAndRegions?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentityProtectionRoot{
   riskDetections?: MicrosoftGraphRiskDetection[]
   riskyUsers?: MicrosoftGraphRiskyUser[]
   "@odata.type"?: string
}
export interface MicrosoftGraphRiskDetection extends MicrosoftGraphEntity{
   activity?: MicrosoftGraphActivityType
   activityDateTime?: string
   additionalInfo?: string
   correlationId?: string
   detectedDateTime?: string
   detectionTimingType?: MicrosoftGraphRiskDetectionTimingType
   ipAddress?: string
   lastUpdatedDateTime?: string
   location?: MicrosoftGraphSignInLocation
   requestId?: string
   riskDetail?: MicrosoftGraphRiskDetail
   riskEventType?: string
   riskLevel?: MicrosoftGraphRiskLevel
   riskState?: MicrosoftGraphRiskState
   source?: string
   tokenIssuerType?: MicrosoftGraphTokenIssuerType
   userDisplayName?: string
   userId?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRiskyUser extends MicrosoftGraphEntity{
   isDeleted?: boolean
   isProcessing?: boolean
   riskDetail?: MicrosoftGraphRiskDetail
   riskLastUpdatedDateTime?: string
   riskLevel?: MicrosoftGraphRiskLevel
   riskState?: MicrosoftGraphRiskState
   userDisplayName?: string
   userPrincipalName?: string
   history?: MicrosoftGraphRiskyUserHistoryItem[]
   "@odata.type"?: string
}
export interface MicrosoftGraphIpNamedLocation extends MicrosoftGraphNamedLocation{
   ipRanges?: {"@odata.type"?: string,}
   isTrusted?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphRiskyUserHistoryItem extends MicrosoftGraphRiskyUser{
   activity?: MicrosoftGraphRiskUserActivity
   initiatedBy?: string
   userId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessPackageSubject extends MicrosoftGraphEntity{
   displayName?: string
   email?: string
   objectId?: string
   onPremisesSecurityIdentifier?: string
   principalName?: string
   subjectType?: MicrosoftGraphAccessPackageSubjectType
   connectedOrganization?: MicrosoftGraphConnectedOrganization
   "@odata.type"?: string
}
export interface MicrosoftGraphMobileApp extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   developer?: string
   displayName?: string
   informationUrl?: string
   isFeatured?: boolean
   largeIcon?: MicrosoftGraphMimeContent
   lastModifiedDateTime?: string
   notes?: string
   owner?: string
   privacyInformationUrl?: string
   publisher?: string
   publishingState?: string
   assignments?: MicrosoftGraphMobileAppAssignment[]
   categories?: MicrosoftGraphMobileAppCategory[]
   "@odata.type"?: string
}
export interface MicrosoftGraphMobileLobApp extends MicrosoftGraphMobileApp{
   committedContentVersion?: string
   fileName?: string
   size?: number
   contentVersions?: MicrosoftGraphMobileAppContent[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAndroidLobApp extends MicrosoftGraphMobileLobApp{
   minimumSupportedOperatingSystem?: MicrosoftGraphAndroidMinimumOperatingSystem
   packageId?: string
   versionCode?: string
   versionName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAndroidStoreApp extends MicrosoftGraphMobileApp{
   appStoreUrl?: string
   minimumSupportedOperatingSystem?: MicrosoftGraphAndroidMinimumOperatingSystem
   packageId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceAppManagement extends MicrosoftGraphEntity{
   isEnabledForMicrosoftStoreForBusiness?: boolean
   microsoftStoreForBusinessLanguage?: string
   microsoftStoreForBusinessLastCompletedApplicationSyncTime?: string
   microsoftStoreForBusinessLastSuccessfulSyncDateTime?: string
   managedEBooks?: MicrosoftGraphManagedEBook[]
   mobileAppCategories?: MicrosoftGraphMobileAppCategory[]
   mobileAppConfigurations?: MicrosoftGraphManagedDeviceMobileAppConfiguration[]
   mobileApps?: MicrosoftGraphMobileApp[]
   vppTokens?: MicrosoftGraphVppToken[]
   androidManagedAppProtections?: MicrosoftGraphAndroidManagedAppProtection[]
   defaultManagedAppProtections?: MicrosoftGraphDefaultManagedAppProtection[]
   iosManagedAppProtections?: MicrosoftGraphIosManagedAppProtection[]
   managedAppPolicies?: MicrosoftGraphManagedAppPolicy[]
   managedAppRegistrations?: MicrosoftGraphManagedAppRegistration[]
   managedAppStatuses?: MicrosoftGraphManagedAppStatus[]
   mdmWindowsInformationProtectionPolicies?: MicrosoftGraphMdmWindowsInformationProtectionPolicy[]
   targetedManagedAppConfigurations?: MicrosoftGraphTargetedManagedAppConfiguration[]
   windowsInformationProtectionPolicies?: MicrosoftGraphWindowsInformationProtectionPolicy[]
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedEBook extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   displayName?: string
   informationUrl?: string
   largeCover?: MicrosoftGraphMimeContent
   lastModifiedDateTime?: string
   privacyInformationUrl?: string
   publishedDateTime?: string
   publisher?: string
   assignments?: MicrosoftGraphManagedEBookAssignment[]
   deviceStates?: MicrosoftGraphDeviceInstallState[]
   installSummary?: MicrosoftGraphEBookInstallSummary
   userStateSummary?: MicrosoftGraphUserInstallStateSummary[]
   "@odata.type"?: string
}
export interface MicrosoftGraphMobileAppCategory extends MicrosoftGraphEntity{
   displayName?: string
   lastModifiedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfiguration extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   displayName?: string
   lastModifiedDateTime?: string
   targetedMobileApps?: string[]
   version?: number
   assignments?: MicrosoftGraphManagedDeviceMobileAppConfigurationAssignment[]
   deviceStatuses?: MicrosoftGraphManagedDeviceMobileAppConfigurationDeviceStatus[]
   deviceStatusSummary?: MicrosoftGraphManagedDeviceMobileAppConfigurationDeviceSummary
   userStatuses?: MicrosoftGraphManagedDeviceMobileAppConfigurationUserStatus[]
   userStatusSummary?: MicrosoftGraphManagedDeviceMobileAppConfigurationUserSummary
   "@odata.type"?: string
}
export interface MicrosoftGraphVppToken extends MicrosoftGraphEntity{
   appleId?: string
   automaticallyUpdateApps?: boolean
   countryOrRegion?: string
   expirationDateTime?: string
   lastModifiedDateTime?: string
   lastSyncDateTime?: string
   lastSyncStatus?: string
   organizationName?: string
   state?: string
   token?: string
   vppTokenAccountType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedAppPolicy extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   displayName?: string
   lastModifiedDateTime?: string
   version?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedAppProtection extends MicrosoftGraphManagedAppPolicy{
   allowedDataStorageLocations?: string[]
   allowedInboundDataTransferSources?: string
   allowedOutboundClipboardSharingLevel?: string
   allowedOutboundDataTransferDestinations?: string
   contactSyncBlocked?: boolean
   dataBackupBlocked?: boolean
   deviceComplianceRequired?: boolean
   disableAppPinIfDevicePinIsSet?: boolean
   fingerprintBlocked?: boolean
   managedBrowser?: string
   managedBrowserToOpenLinksRequired?: boolean
   maximumPinRetries?: number
   minimumPinLength?: number
   minimumRequiredAppVersion?: string
   minimumRequiredOsVersion?: string
   minimumWarningAppVersion?: string
   minimumWarningOsVersion?: string
   organizationalCredentialsRequired?: boolean
   periodBeforePinReset?: string
   periodOfflineBeforeAccessCheck?: string
   periodOfflineBeforeWipeIsEnforced?: string
   periodOnlineBeforeAccessCheck?: string
   pinCharacterSet?: string
   pinRequired?: boolean
   printBlocked?: boolean
   saveAsBlocked?: boolean
   simplePinBlocked?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphTargetedManagedAppProtection extends MicrosoftGraphManagedAppProtection{
   isAssigned?: boolean
   assignments?: MicrosoftGraphTargetedManagedAppPolicyAssignment[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAndroidManagedAppProtection extends MicrosoftGraphTargetedManagedAppProtection{
   customBrowserDisplayName?: string
   customBrowserPackageId?: string
   deployedAppCount?: number
   disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean
   encryptAppData?: boolean
   minimumRequiredPatchVersion?: string
   minimumWarningPatchVersion?: string
   screenCaptureBlocked?: boolean
   apps?: MicrosoftGraphManagedMobileApp[]
   deploymentSummary?: MicrosoftGraphManagedAppPolicyDeploymentSummary
   "@odata.type"?: string
}
export interface MicrosoftGraphDefaultManagedAppProtection extends MicrosoftGraphManagedAppProtection{
   appDataEncryptionType?: string
   customSettings?: {name?: string,value?: string,"@odata.type"?: string,}
   deployedAppCount?: number
   disableAppEncryptionIfDeviceEncryptionIsEnabled?: boolean
   encryptAppData?: boolean
   faceIdBlocked?: boolean
   minimumRequiredPatchVersion?: string
   minimumRequiredSdkVersion?: string
   minimumWarningPatchVersion?: string
   screenCaptureBlocked?: boolean
   apps?: MicrosoftGraphManagedMobileApp[]
   deploymentSummary?: MicrosoftGraphManagedAppPolicyDeploymentSummary
   "@odata.type"?: string
}
export interface MicrosoftGraphIosManagedAppProtection extends MicrosoftGraphTargetedManagedAppProtection{
   appDataEncryptionType?: string
   customBrowserProtocol?: string
   deployedAppCount?: number
   faceIdBlocked?: boolean
   minimumRequiredSdkVersion?: string
   apps?: MicrosoftGraphManagedMobileApp[]
   deploymentSummary?: MicrosoftGraphManagedAppPolicyDeploymentSummary
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedAppStatus extends MicrosoftGraphEntity{
   displayName?: string
   version?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsInformationProtection extends MicrosoftGraphManagedAppPolicy{
   azureRightsManagementServicesAllowed?: boolean
   dataRecoveryCertificate?: MicrosoftGraphWindowsInformationProtectionDataRecoveryCertificate
   enforcementLevel?: string
   enterpriseDomain?: string
   enterpriseInternalProxyServers?: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
   enterpriseIPRanges?: MicrosoftGraphWindowsInformationProtectionIPRangeCollection[]
   enterpriseIPRangesAreAuthoritative?: boolean
   enterpriseNetworkDomainNames?: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
   enterpriseProtectedDomainNames?: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
   enterpriseProxiedDomains?: MicrosoftGraphWindowsInformationProtectionProxiedDomainCollection[]
   enterpriseProxyServers?: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
   enterpriseProxyServersAreAuthoritative?: boolean
   exemptApps?: MicrosoftGraphWindowsInformationProtectionApp[]
   iconsVisible?: boolean
   indexingEncryptedStoresOrItemsBlocked?: boolean
   isAssigned?: boolean
   neutralDomainResources?: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
   protectedApps?: MicrosoftGraphWindowsInformationProtectionApp[]
   protectionUnderLockConfigRequired?: boolean
   revokeOnUnenrollDisabled?: boolean
   rightsManagementServicesTemplateId?: string
   smbAutoEncryptedFileExtensions?: MicrosoftGraphWindowsInformationProtectionResourceCollection[]
   assignments?: MicrosoftGraphTargetedManagedAppPolicyAssignment[]
   exemptAppLockerFiles?: MicrosoftGraphWindowsInformationProtectionAppLockerFile[]
   protectedAppLockerFiles?: MicrosoftGraphWindowsInformationProtectionAppLockerFile[]
   "@odata.type"?: string
}
export interface MicrosoftGraphMdmWindowsInformationProtectionPolicy extends MicrosoftGraphWindowsInformationProtection{
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedAppConfiguration extends MicrosoftGraphManagedAppPolicy{
   customSettings?: {name?: string,value?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphTargetedManagedAppConfiguration extends MicrosoftGraphManagedAppConfiguration{
   deployedAppCount?: number
   isAssigned?: boolean
   apps?: MicrosoftGraphManagedMobileApp[]
   assignments?: MicrosoftGraphTargetedManagedAppPolicyAssignment[]
   deploymentSummary?: MicrosoftGraphManagedAppPolicyDeploymentSummary
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsInformationProtectionPolicy extends MicrosoftGraphWindowsInformationProtection{
   daysWithoutContactBeforeUnenroll?: number
   mdmEnrollmentUrl?: string
   minutesOfInactivityBeforeDeviceLock?: number
   numberOfPastPinsRemembered?: number
   passwordMaximumAttemptCount?: number
   pinExpirationDays?: number
   pinLowercaseLetters?: string
   pinMinimumLength?: number
   pinSpecialCharacters?: string
   pinUppercaseLetters?: string
   revokeOnMdmHandoffDisabled?: boolean
   windowsHelloForBusinessBlocked?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphIosLobApp extends MicrosoftGraphMobileLobApp{
   applicableDeviceType?: {iPad?: boolean,iPhoneAndIPod?: boolean,"@odata.type"?: string,}
   buildNumber?: string
   bundleId?: string
   expirationDateTime?: string
   minimumSupportedOperatingSystem?: MicrosoftGraphIosMinimumOperatingSystem
   versionNumber?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIosMobileAppConfiguration extends MicrosoftGraphManagedDeviceMobileAppConfiguration{
   encodedSettingXml?: string
   settings?: MicrosoftGraphAppConfigurationSettingItem[]
   "@odata.type"?: string
}
export interface MicrosoftGraphIosStoreApp extends MicrosoftGraphMobileApp{
   applicableDeviceType?: {iPad?: boolean,iPhoneAndIPod?: boolean,"@odata.type"?: string,}
   appStoreUrl?: string
   bundleId?: string
   minimumSupportedOperatingSystem?: MicrosoftGraphIosMinimumOperatingSystem
   "@odata.type"?: string
}
export interface MicrosoftGraphIosVppApp extends MicrosoftGraphMobileApp{
   applicableDeviceType?: MicrosoftGraphIosDeviceType
   appStoreUrl?: string
   bundleId?: string
   licensingType?: MicrosoftGraphVppLicensingType
   releaseDateTime?: string
   totalLicenseCount?: number
   usedLicenseCount?: number
   vppTokenAccountType?: string
   vppTokenAppleId?: string
   vppTokenOrganizationName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMacOSOfficeSuiteApp extends MicrosoftGraphMobileApp{
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedApp extends MicrosoftGraphMobileApp{
   appAvailability?: string
   version?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedMobileLobApp extends MicrosoftGraphManagedApp{
   committedContentVersion?: string
   fileName?: string
   size?: number
   contentVersions?: MicrosoftGraphMobileAppContent[]
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedAndroidLobApp extends MicrosoftGraphManagedMobileLobApp{
   minimumSupportedOperatingSystem?: MicrosoftGraphAndroidMinimumOperatingSystem
   packageId?: string
   versionCode?: string
   versionName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedAndroidStoreApp extends MicrosoftGraphManagedApp{
   appStoreUrl?: string
   minimumSupportedOperatingSystem?: {v10_0?: boolean,v11_0?: boolean,v4_0?: boolean,v4_0_3?: boolean,v4_1?: boolean,v4_2?: boolean,v4_3?: boolean,v4_4?: boolean,v5_0?: boolean,v5_1?: boolean,v6_0?: boolean,v7_0?: boolean,v7_1?: boolean,v8_0?: boolean,v8_1?: boolean,v9_0?: boolean,"@odata.type"?: string,}
   packageId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationAssignment extends MicrosoftGraphEntity{
   target?: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationDeviceStatus extends MicrosoftGraphEntity{
   complianceGracePeriodExpirationDateTime?: string
   deviceDisplayName?: string
   deviceModel?: string
   lastReportedDateTime?: string
   status?: string
   userName?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationDeviceSummary extends MicrosoftGraphEntity{
   configurationVersion?: number
   errorCount?: number
   failedCount?: number
   lastUpdateDateTime?: string
   notApplicableCount?: number
   pendingCount?: number
   successCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationUserStatus extends MicrosoftGraphEntity{
   devicesCount?: number
   lastReportedDateTime?: string
   status?: string
   userDisplayName?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedDeviceMobileAppConfigurationUserSummary extends MicrosoftGraphEntity{
   configurationVersion?: number
   errorCount?: number
   failedCount?: number
   lastUpdateDateTime?: string
   notApplicableCount?: number
   pendingCount?: number
   successCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedIOSLobApp extends MicrosoftGraphManagedMobileLobApp{
   applicableDeviceType?: {iPad?: boolean,iPhoneAndIPod?: boolean,"@odata.type"?: string,}
   buildNumber?: string
   bundleId?: string
   expirationDateTime?: string
   minimumSupportedOperatingSystem?: MicrosoftGraphIosMinimumOperatingSystem
   versionNumber?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedIOSStoreApp extends MicrosoftGraphManagedApp{
   applicableDeviceType?: {iPad?: boolean,iPhoneAndIPod?: boolean,"@odata.type"?: string,}
   appStoreUrl?: string
   bundleId?: string
   minimumSupportedOperatingSystem?: {v10_0?: boolean,v11_0?: boolean,v12_0?: boolean,v13_0?: boolean,v14_0?: boolean,v8_0?: boolean,v9_0?: boolean,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphMobileAppContent extends MicrosoftGraphEntity{
   files?: MicrosoftGraphMobileAppContentFile[]
   "@odata.type"?: string
}
export interface MicrosoftGraphMicrosoftStoreForBusinessApp extends MicrosoftGraphMobileApp{
   licenseType?: string
   packageIdentityName?: string
   productKey?: string
   totalLicenseCount?: number
   usedLicenseCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphMobileAppAssignment extends MicrosoftGraphEntity{
   intent?: string
   settings?: MicrosoftGraphMobileAppAssignmentSettings
   target?: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
   "@odata.type"?: string
}
export interface MicrosoftGraphMobileAppContentFile extends MicrosoftGraphEntity{
   azureStorageUri?: string
   azureStorageUriExpirationDateTime?: string
   createdDateTime?: string
   isCommitted?: boolean
   manifest?: string
   name?: string
   size?: number
   sizeEncrypted?: number
   uploadState?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWebApp extends MicrosoftGraphMobileApp{
   appUrl?: string
   useManagedBrowser?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWin32LobApp extends MicrosoftGraphMobileLobApp{
   applicableArchitectures?: string
   installCommandLine?: string
   installExperience?: MicrosoftGraphWin32LobAppInstallExperience
   minimumCpuSpeedInMHz?: number
   minimumFreeDiskSpaceInMB?: number
   minimumMemoryInMB?: number
   minimumNumberOfProcessors?: number
   minimumSupportedWindowsRelease?: string
   msiInformation?: MicrosoftGraphWin32LobAppMsiInformation
   returnCodes?: MicrosoftGraphWin32LobAppReturnCode[]
   rules?: MicrosoftGraphWin32LobAppRule[]
   setupFilePath?: string
   uninstallCommandLine?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsMobileMSI extends MicrosoftGraphMobileLobApp{
   commandLine?: string
   ignoreVersionDetection?: boolean
   productCode?: string
   productVersion?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsUniversalAppX extends MicrosoftGraphMobileLobApp{
   applicableArchitectures?: string
   applicableDeviceTypes?: string
   identityName?: string
   identityPublisherHash?: string
   identityResourceIdentifier?: string
   identityVersion?: string
   isBundle?: boolean
   minimumSupportedOperatingSystem?: {v10_0?: boolean,v8_0?: boolean,v8_1?: boolean,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceInstallState extends MicrosoftGraphEntity{
   deviceId?: string
   deviceName?: string
   errorCode?: string
   installState?: string
   lastSyncDateTime?: string
   osDescription?: string
   osVersion?: string
   userName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEBookInstallSummary extends MicrosoftGraphEntity{
   failedDeviceCount?: number
   failedUserCount?: number
   installedDeviceCount?: number
   installedUserCount?: number
   notInstalledDeviceCount?: number
   notInstalledUserCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphIosVppEBook extends MicrosoftGraphManagedEBook{
   appleId?: string
   genres?: string[]
   language?: string
   seller?: string
   totalLicenseCount?: number
   usedLicenseCount?: number
   vppOrganizationName?: string
   vppTokenId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedEBookAssignment extends MicrosoftGraphEntity{
   installIntent?: string
   target?: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
   "@odata.type"?: string
}
export interface MicrosoftGraphIosVppEBookAssignment extends MicrosoftGraphManagedEBookAssignment{
   "@odata.type"?: string
}
export interface MicrosoftGraphUserInstallStateSummary extends MicrosoftGraphEntity{
   failedDeviceCount?: number
   installedDeviceCount?: number
   notInstalledDeviceCount?: number
   userName?: string
   deviceStates?: MicrosoftGraphDeviceInstallState[]
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceManagement extends MicrosoftGraphEntity{
   intuneAccountId?: string
   settings?: MicrosoftGraphDeviceManagementSettings
   intuneBrand?: MicrosoftGraphIntuneBrand
   subscriptionState?: string
   termsAndConditions?: MicrosoftGraphTermsAndConditions[]
   deviceCompliancePolicies?: MicrosoftGraphDeviceCompliancePolicy[]
   deviceCompliancePolicyDeviceStateSummary?: MicrosoftGraphDeviceCompliancePolicyDeviceStateSummary
   deviceCompliancePolicySettingStateSummaries?: MicrosoftGraphDeviceCompliancePolicySettingStateSummary[]
   deviceConfigurationDeviceStateSummaries?: MicrosoftGraphDeviceConfigurationDeviceStateSummary
   deviceConfigurations?: MicrosoftGraphDeviceConfiguration[]
   iosUpdateStatuses?: MicrosoftGraphIosUpdateDeviceStatus[]
   softwareUpdateStatusSummary?: MicrosoftGraphSoftwareUpdateStatusSummary
   complianceManagementPartners?: MicrosoftGraphComplianceManagementPartner[]
   conditionalAccessSettings?: MicrosoftGraphOnPremisesConditionalAccessSettings
   deviceCategories?: MicrosoftGraphDeviceCategory[]
   deviceEnrollmentConfigurations?: MicrosoftGraphDeviceEnrollmentConfiguration[]
   deviceManagementPartners?: MicrosoftGraphDeviceManagementPartner[]
   exchangeConnectors?: MicrosoftGraphDeviceManagementExchangeConnector[]
   mobileThreatDefenseConnectors?: MicrosoftGraphMobileThreatDefenseConnector[]
   applePushNotificationCertificate?: MicrosoftGraphApplePushNotificationCertificate
   detectedApps?: MicrosoftGraphDetectedApp[]
   managedDeviceOverview?: MicrosoftGraphManagedDeviceOverview
   managedDevices?: MicrosoftGraphManagedDevice[]
   importedWindowsAutopilotDeviceIdentities?: MicrosoftGraphImportedWindowsAutopilotDeviceIdentity[]
   windowsAutopilotDeviceIdentities?: MicrosoftGraphWindowsAutopilotDeviceIdentity[]
   notificationMessageTemplates?: MicrosoftGraphNotificationMessageTemplate[]
   resourceOperations?: MicrosoftGraphResourceOperation[]
   roleAssignments?: MicrosoftGraphDeviceAndAppManagementRoleAssignment[]
   roleDefinitions?: MicrosoftGraphRoleDefinition[]
   remoteAssistancePartners?: MicrosoftGraphRemoteAssistancePartner[]
   reports?: MicrosoftGraphDeviceManagementReports
   telecomExpenseManagementPartners?: MicrosoftGraphTelecomExpenseManagementPartner[]
   troubleshootingEvents?: MicrosoftGraphDeviceManagementTroubleshootingEvent[]
   windowsInformationProtectionAppLearningSummaries?: MicrosoftGraphWindowsInformationProtectionAppLearningSummary[]
   windowsInformationProtectionNetworkLearningSummaries?: MicrosoftGraphWindowsInformationProtectionNetworkLearningSummary[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTermsAndConditions extends MicrosoftGraphEntity{
   acceptanceStatement?: string
   bodyText?: string
   createdDateTime?: string
   description?: string
   displayName?: string
   lastModifiedDateTime?: string
   title?: string
   version?: number
   acceptanceStatuses?: MicrosoftGraphTermsAndConditionsAcceptanceStatus[]
   assignments?: MicrosoftGraphTermsAndConditionsAssignment[]
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceCompliancePolicy extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   displayName?: string
   lastModifiedDateTime?: string
   version?: number
   assignments?: MicrosoftGraphDeviceCompliancePolicyAssignment[]
   deviceSettingStateSummaries?: MicrosoftGraphSettingStateDeviceSummary[]
   deviceStatuses?: MicrosoftGraphDeviceComplianceDeviceStatus[]
   deviceStatusOverview?: MicrosoftGraphDeviceComplianceDeviceOverview
   scheduledActionsForRule?: MicrosoftGraphDeviceComplianceScheduledActionForRule[]
   userStatuses?: MicrosoftGraphDeviceComplianceUserStatus[]
   userStatusOverview?: MicrosoftGraphDeviceComplianceUserOverview
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceCompliancePolicyDeviceStateSummary extends MicrosoftGraphEntity{
   compliantDeviceCount?: number
   configManagerCount?: number
   conflictDeviceCount?: number
   errorDeviceCount?: number
   inGracePeriodCount?: number
   nonCompliantDeviceCount?: number
   notApplicableDeviceCount?: number
   remediatedDeviceCount?: number
   unknownDeviceCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceCompliancePolicySettingStateSummary extends MicrosoftGraphEntity{
   compliantDeviceCount?: number
   conflictDeviceCount?: number
   errorDeviceCount?: number
   nonCompliantDeviceCount?: number
   notApplicableDeviceCount?: number
   platformType?: string
   remediatedDeviceCount?: number
   setting?: string
   settingName?: string
   unknownDeviceCount?: number
   deviceComplianceSettingStates?: MicrosoftGraphDeviceComplianceSettingState[]
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceConfigurationDeviceStateSummary extends MicrosoftGraphEntity{
   compliantDeviceCount?: number
   conflictDeviceCount?: number
   errorDeviceCount?: number
   nonCompliantDeviceCount?: number
   notApplicableDeviceCount?: number
   remediatedDeviceCount?: number
   unknownDeviceCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceConfiguration extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   displayName?: string
   lastModifiedDateTime?: string
   version?: number
   assignments?: MicrosoftGraphDeviceConfigurationAssignment[]
   deviceSettingStateSummaries?: MicrosoftGraphSettingStateDeviceSummary[]
   deviceStatuses?: MicrosoftGraphDeviceConfigurationDeviceStatus[]
   deviceStatusOverview?: MicrosoftGraphDeviceConfigurationDeviceOverview
   userStatuses?: MicrosoftGraphDeviceConfigurationUserStatus[]
   userStatusOverview?: MicrosoftGraphDeviceConfigurationUserOverview
   "@odata.type"?: string
}
export interface MicrosoftGraphIosUpdateDeviceStatus extends MicrosoftGraphEntity{
   complianceGracePeriodExpirationDateTime?: string
   deviceDisplayName?: string
   deviceId?: string
   deviceModel?: string
   installStatus?: string
   lastReportedDateTime?: string
   osVersion?: string
   status?: string
   userId?: string
   userName?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSoftwareUpdateStatusSummary extends MicrosoftGraphEntity{
   compliantDeviceCount?: number
   compliantUserCount?: number
   conflictDeviceCount?: number
   conflictUserCount?: number
   displayName?: string
   errorDeviceCount?: number
   errorUserCount?: number
   nonCompliantDeviceCount?: number
   nonCompliantUserCount?: number
   notApplicableDeviceCount?: number
   notApplicableUserCount?: number
   remediatedDeviceCount?: number
   remediatedUserCount?: number
   unknownDeviceCount?: number
   unknownUserCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphComplianceManagementPartner extends MicrosoftGraphEntity{
   androidEnrollmentAssignments?: MicrosoftGraphComplianceManagementPartnerAssignment[]
   androidOnboarded?: boolean
   displayName?: string
   iosEnrollmentAssignments?: MicrosoftGraphComplianceManagementPartnerAssignment[]
   iosOnboarded?: boolean
   lastHeartbeatDateTime?: string
   macOsEnrollmentAssignments?: MicrosoftGraphComplianceManagementPartnerAssignment[]
   macOsOnboarded?: boolean
   partnerState?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOnPremisesConditionalAccessSettings extends MicrosoftGraphEntity{
   enabled?: boolean
   excludedGroups?: string[]
   includedGroups?: string[]
   overrideDefaultRule?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceCategory extends MicrosoftGraphEntity{
   description?: string
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceEnrollmentConfiguration extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   displayName?: string
   lastModifiedDateTime?: string
   priority?: number
   version?: number
   assignments?: MicrosoftGraphEnrollmentConfigurationAssignment[]
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceManagementPartner extends MicrosoftGraphEntity{
   displayName?: string
   isConfigured?: boolean
   lastHeartbeatDateTime?: string
   partnerAppType?: string
   partnerState?: string
   singleTenantAppId?: string
   whenPartnerDevicesWillBeMarkedAsNonCompliantDateTime?: string
   whenPartnerDevicesWillBeRemovedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceManagementExchangeConnector extends MicrosoftGraphEntity{
   connectorServerName?: string
   exchangeAlias?: string
   exchangeConnectorType?: string
   exchangeOrganization?: string
   lastSyncDateTime?: string
   primarySmtpAddress?: string
   serverName?: string
   status?: string
   version?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMobileThreatDefenseConnector extends MicrosoftGraphEntity{
   androidDeviceBlockedOnMissingPartnerData?: boolean
   androidEnabled?: boolean
   iosDeviceBlockedOnMissingPartnerData?: boolean
   iosEnabled?: boolean
   lastHeartbeatDateTime?: string
   partnerState?: string
   partnerUnresponsivenessThresholdInDays?: number
   partnerUnsupportedOsVersionBlocked?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphApplePushNotificationCertificate extends MicrosoftGraphEntity{
   appleIdentifier?: string
   certificate?: string
   certificateSerialNumber?: string
   certificateUploadFailureReason?: string
   certificateUploadStatus?: string
   expirationDateTime?: string
   lastModifiedDateTime?: string
   topicIdentifier?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDetectedApp extends MicrosoftGraphEntity{
   deviceCount?: number
   displayName?: string
   platform?: string
   publisher?: string
   sizeInByte?: number
   version?: string
   managedDevices?: MicrosoftGraphManagedDevice[]
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedDeviceOverview extends MicrosoftGraphEntity{
   deviceExchangeAccessStateSummary?: MicrosoftGraphDeviceExchangeAccessStateSummary
   deviceOperatingSystemSummary?: MicrosoftGraphDeviceOperatingSystemSummary
   dualEnrolledDeviceCount?: number
   enrolledDeviceCount?: number
   mdmEnrolledCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphImportedWindowsAutopilotDeviceIdentity extends MicrosoftGraphEntity{
   assignedUserPrincipalName?: string
   groupTag?: string
   hardwareIdentifier?: string
   importId?: string
   productKey?: string
   serialNumber?: string
   state?: MicrosoftGraphImportedWindowsAutopilotDeviceIdentityState
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsAutopilotDeviceIdentity extends MicrosoftGraphEntity{
   addressableUserName?: string
   azureActiveDirectoryDeviceId?: string
   displayName?: string
   enrollmentState?: string
   groupTag?: string
   lastContactedDateTime?: string
   managedDeviceId?: string
   manufacturer?: string
   model?: string
   productKey?: string
   purchaseOrderIdentifier?: string
   resourceName?: string
   serialNumber?: string
   skuNumber?: string
   systemFamily?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphNotificationMessageTemplate extends MicrosoftGraphEntity{
   brandingOptions?: string
   defaultLocale?: string
   displayName?: string
   lastModifiedDateTime?: string
   localizedNotificationMessages?: MicrosoftGraphLocalizedNotificationMessage[]
   "@odata.type"?: string
}
export interface MicrosoftGraphResourceOperation extends MicrosoftGraphEntity{
   actionName?: string
   description?: string
   resourceName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRoleAssignment extends MicrosoftGraphEntity{
   description?: string
   displayName?: string
   resourceScopes?: string[]
   roleDefinition?: MicrosoftGraphRoleDefinition
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceAndAppManagementRoleAssignment extends MicrosoftGraphRoleAssignment{
   members?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphRoleDefinition extends MicrosoftGraphEntity{
   description?: string
   displayName?: string
   isBuiltIn?: boolean
   rolePermissions?: MicrosoftGraphRolePermission[]
   roleAssignments?: MicrosoftGraphRoleAssignment[]
   "@odata.type"?: string
}
export interface MicrosoftGraphRemoteAssistancePartner extends MicrosoftGraphEntity{
   displayName?: string
   lastConnectionDateTime?: string
   onboardingStatus?: string
   onboardingUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceManagementReports extends MicrosoftGraphEntity{
   exportJobs?: MicrosoftGraphDeviceManagementExportJob[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTelecomExpenseManagementPartner extends MicrosoftGraphEntity{
   appAuthorized?: boolean
   displayName?: string
   enabled?: boolean
   lastConnectionDateTime?: string
   url?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsInformationProtectionAppLearningSummary extends MicrosoftGraphEntity{
   applicationName?: string
   applicationType?: string
   deviceCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsInformationProtectionNetworkLearningSummary extends MicrosoftGraphEntity{
   deviceCount?: number
   url?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTermsAndConditionsAcceptanceStatus extends MicrosoftGraphEntity{
   acceptedDateTime?: string
   acceptedVersion?: number
   userDisplayName?: string
   userPrincipalName?: string
   termsAndConditions?: MicrosoftGraphTermsAndConditions
   "@odata.type"?: string
}
export interface MicrosoftGraphTermsAndConditionsAssignment extends MicrosoftGraphEntity{
   target?: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
   "@odata.type"?: string
}
export interface MicrosoftGraphAndroidCompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
   deviceThreatProtectionEnabled?: boolean
   deviceThreatProtectionRequiredSecurityLevel?: string
   minAndroidSecurityPatchLevel?: string
   osMaximumVersion?: string
   osMinimumVersion?: string
   passwordExpirationDays?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeLock?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequired?: boolean
   passwordRequiredType?: string
   securityBlockJailbrokenDevices?: boolean
   securityDisableUsbDebugging?: boolean
   securityPreventInstallAppsFromUnknownSources?: boolean
   securityRequireCompanyPortalAppIntegrity?: boolean
   securityRequireGooglePlayServices?: boolean
   securityRequireSafetyNetAttestationBasicIntegrity?: boolean
   securityRequireSafetyNetAttestationCertifiedDevice?: boolean
   securityRequireUpToDateSecurityProviders?: boolean
   securityRequireVerifyApps?: boolean
   storageRequireEncryption?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphAndroidCustomConfiguration extends MicrosoftGraphDeviceConfiguration{
   omaSettings?: MicrosoftGraphOmaSetting[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAndroidGeneralDeviceConfiguration extends MicrosoftGraphDeviceConfiguration{
   appsBlockClipboardSharing?: boolean
   appsBlockCopyPaste?: boolean
   appsBlockYouTube?: boolean
   appsHideList?: MicrosoftGraphAppListItem[]
   appsInstallAllowList?: MicrosoftGraphAppListItem[]
   appsLaunchBlockList?: MicrosoftGraphAppListItem[]
   bluetoothBlocked?: boolean
   cameraBlocked?: boolean
   cellularBlockDataRoaming?: boolean
   cellularBlockMessaging?: boolean
   cellularBlockVoiceRoaming?: boolean
   cellularBlockWiFiTethering?: boolean
   compliantAppListType?: string
   compliantAppsList?: MicrosoftGraphAppListItem[]
   deviceSharingAllowed?: boolean
   diagnosticDataBlockSubmission?: boolean
   factoryResetBlocked?: boolean
   googleAccountBlockAutoSync?: boolean
   googlePlayStoreBlocked?: boolean
   kioskModeApps?: MicrosoftGraphAppListItem[]
   kioskModeBlockSleepButton?: boolean
   kioskModeBlockVolumeButtons?: boolean
   locationServicesBlocked?: boolean
   nfcBlocked?: boolean
   passwordBlockFingerprintUnlock?: boolean
   passwordBlockTrustAgents?: boolean
   passwordExpirationDays?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeScreenTimeout?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequired?: boolean
   passwordRequiredType?: string
   passwordSignInFailureCountBeforeFactoryReset?: number
   powerOffBlocked?: boolean
   screenCaptureBlocked?: boolean
   securityRequireVerifyApps?: boolean
   storageBlockGoogleBackup?: boolean
   storageBlockRemovableStorage?: boolean
   storageRequireDeviceEncryption?: boolean
   storageRequireRemovableStorageEncryption?: boolean
   voiceAssistantBlocked?: boolean
   voiceDialingBlocked?: boolean
   webBrowserBlockAutofill?: boolean
   webBrowserBlocked?: boolean
   webBrowserBlockJavaScript?: boolean
   webBrowserBlockPopups?: boolean
   webBrowserCookieSettings?: string
   wiFiBlocked?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphAndroidWorkProfileCompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
   deviceThreatProtectionEnabled?: boolean
   deviceThreatProtectionRequiredSecurityLevel?: string
   minAndroidSecurityPatchLevel?: string
   osMaximumVersion?: string
   osMinimumVersion?: string
   passwordExpirationDays?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeLock?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequired?: boolean
   passwordRequiredType?: string
   securityBlockJailbrokenDevices?: boolean
   securityDisableUsbDebugging?: boolean
   securityPreventInstallAppsFromUnknownSources?: boolean
   securityRequireCompanyPortalAppIntegrity?: boolean
   securityRequireGooglePlayServices?: boolean
   securityRequireSafetyNetAttestationBasicIntegrity?: boolean
   securityRequireSafetyNetAttestationCertifiedDevice?: boolean
   securityRequireUpToDateSecurityProviders?: boolean
   securityRequireVerifyApps?: boolean
   storageRequireEncryption?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphAndroidWorkProfileCustomConfiguration extends MicrosoftGraphDeviceConfiguration{
   omaSettings?: MicrosoftGraphOmaSetting[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAndroidWorkProfileGeneralDeviceConfiguration extends MicrosoftGraphDeviceConfiguration{
   passwordBlockFingerprintUnlock?: boolean
   passwordBlockTrustAgents?: boolean
   passwordExpirationDays?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeScreenTimeout?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequiredType?: string
   passwordSignInFailureCountBeforeFactoryReset?: number
   securityRequireVerifyApps?: boolean
   workProfileBlockAddingAccounts?: boolean
   workProfileBlockCamera?: boolean
   workProfileBlockCrossProfileCallerId?: boolean
   workProfileBlockCrossProfileContactsSearch?: boolean
   workProfileBlockCrossProfileCopyPaste?: boolean
   workProfileBlockNotificationsWhileDeviceLocked?: boolean
   workProfileBlockScreenCapture?: boolean
   workProfileBluetoothEnableContactSharing?: boolean
   workProfileDataSharingType?: string
   workProfileDefaultAppPermissionPolicy?: string
   workProfilePasswordBlockFingerprintUnlock?: boolean
   workProfilePasswordBlockTrustAgents?: boolean
   workProfilePasswordExpirationDays?: number
   workProfilePasswordMinimumLength?: number
   workProfilePasswordMinLetterCharacters?: number
   workProfilePasswordMinLowerCaseCharacters?: number
   workProfilePasswordMinNonLetterCharacters?: number
   workProfilePasswordMinNumericCharacters?: number
   workProfilePasswordMinSymbolCharacters?: number
   workProfilePasswordMinUpperCaseCharacters?: number
   workProfilePasswordMinutesOfInactivityBeforeScreenTimeout?: number
   workProfilePasswordPreviousPasswordBlockCount?: number
   workProfilePasswordRequiredType?: string
   workProfilePasswordSignInFailureCountBeforeFactoryReset?: number
   workProfileRequirePassword?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphAppleDeviceFeaturesConfigurationBase extends MicrosoftGraphDeviceConfiguration{
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceComplianceActionItem extends MicrosoftGraphEntity{
   actionType?: string
   gracePeriodHours?: number
   notificationMessageCCList?: string[]
   notificationTemplateId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceComplianceDeviceOverview extends MicrosoftGraphEntity{
   configurationVersion?: number
   errorCount?: number
   failedCount?: number
   lastUpdateDateTime?: string
   notApplicableCount?: number
   pendingCount?: number
   successCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceComplianceDeviceStatus extends MicrosoftGraphEntity{
   complianceGracePeriodExpirationDateTime?: string
   deviceDisplayName?: string
   deviceModel?: string
   lastReportedDateTime?: string
   status?: string
   userName?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceCompliancePolicyAssignment extends MicrosoftGraphEntity{
   target?: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
   "@odata.type"?: string
}
export interface MicrosoftGraphSettingStateDeviceSummary extends MicrosoftGraphEntity{
   compliantDeviceCount?: number
   conflictDeviceCount?: number
   errorDeviceCount?: number
   instancePath?: string
   nonCompliantDeviceCount?: number
   notApplicableDeviceCount?: number
   remediatedDeviceCount?: number
   settingName?: string
   unknownDeviceCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceComplianceScheduledActionForRule extends MicrosoftGraphEntity{
   ruleName?: string
   scheduledActionConfigurations?: MicrosoftGraphDeviceComplianceActionItem[]
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceComplianceUserStatus extends MicrosoftGraphEntity{
   devicesCount?: number
   lastReportedDateTime?: string
   status?: string
   userDisplayName?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceComplianceUserOverview extends MicrosoftGraphEntity{
   configurationVersion?: number
   errorCount?: number
   failedCount?: number
   lastUpdateDateTime?: string
   notApplicableCount?: number
   pendingCount?: number
   successCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceComplianceSettingState extends MicrosoftGraphEntity{
   complianceGracePeriodExpirationDateTime?: string
   deviceId?: string
   deviceModel?: string
   deviceName?: string
   setting?: string
   settingName?: string
   state?: string
   userEmail?: string
   userId?: string
   userName?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceCompliancePolicyState extends MicrosoftGraphEntity{
   displayName?: string
   platformType?: string
   settingCount?: number
   settingStates?: MicrosoftGraphDeviceCompliancePolicySettingState[]
   state?: string
   version?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceConfigurationAssignment extends MicrosoftGraphEntity{
   target?: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceConfigurationDeviceStatus extends MicrosoftGraphEntity{
   complianceGracePeriodExpirationDateTime?: string
   deviceDisplayName?: string
   deviceModel?: string
   lastReportedDateTime?: string
   status?: string
   userName?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceConfigurationDeviceOverview extends MicrosoftGraphEntity{
   configurationVersion?: number
   errorCount?: number
   failedCount?: number
   lastUpdateDateTime?: string
   notApplicableCount?: number
   pendingCount?: number
   successCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceConfigurationUserStatus extends MicrosoftGraphEntity{
   devicesCount?: number
   lastReportedDateTime?: string
   status?: string
   userDisplayName?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceConfigurationUserOverview extends MicrosoftGraphEntity{
   configurationVersion?: number
   errorCount?: number
   failedCount?: number
   lastUpdateDateTime?: string
   notApplicableCount?: number
   pendingCount?: number
   successCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceConfigurationState extends MicrosoftGraphEntity{
   displayName?: string
   platformType?: string
   settingCount?: number
   settingStates?: MicrosoftGraphDeviceConfigurationSettingState[]
   state?: string
   version?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphEditionUpgradeConfiguration extends MicrosoftGraphDeviceConfiguration{
   license?: string
   licenseType?: string
   productKey?: string
   targetEdition?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIosCertificateProfile extends MicrosoftGraphDeviceConfiguration{
   "@odata.type"?: string
}
export interface MicrosoftGraphIosCompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
   deviceThreatProtectionEnabled?: boolean
   deviceThreatProtectionRequiredSecurityLevel?: string
   managedEmailProfileRequired?: boolean
   osMaximumVersion?: string
   osMinimumVersion?: string
   passcodeBlockSimple?: boolean
   passcodeExpirationDays?: number
   passcodeMinimumCharacterSetCount?: number
   passcodeMinimumLength?: number
   passcodeMinutesOfInactivityBeforeLock?: number
   passcodePreviousPasscodeBlockCount?: number
   passcodeRequired?: boolean
   passcodeRequiredType?: string
   securityBlockJailbrokenDevices?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphIosCustomConfiguration extends MicrosoftGraphDeviceConfiguration{
   payload?: string
   payloadFileName?: string
   payloadName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIosDeviceFeaturesConfiguration extends MicrosoftGraphAppleDeviceFeaturesConfigurationBase{
   assetTagTemplate?: string
   homeScreenDockIcons?: MicrosoftGraphIosHomeScreenItem[]
   homeScreenPages?: MicrosoftGraphIosHomeScreenPage[]
   lockScreenFootnote?: string
   notificationSettings?: MicrosoftGraphIosNotificationSettings[]
   "@odata.type"?: string
}
export interface MicrosoftGraphIosGeneralDeviceConfiguration extends MicrosoftGraphDeviceConfiguration{
   accountBlockModification?: boolean
   activationLockAllowWhenSupervised?: boolean
   airDropBlocked?: boolean
   airDropForceUnmanagedDropTarget?: boolean
   airPlayForcePairingPasswordForOutgoingRequests?: boolean
   appleNewsBlocked?: boolean
   appleWatchBlockPairing?: boolean
   appleWatchForceWristDetection?: boolean
   appsSingleAppModeList?: MicrosoftGraphAppListItem[]
   appStoreBlockAutomaticDownloads?: boolean
   appStoreBlocked?: boolean
   appStoreBlockInAppPurchases?: boolean
   appStoreBlockUIAppInstallation?: boolean
   appStoreRequirePassword?: boolean
   appsVisibilityList?: MicrosoftGraphAppListItem[]
   appsVisibilityListType?: string
   bluetoothBlockModification?: boolean
   cameraBlocked?: boolean
   cellularBlockDataRoaming?: boolean
   cellularBlockGlobalBackgroundFetchWhileRoaming?: boolean
   cellularBlockPerAppDataModification?: boolean
   cellularBlockPersonalHotspot?: boolean
   cellularBlockVoiceRoaming?: boolean
   certificatesBlockUntrustedTlsCertificates?: boolean
   classroomAppBlockRemoteScreenObservation?: boolean
   classroomAppForceUnpromptedScreenObservation?: boolean
   compliantAppListType?: string
   compliantAppsList?: MicrosoftGraphAppListItem[]
   configurationProfileBlockChanges?: boolean
   definitionLookupBlocked?: boolean
   deviceBlockEnableRestrictions?: boolean
   deviceBlockEraseContentAndSettings?: boolean
   deviceBlockNameModification?: boolean
   diagnosticDataBlockSubmission?: boolean
   diagnosticDataBlockSubmissionModification?: boolean
   documentsBlockManagedDocumentsInUnmanagedApps?: boolean
   documentsBlockUnmanagedDocumentsInManagedApps?: boolean
   emailInDomainSuffixes?: string[]
   enterpriseAppBlockTrust?: boolean
   enterpriseAppBlockTrustModification?: boolean
   faceTimeBlocked?: boolean
   findMyFriendsBlocked?: boolean
   gameCenterBlocked?: boolean
   gamingBlockGameCenterFriends?: boolean
   gamingBlockMultiplayer?: boolean
   hostPairingBlocked?: boolean
   iBooksStoreBlocked?: boolean
   iBooksStoreBlockErotica?: boolean
   iCloudBlockActivityContinuation?: boolean
   iCloudBlockBackup?: boolean
   iCloudBlockDocumentSync?: boolean
   iCloudBlockManagedAppsSync?: boolean
   iCloudBlockPhotoLibrary?: boolean
   iCloudBlockPhotoStreamSync?: boolean
   iCloudBlockSharedPhotoStream?: boolean
   iCloudRequireEncryptedBackup?: boolean
   iTunesBlockExplicitContent?: boolean
   iTunesBlockMusicService?: boolean
   iTunesBlockRadio?: boolean
   keyboardBlockAutoCorrect?: boolean
   keyboardBlockDictation?: boolean
   keyboardBlockPredictive?: boolean
   keyboardBlockShortcuts?: boolean
   keyboardBlockSpellCheck?: boolean
   kioskModeAllowAssistiveSpeak?: boolean
   kioskModeAllowAssistiveTouchSettings?: boolean
   kioskModeAllowAutoLock?: boolean
   kioskModeAllowColorInversionSettings?: boolean
   kioskModeAllowRingerSwitch?: boolean
   kioskModeAllowScreenRotation?: boolean
   kioskModeAllowSleepButton?: boolean
   kioskModeAllowTouchscreen?: boolean
   kioskModeAllowVoiceOverSettings?: boolean
   kioskModeAllowVolumeButtons?: boolean
   kioskModeAllowZoomSettings?: boolean
   kioskModeAppStoreUrl?: string
   kioskModeBuiltInAppId?: string
   kioskModeManagedAppId?: string
   kioskModeRequireAssistiveTouch?: boolean
   kioskModeRequireColorInversion?: boolean
   kioskModeRequireMonoAudio?: boolean
   kioskModeRequireVoiceOver?: boolean
   kioskModeRequireZoom?: boolean
   lockScreenBlockControlCenter?: boolean
   lockScreenBlockNotificationView?: boolean
   lockScreenBlockPassbook?: boolean
   lockScreenBlockTodayView?: boolean
   mediaContentRatingApps?: string
   mediaContentRatingAustralia?: MicrosoftGraphMediaContentRatingAustralia
   mediaContentRatingCanada?: MicrosoftGraphMediaContentRatingCanada
   mediaContentRatingFrance?: MicrosoftGraphMediaContentRatingFrance
   mediaContentRatingGermany?: MicrosoftGraphMediaContentRatingGermany
   mediaContentRatingIreland?: MicrosoftGraphMediaContentRatingIreland
   mediaContentRatingJapan?: MicrosoftGraphMediaContentRatingJapan
   mediaContentRatingNewZealand?: MicrosoftGraphMediaContentRatingNewZealand
   mediaContentRatingUnitedKingdom?: MicrosoftGraphMediaContentRatingUnitedKingdom
   mediaContentRatingUnitedStates?: MicrosoftGraphMediaContentRatingUnitedStates
   messagesBlocked?: boolean
   networkUsageRules?: MicrosoftGraphIosNetworkUsageRule[]
   notificationsBlockSettingsModification?: boolean
   passcodeBlockFingerprintModification?: boolean
   passcodeBlockFingerprintUnlock?: boolean
   passcodeBlockModification?: boolean
   passcodeBlockSimple?: boolean
   passcodeExpirationDays?: number
   passcodeMinimumCharacterSetCount?: number
   passcodeMinimumLength?: number
   passcodeMinutesOfInactivityBeforeLock?: number
   passcodeMinutesOfInactivityBeforeScreenTimeout?: number
   passcodePreviousPasscodeBlockCount?: number
   passcodeRequired?: boolean
   passcodeRequiredType?: string
   passcodeSignInFailureCountBeforeWipe?: number
   podcastsBlocked?: boolean
   safariBlockAutofill?: boolean
   safariBlocked?: boolean
   safariBlockJavaScript?: boolean
   safariBlockPopups?: boolean
   safariCookieSettings?: string
   safariManagedDomains?: string[]
   safariPasswordAutoFillDomains?: string[]
   safariRequireFraudWarning?: boolean
   screenCaptureBlocked?: boolean
   siriBlocked?: boolean
   siriBlockedWhenLocked?: boolean
   siriBlockUserGeneratedContent?: boolean
   siriRequireProfanityFilter?: boolean
   spotlightBlockInternetResults?: boolean
   voiceDialingBlocked?: boolean
   wallpaperBlockModification?: boolean
   wiFiConnectOnlyToConfiguredNetworks?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphIosUpdateConfiguration extends MicrosoftGraphDeviceConfiguration{
   activeHoursEnd?: string
   activeHoursStart?: string
   scheduledInstallDays?: string[]
   utcTimeOffsetInMinutes?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphMacOSCompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
   deviceThreatProtectionEnabled?: boolean
   deviceThreatProtectionRequiredSecurityLevel?: string
   firewallBlockAllIncoming?: boolean
   firewallEnabled?: boolean
   firewallEnableStealthMode?: boolean
   osMaximumVersion?: string
   osMinimumVersion?: string
   passwordBlockSimple?: boolean
   passwordExpirationDays?: number
   passwordMinimumCharacterSetCount?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeLock?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequired?: boolean
   passwordRequiredType?: string
   storageRequireEncryption?: boolean
   systemIntegrityProtectionEnabled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphMacOSCustomConfiguration extends MicrosoftGraphDeviceConfiguration{
   payload?: string
   payloadFileName?: string
   payloadName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMacOSDeviceFeaturesConfiguration extends MicrosoftGraphAppleDeviceFeaturesConfigurationBase{
   "@odata.type"?: string
}
export interface MicrosoftGraphMacOSGeneralDeviceConfiguration extends MicrosoftGraphDeviceConfiguration{
   compliantAppListType?: string
   compliantAppsList?: MicrosoftGraphAppListItem[]
   emailInDomainSuffixes?: string[]
   passwordBlockSimple?: boolean
   passwordExpirationDays?: number
   passwordMinimumCharacterSetCount?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeLock?: number
   passwordMinutesOfInactivityBeforeScreenTimeout?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequired?: boolean
   passwordRequiredType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphReportRoot extends MicrosoftGraphEntity{
   dailyPrintUsageByPrinter?: MicrosoftGraphPrintUsageByPrinter[]
   dailyPrintUsageByUser?: MicrosoftGraphPrintUsageByUser[]
   monthlyPrintUsageByPrinter?: MicrosoftGraphPrintUsageByPrinter[]
   monthlyPrintUsageByUser?: MicrosoftGraphPrintUsageByUser[]
   security?: MicrosoftGraphSecurityReportsRoot
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintUsage extends MicrosoftGraphEntity{
   completedBlackAndWhiteJobCount?: number
   completedColorJobCount?: number
   incompleteJobCount?: number
   usageDate?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintUsageByPrinter extends MicrosoftGraphPrintUsage{
   printerId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintUsageByUser extends MicrosoftGraphPrintUsage{
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityReportsRoot extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphSharedPCConfiguration extends MicrosoftGraphDeviceConfiguration{
   accountManagerPolicy?: MicrosoftGraphSharedPCAccountManagerPolicy
   allowedAccounts?: string
   allowLocalStorage?: boolean
   disableAccountManager?: boolean
   disableEduPolicies?: boolean
   disablePowerPolicies?: boolean
   disableSignInOnResume?: boolean
   enabled?: boolean
   idleTimeBeforeSleepInSeconds?: number
   kioskAppDisplayName?: string
   kioskAppUserModelId?: string
   maintenanceStartTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindows10CompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
   bitLockerEnabled?: boolean
   codeIntegrityEnabled?: boolean
   earlyLaunchAntiMalwareDriverEnabled?: boolean
   mobileOsMaximumVersion?: string
   mobileOsMinimumVersion?: string
   osMaximumVersion?: string
   osMinimumVersion?: string
   passwordBlockSimple?: boolean
   passwordExpirationDays?: number
   passwordMinimumCharacterSetCount?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeLock?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequired?: boolean
   passwordRequiredToUnlockFromIdle?: boolean
   passwordRequiredType?: string
   requireHealthyDeviceReport?: boolean
   secureBootEnabled?: boolean
   storageRequireEncryption?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWindows10CustomConfiguration extends MicrosoftGraphDeviceConfiguration{
   omaSettings?: MicrosoftGraphOmaSetting[]
   "@odata.type"?: string
}
export interface MicrosoftGraphWindows10EndpointProtectionConfiguration extends MicrosoftGraphDeviceConfiguration{
   applicationGuardAllowPersistence?: boolean
   applicationGuardAllowPrintToLocalPrinters?: boolean
   applicationGuardAllowPrintToNetworkPrinters?: boolean
   applicationGuardAllowPrintToPDF?: boolean
   applicationGuardAllowPrintToXPS?: boolean
   applicationGuardBlockClipboardSharing?: string
   applicationGuardBlockFileTransfer?: string
   applicationGuardBlockNonEnterpriseContent?: boolean
   applicationGuardEnabled?: boolean
   applicationGuardForceAuditing?: boolean
   appLockerApplicationControl?: string
   bitLockerDisableWarningForOtherDiskEncryption?: boolean
   bitLockerEnableStorageCardEncryptionOnMobile?: boolean
   bitLockerEncryptDevice?: boolean
   bitLockerRemovableDrivePolicy?: MicrosoftGraphBitLockerRemovableDrivePolicy
   defenderAdditionalGuardedFolders?: string[]
   defenderAttackSurfaceReductionExcludedPaths?: string[]
   defenderExploitProtectionXml?: string
   defenderExploitProtectionXmlFileName?: string
   defenderGuardedFoldersAllowedAppPaths?: string[]
   defenderSecurityCenterBlockExploitProtectionOverride?: boolean
   firewallBlockStatefulFTP?: boolean
   firewallCertificateRevocationListCheckMethod?: string
   firewallIdleTimeoutForSecurityAssociationInSeconds?: number
   firewallIPSecExemptionsAllowDHCP?: boolean
   firewallIPSecExemptionsAllowICMP?: boolean
   firewallIPSecExemptionsAllowNeighborDiscovery?: boolean
   firewallIPSecExemptionsAllowRouterDiscovery?: boolean
   firewallMergeKeyingModuleSettings?: boolean
   firewallPacketQueueingMethod?: string
   firewallPreSharedKeyEncodingMethod?: string
   firewallProfileDomain?: MicrosoftGraphWindowsFirewallNetworkProfile
   firewallProfilePrivate?: MicrosoftGraphWindowsFirewallNetworkProfile
   firewallProfilePublic?: MicrosoftGraphWindowsFirewallNetworkProfile
   smartScreenBlockOverrideForFiles?: boolean
   smartScreenEnableInShell?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWindows10EnterpriseModernAppManagementConfiguration extends MicrosoftGraphDeviceConfiguration{
   uninstallBuiltInApps?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWindows10GeneralConfiguration extends MicrosoftGraphDeviceConfiguration{
   accountsBlockAddingNonMicrosoftAccountEmail?: boolean
   antiTheftModeBlocked?: boolean
   appsAllowTrustedAppsSideloading?: string
   appsBlockWindowsStoreOriginatedApps?: boolean
   bluetoothAllowedServices?: string[]
   bluetoothBlockAdvertising?: boolean
   bluetoothBlockDiscoverableMode?: boolean
   bluetoothBlocked?: boolean
   bluetoothBlockPrePairing?: boolean
   cameraBlocked?: boolean
   cellularBlockDataWhenRoaming?: boolean
   cellularBlockVpn?: boolean
   cellularBlockVpnWhenRoaming?: boolean
   certificatesBlockManualRootCertificateInstallation?: boolean
   connectedDevicesServiceBlocked?: boolean
   copyPasteBlocked?: boolean
   cortanaBlocked?: boolean
   defenderBlockEndUserAccess?: boolean
   defenderCloudBlockLevel?: string
   defenderDaysBeforeDeletingQuarantinedMalware?: number
   defenderDetectedMalwareActions?: MicrosoftGraphDefenderDetectedMalwareActions
   defenderFileExtensionsToExclude?: string[]
   defenderFilesAndFoldersToExclude?: string[]
   defenderMonitorFileActivity?: string
   defenderProcessesToExclude?: string[]
   defenderPromptForSampleSubmission?: string
   defenderRequireBehaviorMonitoring?: boolean
   defenderRequireCloudProtection?: boolean
   defenderRequireNetworkInspectionSystem?: boolean
   defenderRequireRealTimeMonitoring?: boolean
   defenderScanArchiveFiles?: boolean
   defenderScanDownloads?: boolean
   defenderScanIncomingMail?: boolean
   defenderScanMappedNetworkDrivesDuringFullScan?: boolean
   defenderScanMaxCpu?: number
   defenderScanNetworkFiles?: boolean
   defenderScanRemovableDrivesDuringFullScan?: boolean
   defenderScanScriptsLoadedInInternetExplorer?: boolean
   defenderScanType?: string
   defenderScheduledQuickScanTime?: string
   defenderScheduledScanTime?: string
   defenderSignatureUpdateIntervalInHours?: number
   defenderSystemScanSchedule?: string
   developerUnlockSetting?: string
   deviceManagementBlockFactoryResetOnMobile?: boolean
   deviceManagementBlockManualUnenroll?: boolean
   diagnosticsDataSubmissionMode?: string
   edgeAllowStartPagesModification?: boolean
   edgeBlockAccessToAboutFlags?: boolean
   edgeBlockAddressBarDropdown?: boolean
   edgeBlockAutofill?: boolean
   edgeBlockCompatibilityList?: boolean
   edgeBlockDeveloperTools?: boolean
   edgeBlocked?: boolean
   edgeBlockExtensions?: boolean
   edgeBlockInPrivateBrowsing?: boolean
   edgeBlockJavaScript?: boolean
   edgeBlockLiveTileDataCollection?: boolean
   edgeBlockPasswordManager?: boolean
   edgeBlockPopups?: boolean
   edgeBlockSearchSuggestions?: boolean
   edgeBlockSendingDoNotTrackHeader?: boolean
   edgeBlockSendingIntranetTrafficToInternetExplorer?: boolean
   edgeClearBrowsingDataOnExit?: boolean
   edgeCookiePolicy?: string
   edgeDisableFirstRunPage?: boolean
   edgeEnterpriseModeSiteListLocation?: string
   edgeFirstRunUrl?: string
   edgeHomepageUrls?: string[]
   edgeRequireSmartScreen?: boolean
   edgeSearchEngine?: MicrosoftGraphEdgeSearchEngineBase
   edgeSendIntranetTrafficToInternetExplorer?: boolean
   edgeSyncFavoritesWithInternetExplorer?: boolean
   enterpriseCloudPrintDiscoveryEndPoint?: string
   enterpriseCloudPrintDiscoveryMaxLimit?: number
   enterpriseCloudPrintMopriaDiscoveryResourceIdentifier?: string
   enterpriseCloudPrintOAuthAuthority?: string
   enterpriseCloudPrintOAuthClientIdentifier?: string
   enterpriseCloudPrintResourceIdentifier?: string
   experienceBlockDeviceDiscovery?: boolean
   experienceBlockErrorDialogWhenNoSIM?: boolean
   experienceBlockTaskSwitcher?: boolean
   gameDvrBlocked?: boolean
   internetSharingBlocked?: boolean
   locationServicesBlocked?: boolean
   lockScreenAllowTimeoutConfiguration?: boolean
   lockScreenBlockActionCenterNotifications?: boolean
   lockScreenBlockCortana?: boolean
   lockScreenBlockToastNotifications?: boolean
   lockScreenTimeoutInSeconds?: number
   logonBlockFastUserSwitching?: boolean
   microsoftAccountBlocked?: boolean
   microsoftAccountBlockSettingsSync?: boolean
   networkProxyApplySettingsDeviceWide?: boolean
   networkProxyAutomaticConfigurationUrl?: string
   networkProxyDisableAutoDetect?: boolean
   networkProxyServer?: MicrosoftGraphWindows10NetworkProxyServer
   nfcBlocked?: boolean
   oneDriveDisableFileSync?: boolean
   passwordBlockSimple?: boolean
   passwordExpirationDays?: number
   passwordMinimumCharacterSetCount?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeScreenTimeout?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequired?: boolean
   passwordRequiredType?: string
   passwordRequireWhenResumeFromIdleState?: boolean
   passwordSignInFailureCountBeforeFactoryReset?: number
   personalizationDesktopImageUrl?: string
   personalizationLockScreenImageUrl?: string
   privacyAdvertisingId?: string
   privacyAutoAcceptPairingAndConsentPrompts?: boolean
   privacyBlockInputPersonalization?: boolean
   resetProtectionModeBlocked?: boolean
   safeSearchFilter?: string
   screenCaptureBlocked?: boolean
   searchBlockDiacritics?: boolean
   searchDisableAutoLanguageDetection?: boolean
   searchDisableIndexerBackoff?: boolean
   searchDisableIndexingEncryptedItems?: boolean
   searchDisableIndexingRemovableDrive?: boolean
   searchEnableAutomaticIndexSizeManangement?: boolean
   searchEnableRemoteQueries?: boolean
   settingsBlockAccountsPage?: boolean
   settingsBlockAddProvisioningPackage?: boolean
   settingsBlockAppsPage?: boolean
   settingsBlockChangeLanguage?: boolean
   settingsBlockChangePowerSleep?: boolean
   settingsBlockChangeRegion?: boolean
   settingsBlockChangeSystemTime?: boolean
   settingsBlockDevicesPage?: boolean
   settingsBlockEaseOfAccessPage?: boolean
   settingsBlockEditDeviceName?: boolean
   settingsBlockGamingPage?: boolean
   settingsBlockNetworkInternetPage?: boolean
   settingsBlockPersonalizationPage?: boolean
   settingsBlockPrivacyPage?: boolean
   settingsBlockRemoveProvisioningPackage?: boolean
   settingsBlockSettingsApp?: boolean
   settingsBlockSystemPage?: boolean
   settingsBlockTimeLanguagePage?: boolean
   settingsBlockUpdateSecurityPage?: boolean
   sharedUserAppDataAllowed?: boolean
   smartScreenBlockPromptOverride?: boolean
   smartScreenBlockPromptOverrideForFiles?: boolean
   smartScreenEnableAppInstallControl?: boolean
   startBlockUnpinningAppsFromTaskbar?: boolean
   startMenuAppListVisibility?: string
   startMenuHideChangeAccountSettings?: boolean
   startMenuHideFrequentlyUsedApps?: boolean
   startMenuHideHibernate?: boolean
   startMenuHideLock?: boolean
   startMenuHidePowerButton?: boolean
   startMenuHideRecentJumpLists?: boolean
   startMenuHideRecentlyAddedApps?: boolean
   startMenuHideRestartOptions?: boolean
   startMenuHideShutDown?: boolean
   startMenuHideSignOut?: boolean
   startMenuHideSleep?: boolean
   startMenuHideSwitchAccount?: boolean
   startMenuHideUserTile?: boolean
   startMenuLayoutEdgeAssetsXml?: string
   startMenuLayoutXml?: string
   startMenuMode?: string
   startMenuPinnedFolderDocuments?: string
   startMenuPinnedFolderDownloads?: string
   startMenuPinnedFolderFileExplorer?: string
   startMenuPinnedFolderHomeGroup?: string
   startMenuPinnedFolderMusic?: string
   startMenuPinnedFolderNetwork?: string
   startMenuPinnedFolderPersonalFolder?: string
   startMenuPinnedFolderPictures?: string
   startMenuPinnedFolderSettings?: string
   startMenuPinnedFolderVideos?: string
   storageBlockRemovableStorage?: boolean
   storageRequireMobileDeviceEncryption?: boolean
   storageRestrictAppDataToSystemVolume?: boolean
   storageRestrictAppInstallToSystemVolume?: boolean
   tenantLockdownRequireNetworkDuringOutOfBoxExperience?: boolean
   usbBlocked?: boolean
   voiceRecordingBlocked?: boolean
   webRtcBlockLocalhostIpAddress?: boolean
   wiFiBlockAutomaticConnectHotspots?: boolean
   wiFiBlocked?: boolean
   wiFiBlockManualConfiguration?: boolean
   wiFiScanInterval?: number
   windowsSpotlightBlockConsumerSpecificFeatures?: boolean
   windowsSpotlightBlocked?: boolean
   windowsSpotlightBlockOnActionCenter?: boolean
   windowsSpotlightBlockTailoredExperiences?: boolean
   windowsSpotlightBlockThirdPartyNotifications?: boolean
   windowsSpotlightBlockWelcomeExperience?: boolean
   windowsSpotlightBlockWindowsTips?: boolean
   windowsSpotlightConfigureOnLockScreen?: string
   windowsStoreBlockAutoUpdate?: boolean
   windowsStoreBlocked?: boolean
   windowsStoreEnablePrivateStoreOnly?: boolean
   wirelessDisplayBlockProjectionToThisDevice?: boolean
   wirelessDisplayBlockUserInputFromReceiver?: boolean
   wirelessDisplayRequirePinForPairing?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWindows10MobileCompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
   bitLockerEnabled?: boolean
   codeIntegrityEnabled?: boolean
   earlyLaunchAntiMalwareDriverEnabled?: boolean
   osMaximumVersion?: string
   osMinimumVersion?: string
   passwordBlockSimple?: boolean
   passwordExpirationDays?: number
   passwordMinimumCharacterSetCount?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeLock?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequired?: boolean
   passwordRequiredType?: string
   passwordRequireToUnlockFromIdle?: boolean
   secureBootEnabled?: boolean
   storageRequireEncryption?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWindows10SecureAssessmentConfiguration extends MicrosoftGraphDeviceConfiguration{
   allowPrinting?: boolean
   allowScreenCapture?: boolean
   allowTextSuggestion?: boolean
   configurationAccount?: string
   launchUri?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindows10TeamGeneralConfiguration extends MicrosoftGraphDeviceConfiguration{
   azureOperationalInsightsBlockTelemetry?: boolean
   azureOperationalInsightsWorkspaceId?: string
   azureOperationalInsightsWorkspaceKey?: string
   connectAppBlockAutoLaunch?: boolean
   maintenanceWindowBlocked?: boolean
   maintenanceWindowDurationInHours?: number
   maintenanceWindowStartTime?: string
   miracastBlocked?: boolean
   miracastChannel?: string
   miracastRequirePin?: boolean
   settingsBlockMyMeetingsAndFiles?: boolean
   settingsBlockSessionResume?: boolean
   settingsBlockSigninSuggestions?: boolean
   settingsDefaultVolume?: number
   settingsScreenTimeoutInMinutes?: number
   settingsSessionTimeoutInMinutes?: number
   settingsSleepTimeoutInMinutes?: number
   welcomeScreenBackgroundImageUrl?: string
   welcomeScreenBlockAutomaticWakeUp?: boolean
   welcomeScreenMeetingInformation?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindows81CompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
   osMaximumVersion?: string
   osMinimumVersion?: string
   passwordBlockSimple?: boolean
   passwordExpirationDays?: number
   passwordMinimumCharacterSetCount?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeLock?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequired?: boolean
   passwordRequiredType?: string
   storageRequireEncryption?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWindows81GeneralConfiguration extends MicrosoftGraphDeviceConfiguration{
   accountsBlockAddingNonMicrosoftAccountEmail?: boolean
   applyOnlyToWindows81?: boolean
   browserBlockAutofill?: boolean
   browserBlockAutomaticDetectionOfIntranetSites?: boolean
   browserBlockEnterpriseModeAccess?: boolean
   browserBlockJavaScript?: boolean
   browserBlockPlugins?: boolean
   browserBlockPopups?: boolean
   browserBlockSendingDoNotTrackHeader?: boolean
   browserBlockSingleWordEntryOnIntranetSites?: boolean
   browserEnterpriseModeSiteListLocation?: string
   browserInternetSecurityLevel?: string
   browserIntranetSecurityLevel?: string
   browserLoggingReportLocation?: string
   browserRequireFirewall?: boolean
   browserRequireFraudWarning?: boolean
   browserRequireHighSecurityForRestrictedSites?: boolean
   browserRequireSmartScreen?: boolean
   browserTrustedSitesSecurityLevel?: string
   cellularBlockDataRoaming?: boolean
   diagnosticsBlockDataSubmission?: boolean
   passwordBlockPicturePasswordAndPin?: boolean
   passwordExpirationDays?: number
   passwordMinimumCharacterSetCount?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeScreenTimeout?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequiredType?: string
   passwordSignInFailureCountBeforeFactoryReset?: number
   storageRequireDeviceEncryption?: boolean
   updatesRequireAutomaticUpdates?: boolean
   userAccountControlSettings?: string
   workFoldersUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsDefenderAdvancedThreatProtectionConfiguration extends MicrosoftGraphDeviceConfiguration{
   allowSampleSharing?: boolean
   enableExpeditedTelemetryReporting?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsPhone81CompliancePolicy extends MicrosoftGraphDeviceCompliancePolicy{
   osMaximumVersion?: string
   osMinimumVersion?: string
   passwordBlockSimple?: boolean
   passwordExpirationDays?: number
   passwordMinimumCharacterSetCount?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeLock?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequired?: boolean
   passwordRequiredType?: string
   storageRequireEncryption?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsPhone81CustomConfiguration extends MicrosoftGraphDeviceConfiguration{
   omaSettings?: MicrosoftGraphOmaSetting[]
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsPhone81GeneralConfiguration extends MicrosoftGraphDeviceConfiguration{
   applyOnlyToWindowsPhone81?: boolean
   appsBlockCopyPaste?: boolean
   bluetoothBlocked?: boolean
   cameraBlocked?: boolean
   cellularBlockWifiTethering?: boolean
   compliantAppListType?: string
   compliantAppsList?: MicrosoftGraphAppListItem[]
   diagnosticDataBlockSubmission?: boolean
   emailBlockAddingAccounts?: boolean
   locationServicesBlocked?: boolean
   microsoftAccountBlocked?: boolean
   nfcBlocked?: boolean
   passwordBlockSimple?: boolean
   passwordExpirationDays?: number
   passwordMinimumCharacterSetCount?: number
   passwordMinimumLength?: number
   passwordMinutesOfInactivityBeforeScreenTimeout?: number
   passwordPreviousPasswordBlockCount?: number
   passwordRequired?: boolean
   passwordRequiredType?: string
   passwordSignInFailureCountBeforeFactoryReset?: number
   screenCaptureBlocked?: boolean
   storageBlockRemovableStorage?: boolean
   storageRequireEncryption?: boolean
   webBrowserBlocked?: boolean
   wifiBlockAutomaticConnectHotspots?: boolean
   wifiBlocked?: boolean
   wifiBlockHotspotReporting?: boolean
   windowsStoreBlocked?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsUpdateForBusinessConfiguration extends MicrosoftGraphDeviceConfiguration{
   allowWindows11Upgrade?: boolean
   automaticUpdateMode?: string
   autoRestartNotificationDismissal?: string
   businessReadyUpdatesOnly?: string
   deadlineForFeatureUpdatesInDays?: number
   deadlineForQualityUpdatesInDays?: number
   deadlineGracePeriodInDays?: number
   deliveryOptimizationMode?: string
   driversExcluded?: boolean
   engagedRestartDeadlineInDays?: number
   engagedRestartSnoozeScheduleInDays?: number
   engagedRestartTransitionScheduleInDays?: number
   featureUpdatesDeferralPeriodInDays?: number
   featureUpdatesPaused?: boolean
   featureUpdatesPauseExpiryDateTime?: string
   featureUpdatesPauseStartDate?: string
   featureUpdatesRollbackStartDateTime?: string
   featureUpdatesRollbackWindowInDays?: number
   featureUpdatesWillBeRolledBack?: boolean
   installationSchedule?: MicrosoftGraphWindowsUpdateInstallScheduleType
   microsoftUpdateServiceAllowed?: boolean
   postponeRebootUntilAfterDeadline?: boolean
   prereleaseFeatures?: string
   qualityUpdatesDeferralPeriodInDays?: number
   qualityUpdatesPaused?: boolean
   qualityUpdatesPauseExpiryDateTime?: string
   qualityUpdatesPauseStartDate?: string
   qualityUpdatesRollbackStartDateTime?: string
   qualityUpdatesWillBeRolledBack?: boolean
   scheduleImminentRestartWarningInMinutes?: number
   scheduleRestartWarningInHours?: number
   skipChecksBeforeRestart?: boolean
   updateNotificationLevel?: string
   updateWeeks?: MicrosoftGraphWindowsUpdateForBusinessUpdateWeeks
   userPauseAccess?: string
   userWindowsUpdateScanAccess?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEnrollmentConfigurationAssignment extends MicrosoftGraphEntity{
   target?: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceEnrollmentLimitConfiguration extends MicrosoftGraphDeviceEnrollmentConfiguration{
   limit?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceEnrollmentPlatformRestrictionsConfiguration extends MicrosoftGraphDeviceEnrollmentConfiguration{
   androidRestriction?: MicrosoftGraphDeviceEnrollmentPlatformRestriction
   iosRestriction?: MicrosoftGraphDeviceEnrollmentPlatformRestriction
   macOSRestriction?: MicrosoftGraphDeviceEnrollmentPlatformRestriction
   windowsMobileRestriction?: MicrosoftGraphDeviceEnrollmentPlatformRestriction
   windowsRestriction?: MicrosoftGraphDeviceEnrollmentPlatformRestriction
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceEnrollmentWindowsHelloForBusinessConfiguration extends MicrosoftGraphDeviceEnrollmentConfiguration{
   enhancedBiometricsState?: string
   pinExpirationInDays?: number
   pinLowercaseCharactersUsage?: string
   pinMaximumLength?: number
   pinMinimumLength?: number
   pinPreviousBlockCount?: number
   pinSpecialCharactersUsage?: string
   pinUppercaseCharactersUsage?: string
   remotePassportEnabled?: boolean
   securityDeviceRequired?: boolean
   state?: string
   unlockWithBiometricsEnabled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphUserExperienceAnalyticsDevicePerformance extends MicrosoftGraphEntity{
   averageBlueScreens?: unknown
   averageRestarts?: unknown
   blueScreenCount?: number
   bootScore?: number
   coreBootTimeInMs?: number
   coreLoginTimeInMs?: number
   deviceCount?: number
   deviceName?: string
   diskType?: string
   groupPolicyBootTimeInMs?: number
   groupPolicyLoginTimeInMs?: number
   healthStatus?: string
   loginScore?: number
   manufacturer?: string
   model?: string
   modelStartupPerformanceScore?: unknown
   operatingSystemVersion?: string
   responsiveDesktopTimeInMs?: number
   restartCount?: number
   startupPerformanceScore?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphImportedWindowsAutopilotDeviceIdentityUpload extends MicrosoftGraphEntity{
   createdDateTimeUtc?: string
   status?: string
   deviceIdentities?: MicrosoftGraphImportedWindowsAutopilotDeviceIdentity[]
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedMobileApp extends MicrosoftGraphEntity{
   mobileAppIdentifier?: MicrosoftGraphMobileAppIdentifier
   version?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedAppPolicyDeploymentSummary extends MicrosoftGraphEntity{
   configurationDeployedUserCount?: number
   configurationDeploymentSummaryPerApp?: MicrosoftGraphManagedAppPolicyDeploymentSummaryPerApp[]
   displayName?: string
   lastRefreshTime?: string
   version?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAndroidManagedAppRegistration extends MicrosoftGraphManagedAppRegistration{
   "@odata.type"?: string
}
export interface MicrosoftGraphIosManagedAppRegistration extends MicrosoftGraphManagedAppRegistration{
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedAppOperation extends MicrosoftGraphEntity{
   displayName?: string
   lastModifiedDateTime?: string
   state?: string
   version?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedAppStatusRaw extends MicrosoftGraphManagedAppStatus{
   content?: MicrosoftGraphJson
   "@odata.type"?: string
}
export interface MicrosoftGraphTargetedManagedAppPolicyAssignment extends MicrosoftGraphEntity{
   target?: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsInformationProtectionAppLockerFile extends MicrosoftGraphEntity{
   displayName?: string
   file?: string
   fileHash?: string
   version?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphLocalizedNotificationMessage extends MicrosoftGraphEntity{
   isDefault?: boolean
   lastModifiedDateTime?: string
   locale?: string
   messageTemplate?: string
   subject?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceAndAppManagementRoleDefinition extends MicrosoftGraphRoleDefinition{
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceManagementExportJob extends MicrosoftGraphEntity{
   expirationDateTime?: string
   filter?: string
   format?: string
   localizationType?: string
   reportName?: string
   requestDateTime?: string
   select?: string[]
   snapshotId?: string
   status?: string
   url?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEnrollmentTroubleshootingEvent extends MicrosoftGraphDeviceManagementTroubleshootingEvent{
   deviceId?: string
   enrollmentType?: string
   failureCategory?: string
   failureReason?: string
   managedDeviceIdentifier?: string
   operatingSystem?: string
   osVersion?: string
   userId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAdmin{
   serviceAnnouncement?: MicrosoftGraphServiceAnnouncement
   "@odata.type"?: string
}
export interface MicrosoftGraphServiceAnnouncement extends MicrosoftGraphEntity{
   healthOverviews?: MicrosoftGraphServiceHealth[]
   issues?: MicrosoftGraphServiceHealthIssue[]
   messages?: MicrosoftGraphServiceUpdateMessage[]
   "@odata.type"?: string
}
export interface MicrosoftGraphServiceHealth extends MicrosoftGraphEntity{
   service?: string
   status?: string
   issues?: MicrosoftGraphServiceHealthIssue[]
   "@odata.type"?: string
}
export interface MicrosoftGraphServiceAnnouncementBase extends MicrosoftGraphEntity{
   details?: MicrosoftGraphKeyValuePair[]
   endDateTime?: string
   lastModifiedDateTime?: string
   startDateTime?: string
   title?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphServiceHealthIssue extends MicrosoftGraphServiceAnnouncementBase{
   classification?: string
   feature?: string
   featureGroup?: string
   impactDescription?: string
   isResolved?: boolean
   origin?: string
   posts?: {createdDateTime?: string,description?: MicrosoftGraphItemBody,postType?: MicrosoftGraphPostType,"@odata.type"?: string,}
   service?: string
   status?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphServiceUpdateMessage extends MicrosoftGraphServiceAnnouncementBase{
   actionRequiredByDateTime?: string
   attachmentsArchive?: string
   body?: {content?: string,contentType?: MicrosoftGraphBodyType,"@odata.type"?: string,}
   category?: string
   hasAttachments?: boolean
   isMajorChange?: boolean
   services?: string[]
   severity?: string
   tags?: string[]
   viewPoint?: MicrosoftGraphServiceUpdateMessageViewpoint
   attachments?: MicrosoftGraphServiceAnnouncementAttachment[]
   "@odata.type"?: string
}
export interface MicrosoftGraphServiceAnnouncementAttachment extends MicrosoftGraphEntity{
   content?: string
   contentType?: string
   lastModifiedDateTime?: string
   name?: string
   size?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphSearchEntity extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphPlanner extends MicrosoftGraphEntity{
   buckets?: MicrosoftGraphPlannerBucket[]
   plans?: MicrosoftGraphPlannerPlan[]
   tasks?: MicrosoftGraphPlannerTask[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerBucket extends MicrosoftGraphEntity{
   name?: string
   orderHint?: string
   planId?: string
   tasks?: MicrosoftGraphPlannerTask[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerPlan extends MicrosoftGraphEntity{
   container?: MicrosoftGraphPlannerPlanContainer
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   owner?: string
   title?: string
   buckets?: MicrosoftGraphPlannerBucket[]
   details?: MicrosoftGraphPlannerPlanDetails
   tasks?: MicrosoftGraphPlannerTask[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerTask extends MicrosoftGraphEntity{
   activeChecklistItemCount?: number
   appliedCategories?: MicrosoftGraphPlannerAppliedCategories
   assigneePriority?: string
   assignments?: MicrosoftGraphPlannerAssignments
   bucketId?: string
   checklistItemCount?: number
   completedBy?: MicrosoftGraphIdentitySet
   completedDateTime?: string
   conversationThreadId?: string
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   dueDateTime?: string
   hasDescription?: boolean
   orderHint?: string
   percentComplete?: number
   planId?: string
   previewType?: MicrosoftGraphPlannerPreviewType
   priority?: number
   referenceCount?: number
   startDateTime?: string
   title?: string
   assignedToTaskBoardFormat?: MicrosoftGraphPlannerAssignedToTaskBoardTaskFormat
   bucketTaskBoardFormat?: MicrosoftGraphPlannerBucketTaskBoardTaskFormat
   details?: MicrosoftGraphPlannerTaskDetails
   progressTaskBoardFormat?: MicrosoftGraphPlannerProgressTaskBoardTaskFormat
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerAssignedToTaskBoardTaskFormat extends MicrosoftGraphEntity{
   orderHintsByAssignee?: MicrosoftGraphPlannerOrderHintsByAssignee
   unassignedOrderHint?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerBucketTaskBoardTaskFormat extends MicrosoftGraphEntity{
   orderHint?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerPlanDetails extends MicrosoftGraphEntity{
   categoryDescriptions?: MicrosoftGraphPlannerCategoryDescriptions
   sharedWith?: MicrosoftGraphPlannerUserIds
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerProgressTaskBoardTaskFormat extends MicrosoftGraphEntity{
   orderHint?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerTaskDetails extends MicrosoftGraphEntity{
   checklist?: MicrosoftGraphPlannerChecklistItems
   description?: string
   previewType?: MicrosoftGraphPlannerPreviewType
   references?: MicrosoftGraphPlannerExternalReferences
   "@odata.type"?: string
}
export interface MicrosoftGraphSharedInsight extends MicrosoftGraphEntity{
   lastShared?: MicrosoftGraphSharingDetail
   resourceReference?: MicrosoftGraphResourceReference
   resourceVisualization?: MicrosoftGraphResourceVisualization
   sharingHistory?: MicrosoftGraphSharingDetail[]
   lastSharedMethod?: MicrosoftGraphEntity
   resource?: MicrosoftGraphEntity
   "@odata.type"?: string
}
export interface MicrosoftGraphTrending extends MicrosoftGraphEntity{
   lastModifiedDateTime?: string
   resourceReference?: MicrosoftGraphResourceReference
   resourceVisualization?: MicrosoftGraphResourceVisualization
   weight?: unknown
   resource?: MicrosoftGraphEntity
   "@odata.type"?: string
}
export interface MicrosoftGraphUsedInsight extends MicrosoftGraphEntity{
   lastUsed?: MicrosoftGraphUsageDetails
   resourceReference?: MicrosoftGraphResourceReference
   resourceVisualization?: MicrosoftGraphResourceVisualization
   resource?: MicrosoftGraphEntity
   "@odata.type"?: string
}
export interface MicrosoftGraphChangeTrackedEntity extends MicrosoftGraphEntity{
   createdDateTime?: string
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphShiftPreferences extends MicrosoftGraphChangeTrackedEntity{
   availability?: MicrosoftGraphShiftAvailability[]
   "@odata.type"?: string
}
export interface MicrosoftGraphOnenoteEntityBaseModel extends MicrosoftGraphEntity{
   self?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOnenoteEntitySchemaObjectModel extends MicrosoftGraphOnenoteEntityBaseModel{
   createdDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOnenoteEntityHierarchyModel extends MicrosoftGraphOnenoteEntitySchemaObjectModel{
   createdBy?: MicrosoftGraphIdentitySet
   displayName?: string
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphNotebook extends MicrosoftGraphOnenoteEntityHierarchyModel{
   isDefault?: boolean
   isShared?: boolean
   links?: MicrosoftGraphNotebookLinks
   sectionGroupsUrl?: string
   sectionsUrl?: string
   userRole?: MicrosoftGraphOnenoteUserRole
   sectionGroups?: MicrosoftGraphSectionGroup[]
   sections?: MicrosoftGraphOnenoteSection[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSectionGroup extends MicrosoftGraphOnenoteEntityHierarchyModel{
   sectionGroupsUrl?: string
   sectionsUrl?: string
   parentNotebook?: MicrosoftGraphNotebook
   parentSectionGroup?: MicrosoftGraphSectionGroup
   sectionGroups?: MicrosoftGraphSectionGroup[]
   sections?: MicrosoftGraphOnenoteSection[]
   "@odata.type"?: string
}
export interface MicrosoftGraphOnenoteSection extends MicrosoftGraphOnenoteEntityHierarchyModel{
   isDefault?: boolean
   links?: MicrosoftGraphSectionLinks
   pagesUrl?: string
   pages?: MicrosoftGraphOnenotePage[]
   parentNotebook?: MicrosoftGraphNotebook
   parentSectionGroup?: MicrosoftGraphSectionGroup
   "@odata.type"?: string
}
export interface MicrosoftGraphOperation extends MicrosoftGraphEntity{
   createdDateTime?: string
   lastActionDateTime?: string
   status?: MicrosoftGraphOperationStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphOnenoteOperation extends MicrosoftGraphOperation{
   error?: MicrosoftGraphOnenoteOperationError
   percentComplete?: string
   resourceId?: string
   resourceLocation?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOnenotePage extends MicrosoftGraphOnenoteEntitySchemaObjectModel{
   content?: string
   contentUrl?: string
   createdByAppId?: string
   lastModifiedDateTime?: string
   level?: number
   links?: MicrosoftGraphPageLinks
   order?: number
   title?: string
   userTags?: string[]
   parentNotebook?: MicrosoftGraphNotebook
   parentSection?: MicrosoftGraphOnenoteSection
   "@odata.type"?: string
}
export interface MicrosoftGraphOnenoteResource extends MicrosoftGraphOnenoteEntityBaseModel{
   content?: string
   contentUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyRule extends MicrosoftGraphEntity{
   target?: MicrosoftGraphUnifiedRoleManagementPolicyRuleTarget
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyApprovalRule extends MicrosoftGraphUnifiedRoleManagementPolicyRule{
   setting?: MicrosoftGraphApprovalSettings
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyAuthenticationContextRule extends MicrosoftGraphUnifiedRoleManagementPolicyRule{
   claimValue?: string
   isEnabled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyEnablementRule extends MicrosoftGraphUnifiedRoleManagementPolicyRule{
   enabledRules?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyExpirationRule extends MicrosoftGraphUnifiedRoleManagementPolicyRule{
   isExpirationRequired?: boolean
   maximumDuration?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyNotificationRule extends MicrosoftGraphUnifiedRoleManagementPolicyRule{
   isDefaultRecipientsEnabled?: boolean
   notificationLevel?: string
   notificationRecipients?: string[]
   notificationType?: string
   recipientType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPrint{
   settings?: MicrosoftGraphPrintSettings
   connectors?: MicrosoftGraphPrintConnector[]
   operations?: MicrosoftGraphPrintOperation[]
   printers?: MicrosoftGraphPrinter[]
   services?: MicrosoftGraphPrintService[]
   shares?: MicrosoftGraphPrinterShare[]
   taskDefinitions?: MicrosoftGraphPrintTaskDefinition[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintConnector extends MicrosoftGraphEntity{
   appVersion?: string
   displayName?: string
   fullyQualifiedDomainName?: string
   location?: MicrosoftGraphPrinterLocation
   operatingSystem?: string
   registeredDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintOperation extends MicrosoftGraphEntity{
   createdDateTime?: string
   status?: {description?: string,state?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphPrinterBase extends MicrosoftGraphEntity{
   capabilities?: MicrosoftGraphPrinterCapabilities
   defaults?: MicrosoftGraphPrinterDefaults
   displayName?: string
   isAcceptingJobs?: boolean
   location?: MicrosoftGraphPrinterLocation
   manufacturer?: string
   model?: string
   status?: {description?: string,details?: string[],state?: string,"@odata.type"?: string,}
   jobs?: MicrosoftGraphPrintJob[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPrinter extends MicrosoftGraphPrinterBase{
   hasPhysicalDevice?: boolean
   isShared?: boolean
   lastSeenDateTime?: string
   registeredDateTime?: string
   connectors?: MicrosoftGraphPrintConnector[]
   shares?: MicrosoftGraphPrinterShare[]
   taskTriggers?: MicrosoftGraphPrintTaskTrigger[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintService extends MicrosoftGraphEntity{
   endpoints?: MicrosoftGraphPrintServiceEndpoint[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPrinterShare extends MicrosoftGraphPrinterBase{
   allowAllUsers?: boolean
   createdDateTime?: string
   allowedGroups?: MicrosoftGraphGroup[]
   allowedUsers?: MicrosoftGraphUser[]
   printer?: MicrosoftGraphPrinter
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintTaskDefinition extends MicrosoftGraphEntity{
   createdBy?: {appId?: string,displayName?: string,servicePrincipalId?: string,servicePrincipalName?: string,"@odata.type"?: string,}
   displayName?: string
   tasks?: MicrosoftGraphPrintTask[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintDocument extends MicrosoftGraphEntity{
   contentType?: string
   displayName?: string
   size?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintTaskTrigger extends MicrosoftGraphEntity{
   event?: string
   definition?: MicrosoftGraphPrintTaskDefinition
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintJob extends MicrosoftGraphEntity{
   configuration?: {collate?: boolean,colorMode?: MicrosoftGraphPrintColorMode,copies?: number,dpi?: number,duplexMode?: MicrosoftGraphPrintDuplexMode,feedOrientation?: MicrosoftGraphPrinterFeedOrientation,finishings?: MicrosoftGraphPrintFinishing[],fitPdfToPage?: boolean,inputBin?: string,margin?: MicrosoftGraphPrintMargin,mediaSize?: string,mediaType?: string,multipageLayout?: MicrosoftGraphPrintMultipageLayout,orientation?: MicrosoftGraphPrintOrientation,outputBin?: string,pageRanges?: MicrosoftGraphIntegerRange[],pagesPerSheet?: number,quality?: MicrosoftGraphPrintQuality,scaling?: MicrosoftGraphPrintScaling,"@odata.type"?: string,}
   createdBy?: MicrosoftGraphUserIdentity
   createdDateTime?: string
   isFetchable?: boolean
   redirectedFrom?: string
   redirectedTo?: string
   status?: {description?: string,details?: string[],isAcquiredByPrinter?: boolean,state?: string,"@odata.type"?: string,}
   documents?: MicrosoftGraphPrintDocument[]
   tasks?: MicrosoftGraphPrintTask[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPrinterCreateOperation extends MicrosoftGraphPrintOperation{
   certificate?: string
   printer?: MicrosoftGraphPrinter
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintTask extends MicrosoftGraphEntity{
   parentUrl?: string
   status?: {description?: string,state?: string,"@odata.type"?: string,}
   definition?: MicrosoftGraphPrintTaskDefinition
   trigger?: MicrosoftGraphPrintTaskTrigger
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintServiceEndpoint extends MicrosoftGraphEntity{
   displayName?: string
   uri?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphActivityHistoryItem extends MicrosoftGraphEntity{
   activeDurationSeconds?: number
   createdDateTime?: string
   expirationDateTime?: string
   lastActiveDateTime?: string
   lastModifiedDateTime?: string
   startedDateTime?: string
   status?: MicrosoftGraphStatus
   userTimezone?: string
   activity?: MicrosoftGraphUserActivity
   "@odata.type"?: string
}
export interface MicrosoftGraphDataPolicyOperation extends MicrosoftGraphEntity{
   completedDateTime?: string
   progress?: unknown
   status?: MicrosoftGraphDataPolicyOperationStatus
   storageLocation?: string
   submittedDateTime?: string
   userId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSimulationAutomation extends MicrosoftGraphEntity{
   createdBy?: MicrosoftGraphEmailIdentity
   createdDateTime?: string
   description?: string
   displayName?: string
   lastModifiedBy?: MicrosoftGraphEmailIdentity
   lastModifiedDateTime?: string
   lastRunDateTime?: string
   nextRunDateTime?: string
   status?: MicrosoftGraphSimulationAutomationStatus
   runs?: MicrosoftGraphSimulationAutomationRun[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSimulation extends MicrosoftGraphEntity{
   attackTechnique?: MicrosoftGraphSimulationAttackTechnique
   attackType?: MicrosoftGraphSimulationAttackType
   automationId?: string
   completionDateTime?: string
   createdBy?: MicrosoftGraphEmailIdentity
   createdDateTime?: string
   description?: string
   displayName?: string
   isAutomated?: boolean
   lastModifiedBy?: MicrosoftGraphEmailIdentity
   lastModifiedDateTime?: string
   launchDateTime?: string
   payloadDeliveryPlatform?: MicrosoftGraphPayloadDeliveryPlatform
   report?: MicrosoftGraphSimulationReport
   status?: MicrosoftGraphSimulationStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphSimulationAutomationRun extends MicrosoftGraphEntity{
   endDateTime?: string
   simulationId?: string
   startDateTime?: string
   status?: MicrosoftGraphSimulationAutomationRunStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphCommsOperation extends MicrosoftGraphEntity{
   clientContext?: string
   resultInfo?: MicrosoftGraphResultInfo
   status?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAddLargeGalleryViewOperation extends MicrosoftGraphCommsOperation{
   "@odata.type"?: string
}
export interface MicrosoftGraphAttendanceRecord extends MicrosoftGraphEntity{
   attendanceIntervals?: MicrosoftGraphAttendanceInterval[]
   emailAddress?: string
   identity?: MicrosoftGraphIdentity
   role?: string
   totalAttendanceInSeconds?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphAudioRoutingGroup extends MicrosoftGraphEntity{
   receivers?: string[]
   routingMode?: string
   sources?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphContentSharingSession extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphParticipant extends MicrosoftGraphEntity{
   info?: {countryCode?: string,endpointType?: MicrosoftGraphEndpointType,identity?: {application?: MicrosoftGraphIdentity,device?: MicrosoftGraphIdentity,user?: MicrosoftGraphIdentity,"@odata.type"?: string,},languageId?: string,participantId?: string,region?: string,"@odata.type"?: string,}
   isInLobby?: boolean
   isMuted?: boolean
   mediaStreams?: MicrosoftGraphMediaStream[]
   metadata?: string
   recordingInfo?: MicrosoftGraphRecordingInfo
   "@odata.type"?: string
}
export interface MicrosoftGraphCancelMediaProcessingOperation extends MicrosoftGraphCommsOperation{
   "@odata.type"?: string
}
export interface MicrosoftGraphInviteParticipantsOperation extends MicrosoftGraphCommsOperation{
   participants?: {hidden?: boolean,identity?: {application?: MicrosoftGraphIdentity,device?: MicrosoftGraphIdentity,user?: MicrosoftGraphIdentity,"@odata.type"?: string,},participantId?: string,removeFromDefaultAudioRoutingGroup?: boolean,replacesCallId?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphMeetingAttendanceReport extends MicrosoftGraphEntity{
   meetingEndDateTime?: string
   meetingStartDateTime?: string
   totalParticipantCount?: number
   attendanceRecords?: MicrosoftGraphAttendanceRecord[]
   "@odata.type"?: string
}
export interface MicrosoftGraphMuteParticipantOperation extends MicrosoftGraphCommsOperation{
   "@odata.type"?: string
}
export interface MicrosoftGraphParticipantJoiningNotification extends MicrosoftGraphEntity{
   call?: MicrosoftGraphCall
   "@odata.type"?: string
}
export interface MicrosoftGraphParticipantLeftNotification extends MicrosoftGraphEntity{
   participantId?: string
   call?: MicrosoftGraphCall
   "@odata.type"?: string
}
export interface MicrosoftGraphPlayPromptOperation extends MicrosoftGraphCommsOperation{
   "@odata.type"?: string
}
export interface MicrosoftGraphRecordOperation extends MicrosoftGraphCommsOperation{
   recordingAccessToken?: string
   recordingLocation?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphStartHoldMusicOperation extends MicrosoftGraphCommsOperation{
   "@odata.type"?: string
}
export interface MicrosoftGraphStopHoldMusicOperation extends MicrosoftGraphCommsOperation{
   "@odata.type"?: string
}
export interface MicrosoftGraphSubscribeToToneOperation extends MicrosoftGraphCommsOperation{
   "@odata.type"?: string
}
export interface MicrosoftGraphUnmuteParticipantOperation extends MicrosoftGraphCommsOperation{
   "@odata.type"?: string
}
export interface MicrosoftGraphUpdateRecordingStatusOperation extends MicrosoftGraphCommsOperation{
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthenticationMethod extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphEmailAuthenticationMethod extends MicrosoftGraphAuthenticationMethod{
   emailAddress?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphFido2AuthenticationMethod extends MicrosoftGraphAuthenticationMethod{
   aaGuid?: string
   attestationCertificates?: string[]
   attestationLevel?: MicrosoftGraphAttestationLevel
   createdDateTime?: string
   displayName?: string
   model?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethod extends MicrosoftGraphAuthenticationMethod{
   createdDateTime?: string
   deviceTag?: string
   displayName?: string
   phoneAppVersion?: string
   device?: MicrosoftGraphDevice
   "@odata.type"?: string
}
export interface MicrosoftGraphPasswordAuthenticationMethod extends MicrosoftGraphAuthenticationMethod{
   createdDateTime?: string
   password?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPhoneAuthenticationMethod extends MicrosoftGraphAuthenticationMethod{
   phoneNumber?: string
   phoneType?: MicrosoftGraphAuthenticationPhoneType
   smsSignInState?: MicrosoftGraphAuthenticationMethodSignInState
   "@odata.type"?: string
}
export interface MicrosoftGraphSoftwareOathAuthenticationMethod extends MicrosoftGraphAuthenticationMethod{
   secretKey?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTemporaryAccessPassAuthenticationMethod extends MicrosoftGraphAuthenticationMethod{
   createdDateTime?: string
   isUsable?: boolean
   isUsableOnce?: boolean
   lifetimeInMinutes?: number
   methodUsabilityReason?: string
   startDateTime?: string
   temporaryAccessPass?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsHelloForBusinessAuthenticationMethod extends MicrosoftGraphAuthenticationMethod{
   createdDateTime?: string
   displayName?: string
   keyStrength?: MicrosoftGraphAuthenticationMethodKeyStrength
   device?: MicrosoftGraphDevice
   "@odata.type"?: string
}
export interface MicrosoftGraphAadUserConversationMember extends MicrosoftGraphConversationMember{
   email?: string
   tenantId?: string
   userId?: string
   user?: MicrosoftGraphUser
   "@odata.type"?: string
}
export interface MicrosoftGraphAppCatalogs extends MicrosoftGraphEntity{
   teamsApps?: MicrosoftGraphTeamsApp[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamsApp extends MicrosoftGraphEntity{
   displayName?: string
   distributionMethod?: MicrosoftGraphTeamsAppDistributionMethod
   externalId?: string
   appDefinitions?: MicrosoftGraphTeamsAppDefinition[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamInfo extends MicrosoftGraphEntity{
   displayName?: string
   tenantId?: string
   team?: MicrosoftGraphTeam
   "@odata.type"?: string
}
export interface MicrosoftGraphAssociatedTeamInfo extends MicrosoftGraphTeamInfo{
   "@odata.type"?: string
}
export interface MicrosoftGraphChatMessage extends MicrosoftGraphEntity{
   attachments?: MicrosoftGraphChatMessageAttachment[]
   body?: {content?: string,contentType?: MicrosoftGraphBodyType,"@odata.type"?: string,}
   channelIdentity?: MicrosoftGraphChannelIdentity
   chatId?: string
   createdDateTime?: string
   deletedDateTime?: string
   etag?: string
   eventDetail?: MicrosoftGraphEventMessageDetail
   from?: MicrosoftGraphChatMessageFromIdentitySet
   importance?: string
   lastEditedDateTime?: string
   lastModifiedDateTime?: string
   locale?: string
   mentions?: MicrosoftGraphChatMessageMention[]
   messageType?: string
   policyViolation?: MicrosoftGraphChatMessagePolicyViolation
   reactions?: MicrosoftGraphChatMessageReaction[]
   replyToId?: string
   subject?: string
   summary?: string
   webUrl?: string
   hostedContents?: MicrosoftGraphChatMessageHostedContent[]
   replies?: MicrosoftGraphChatMessage[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSharedWithChannelTeamInfo extends MicrosoftGraphTeamInfo{
   isHostTeam?: boolean
   allowedMembers?: MicrosoftGraphConversationMember[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamsTab extends MicrosoftGraphEntity{
   configuration?: MicrosoftGraphTeamsTabConfiguration
   displayName?: string
   webUrl?: string
   teamsApp?: MicrosoftGraphTeamsApp
   "@odata.type"?: string
}
export interface MicrosoftGraphChatMessageInfo extends MicrosoftGraphEntity{
   body?: MicrosoftGraphItemBody
   createdDateTime?: string
   eventDetail?: MicrosoftGraphEventMessageDetail
   from?: MicrosoftGraphChatMessageFromIdentitySet
   isDeleted?: boolean
   messageType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPinnedChatMessageInfo extends MicrosoftGraphEntity{
   message?: MicrosoftGraphChatMessage
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamworkHostedContent extends MicrosoftGraphEntity{
   contentBytes?: string
   contentType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphChatMessageHostedContent extends MicrosoftGraphTeamworkHostedContent{
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamsAppDefinition extends MicrosoftGraphEntity{
   createdBy?: MicrosoftGraphIdentitySet
   description?: string
   displayName?: string
   lastModifiedDateTime?: string
   publishingState?: MicrosoftGraphTeamsAppPublishingState
   shortDescription?: string
   teamsAppId?: string
   version?: string
   bot?: MicrosoftGraphTeamworkBot
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamworkBot extends MicrosoftGraphEntity{
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamwork extends MicrosoftGraphEntity{
   workforceIntegrations?: MicrosoftGraphWorkforceIntegration[]
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkforceIntegration extends MicrosoftGraphChangeTrackedEntity{
   apiVersion?: number
   displayName?: string
   encryption?: MicrosoftGraphWorkforceIntegrationEncryption
   isActive?: boolean
   supportedEntities?: MicrosoftGraphWorkforceIntegrationSupportedEntities
   url?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamworkTagMember extends MicrosoftGraphEntity{
   displayName?: string
   tenantId?: string
   userId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUserScopeTeamsAppInstallation extends MicrosoftGraphTeamsAppInstallation{
   chat?: MicrosoftGraphChat
   "@odata.type"?: string
}
export interface MicrosoftGraphScheduleChangeRequest extends MicrosoftGraphChangeTrackedEntity{
   assignedTo?: MicrosoftGraphScheduleChangeRequestActor
   managerActionDateTime?: string
   managerActionMessage?: string
   managerUserId?: string
   senderDateTime?: string
   senderMessage?: string
   senderUserId?: string
   state?: MicrosoftGraphScheduleChangeState
   "@odata.type"?: string
}
export interface MicrosoftGraphOfferShiftRequest extends MicrosoftGraphScheduleChangeRequest{
   recipientActionDateTime?: string
   recipientActionMessage?: string
   recipientUserId?: string
   senderShiftId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOpenShift extends MicrosoftGraphChangeTrackedEntity{
   draftOpenShift?: MicrosoftGraphOpenShiftItem
   schedulingGroupId?: string
   sharedOpenShift?: MicrosoftGraphOpenShiftItem
   "@odata.type"?: string
}
export interface MicrosoftGraphOpenShiftChangeRequest extends MicrosoftGraphScheduleChangeRequest{
   openShiftId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSchedulingGroup extends MicrosoftGraphChangeTrackedEntity{
   displayName?: string
   isActive?: boolean
   userIds?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphShift extends MicrosoftGraphChangeTrackedEntity{
   draftShift?: MicrosoftGraphShiftItem
   schedulingGroupId?: string
   sharedShift?: MicrosoftGraphShiftItem
   userId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSwapShiftsChangeRequest extends MicrosoftGraphOfferShiftRequest{
   recipientShiftId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTimeOffReason extends MicrosoftGraphChangeTrackedEntity{
   displayName?: string
   iconType?: MicrosoftGraphTimeOffReasonIconType
   isActive?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphTimeOffRequest extends MicrosoftGraphScheduleChangeRequest{
   endDateTime?: string
   startDateTime?: string
   timeOffReasonId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTimeOff extends MicrosoftGraphChangeTrackedEntity{
   draftTimeOff?: MicrosoftGraphTimeOffItem
   sharedTimeOff?: MicrosoftGraphTimeOffItem
   userId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEmailFileAssessmentRequest extends MicrosoftGraphThreatAssessmentRequest{
   contentData?: string
   destinationRoutingReason?: MicrosoftGraphMailDestinationRoutingReason
   recipientEmail?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphFileAssessmentRequest extends MicrosoftGraphThreatAssessmentRequest{
   contentData?: string
   fileName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMailAssessmentRequest extends MicrosoftGraphThreatAssessmentRequest{
   destinationRoutingReason?: MicrosoftGraphMailDestinationRoutingReason
   messageUri?: string
   recipientEmail?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphThreatAssessmentResult extends MicrosoftGraphEntity{
   createdDateTime?: string
   message?: string
   resultType?: MicrosoftGraphThreatAssessmentResultType
   "@odata.type"?: string
}
export interface MicrosoftGraphUrlAssessmentRequest extends MicrosoftGraphThreatAssessmentRequest{
   url?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAttachmentBase extends MicrosoftGraphEntity{
   contentType?: string
   lastModifiedDateTime?: string
   name?: string
   size?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphAttachmentSession extends MicrosoftGraphEntity{
   content?: string
   expirationDateTime?: string
   nextExpectedRanges?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphChecklistItem extends MicrosoftGraphEntity{
   checkedDateTime?: string
   createdDateTime?: string
   displayName?: string
   isChecked?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphLinkedResource extends MicrosoftGraphEntity{
   applicationName?: string
   displayName?: string
   externalId?: string
   webUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTaskFileAttachment extends MicrosoftGraphAttachmentBase{
   contentBytes?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTodoTaskList extends MicrosoftGraphEntity{
   displayName?: string
   isOwner?: boolean
   isShared?: boolean
   wellknownListName?: string
   extensions?: MicrosoftGraphExtension[]
   tasks?: MicrosoftGraphTodoTask[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTodoTask extends MicrosoftGraphEntity{
   body?: MicrosoftGraphItemBody
   bodyLastModifiedDateTime?: string
   categories?: string[]
   completedDateTime?: MicrosoftGraphDateTimeTimeZone
   createdDateTime?: string
   dueDateTime?: MicrosoftGraphDateTimeTimeZone
   hasAttachments?: boolean
   importance?: string
   isReminderOn?: boolean
   lastModifiedDateTime?: string
   recurrence?: MicrosoftGraphPatternedRecurrence
   reminderDateTime?: MicrosoftGraphDateTimeTimeZone
   startDateTime?: MicrosoftGraphDateTimeTimeZone
   status?: string
   title?: string
   attachments?: MicrosoftGraphAttachmentBase[]
   attachmentSessions?: MicrosoftGraphAttachmentSession[]
   checklistItems?: MicrosoftGraphChecklistItem[]
   extensions?: MicrosoftGraphExtension[]
   linkedResources?: MicrosoftGraphLinkedResource[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAppIdentity{
   appId?: string
   displayName?: string
   servicePrincipalId?: string
   servicePrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAppliedConditionalAccessPolicy{
   displayName?: string
   enforcedGrantControls?: string[]
   enforcedSessionControls?: string[]
   id?: string
   result?: MicrosoftGraphAppliedConditionalAccessPolicyResult
   "@odata.type"?: string
}
export interface MicrosoftGraphAuditActivityInitiator{
   app?: MicrosoftGraphAppIdentity
   user?: MicrosoftGraphUserIdentity
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentity{
   displayName?: string
   id?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUserIdentity extends MicrosoftGraphIdentity{
   ipAddress?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDetailsInfo{
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceDetail{
   browser?: string
   deviceId?: string
   displayName?: string
   isCompliant?: boolean
   isManaged?: boolean
   operatingSystem?: string
   trustType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphGeoCoordinates{
   altitude?: unknown
   latitude?: unknown
   longitude?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphInitiator extends MicrosoftGraphIdentity{
   initiatorType?: MicrosoftGraphInitiatorType
   "@odata.type"?: string
}
export interface MicrosoftGraphKeyValue{
   key?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphModifiedProperty{
   displayName?: string
   newValue?: string
   oldValue?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphProvisionedIdentity extends MicrosoftGraphIdentity{
   details?: MicrosoftGraphDetailsInfo
   identityType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphProvisioningErrorInfo{
   additionalDetails?: string
   errorCategory?: MicrosoftGraphProvisioningStatusErrorCategory
   errorCode?: string
   reason?: string
   recommendedAction?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphProvisioningServicePrincipal extends MicrosoftGraphIdentity{
   "@odata.type"?: string
}
export interface MicrosoftGraphProvisioningStatusInfo{
   errorInformation?: MicrosoftGraphProvisioningErrorInfo
   status?: MicrosoftGraphProvisioningResult
   "@odata.type"?: string
}
export interface MicrosoftGraphProvisioningStep{
   description?: string
   details?: MicrosoftGraphDetailsInfo
   name?: string
   provisioningStepType?: MicrosoftGraphProvisioningStepType
   status?: MicrosoftGraphProvisioningResult
   "@odata.type"?: string
}
export interface MicrosoftGraphProvisioningSystem extends MicrosoftGraphIdentity{
   details?: MicrosoftGraphDetailsInfo
   "@odata.type"?: string
}
export interface MicrosoftGraphSignInLocation{
   city?: string
   countryOrRegion?: string
   geoCoordinates?: MicrosoftGraphGeoCoordinates
   state?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSignInStatus{
   additionalDetails?: string
   errorCode?: number
   failureReason?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTargetResource{
   displayName?: string
   groupType?: MicrosoftGraphGroupType
   id?: string
   modifiedProperties?: MicrosoftGraphModifiedProperty[]
   type?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEmailAddress{
   address?: string
   name?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphInvitedUserMessageInfo{
   ccRecipients?: MicrosoftGraphRecipient[]
   customizedMessageBody?: string
   messageLanguage?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRecipient{
   emailAddress?: MicrosoftGraphEmailAddress
   "@odata.type"?: string
}
export interface MicrosoftGraphAssignedLicense{
   disabledPlans?: string[]
   skuId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAssignedPlan{
   assignedDateTime?: string
   capabilityStatus?: string
   service?: string
   servicePlanId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthorizationInfo{
   certificateUserIds?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphEmployeeOrgData{
   costCenter?: string
   division?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphObjectIdentity{
   issuer?: string
   issuerAssignedId?: string
   signInType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphLicenseAssignmentState{
   assignedByGroup?: string
   disabledPlans?: string[]
   error?: string
   lastUpdatedDateTime?: string
   skuId?: string
   state?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOnPremisesExtensionAttributes{
   extensionAttribute1?: string
   extensionAttribute10?: string
   extensionAttribute11?: string
   extensionAttribute12?: string
   extensionAttribute13?: string
   extensionAttribute14?: string
   extensionAttribute15?: string
   extensionAttribute2?: string
   extensionAttribute3?: string
   extensionAttribute4?: string
   extensionAttribute5?: string
   extensionAttribute6?: string
   extensionAttribute7?: string
   extensionAttribute8?: string
   extensionAttribute9?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOnPremisesProvisioningError{
   category?: string
   occurredDateTime?: string
   propertyCausingError?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPasswordProfile{
   forceChangePasswordNextSignIn?: boolean
   forceChangePasswordNextSignInWithMfa?: boolean
   password?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphProvisionedPlan{
   capabilityStatus?: string
   provisioningStatus?: string
   service?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMailboxSettings{
   archiveFolder?: string
   automaticRepliesSetting?: MicrosoftGraphAutomaticRepliesSetting
   dateFormat?: string
   delegateMeetingMessageDeliveryOptions?: MicrosoftGraphDelegateMeetingMessageDeliveryOptions
   language?: MicrosoftGraphLocaleInfo
   timeFormat?: string
   timeZone?: string
   userPurpose?: MicrosoftGraphUserPurpose
   workingHours?: MicrosoftGraphWorkingHours
   "@odata.type"?: string
}
export interface MicrosoftGraphApplicationServicePrincipal{
   application?: MicrosoftGraphApplication
   servicePrincipal?: MicrosoftGraphServicePrincipal
   "@odata.type"?: string
}
export interface MicrosoftGraphAddIn{
   id?: string
   properties?: {key?: string,value?: string,"@odata.type"?: string,}
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphApiApplication{
   acceptMappedClaims?: boolean
   knownClientApplications?: string[]
   oauth2PermissionScopes?: {adminConsentDescription?: string,adminConsentDisplayName?: string,id?: string,isEnabled?: boolean,origin?: string,type?: string,userConsentDescription?: string,userConsentDisplayName?: string,value?: string,"@odata.type"?: string,}
   preAuthorizedApplications?: MicrosoftGraphPreAuthorizedApplication[]
   requestedAccessTokenVersion?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphAppRole{
   allowedMemberTypes?: string[]
   description?: string
   displayName?: string
   id?: string
   isEnabled?: boolean
   origin?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCertification{
   certificationDetailsUrl?: string
   certificationExpirationDateTime?: string
   isCertifiedByMicrosoft?: boolean
   isPublisherAttested?: boolean
   lastCertificationDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphInformationalUrl{
   logoUrl?: string
   marketingUrl?: string
   privacyStatementUrl?: string
   supportUrl?: string
   termsOfServiceUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphKeyCredential{
   customKeyIdentifier?: string
   displayName?: string
   endDateTime?: string
   key?: string
   keyId?: string
   startDateTime?: string
   type?: string
   usage?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOptionalClaims{
   accessToken?: MicrosoftGraphOptionalClaim[]
   idToken?: MicrosoftGraphOptionalClaim[]
   saml2Token?: MicrosoftGraphOptionalClaim[]
   "@odata.type"?: string
}
export interface MicrosoftGraphParentalControlSettings{
   countriesBlockedForMinors?: string[]
   legalAgeGroupRule?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPasswordCredential{
   customKeyIdentifier?: string
   displayName?: string
   endDateTime?: string
   hint?: string
   keyId?: string
   secretText?: string
   startDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPublicClientApplication{
   redirectUris?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphRequiredResourceAccess{
   resourceAccess?: {id?: string,type?: string,"@odata.type"?: string,}
   resourceAppId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSpaApplication{
   redirectUris?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphVerifiedPublisher{
   addedDateTime?: string
   displayName?: string
   verifiedPublisherId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWebApplication{
   homePageUrl?: string
   implicitGrantSettings?: MicrosoftGraphImplicitGrantSettings
   logoutUrl?: string
   redirectUris?: string[]
   redirectUriSettings?: {index?: number,uri?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphPermissionScope{
   adminConsentDescription?: string
   adminConsentDisplayName?: string
   id?: string
   isEnabled?: boolean
   origin?: string
   type?: string
   userConsentDescription?: string
   userConsentDisplayName?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphResourceSpecificPermission{
   description?: string
   displayName?: string
   id?: string
   isEnabled?: boolean
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSamlSingleSignOnSettings{
   relayState?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthenticationMethodFeatureConfiguration{
   excludeTarget?: MicrosoftGraphFeatureTarget
   includeTarget?: MicrosoftGraphFeatureTarget
   state?: MicrosoftGraphAdvancedConfigState
   "@odata.type"?: string
}
export interface MicrosoftGraphFeatureTarget{
   id?: string
   targetType?: MicrosoftGraphFeatureTargetType
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthenticationMethodsRegistrationCampaign{
   excludeTargets?: {id?: string,targetType?: string,"@odata.type"?: string,}
   includeTargets?: {id?: string,targetedAuthenticationMethod?: string,targetType?: string,"@odata.type"?: string,}
   snoozeDurationInDays?: number
   state?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphExcludeTarget{
   id?: string
   targetType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAuthenticationMethodsRegistrationCampaignIncludeTarget{
   id?: string
   targetedAuthenticationMethod?: string
   targetType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphFido2KeyRestrictions{
   aaGuids?: string[]
   enforcementType?: MicrosoftGraphFido2RestrictionEnforcementType
   isEnforced?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphMicrosoftAuthenticatorFeatureSettings{
   displayAppInformationRequiredState?: MicrosoftGraphAuthenticationMethodFeatureConfiguration
   displayLocationInformationRequiredState?: MicrosoftGraphAuthenticationMethodFeatureConfiguration
   "@odata.type"?: string
}
export interface MicrosoftGraphRegistrationEnforcement{
   authenticationMethodsRegistrationCampaign?: MicrosoftGraphAuthenticationMethodsRegistrationCampaign
   "@odata.type"?: string
}
export interface MicrosoftGraphX509CertificateAuthenticationModeConfiguration{
   rules?: MicrosoftGraphX509CertificateRule[]
   x509CertificateAuthenticationDefaultMode?: MicrosoftGraphX509CertificateAuthenticationMode
   "@odata.type"?: string
}
export interface MicrosoftGraphX509CertificateRule{
   identifier?: string
   x509CertificateAuthenticationMode?: MicrosoftGraphX509CertificateAuthenticationMode
   x509CertificateRuleType?: MicrosoftGraphX509CertificateRuleType
   "@odata.type"?: string
}
export interface MicrosoftGraphX509CertificateUserBinding{
   priority?: number
   userProperty?: string
   x509CertificateField?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAvailabilityItem{
   endDateTime?: {dateTime?: string,timeZone?: string,"@odata.type"?: string,}
   serviceId?: string
   startDateTime?: {dateTime?: string,timeZone?: string,"@odata.type"?: string,}
   status?: MicrosoftGraphBookingsAvailabilityStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphDateTimeTimeZone{
   dateTime?: string
   timeZone?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingCustomerInformationBase{
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingCustomerInformation extends MicrosoftGraphBookingCustomerInformationBase{
   customerId?: string
   customQuestionAnswers?: MicrosoftGraphBookingQuestionAnswer[]
   emailAddress?: string
   location?: MicrosoftGraphLocation
   name?: string
   notes?: string
   phone?: string
   timeZone?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingQuestionAnswer{
   answer?: string
   answerInputType?: MicrosoftGraphAnswerInputType
   answerOptions?: string[]
   isRequired?: boolean
   question?: string
   questionId?: string
   selectedOptions?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphLocation{
   address?: MicrosoftGraphPhysicalAddress
   coordinates?: MicrosoftGraphOutlookGeoCoordinates
   displayName?: string
   locationEmailAddress?: string
   locationType?: MicrosoftGraphLocationType
   locationUri?: string
   uniqueId?: string
   uniqueIdType?: MicrosoftGraphLocationUniqueIdType
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingQuestionAssignment{
   isRequired?: boolean
   questionId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingReminder{
   message?: string
   offset?: string
   recipients?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingSchedulingPolicy{
   allowStaffSelection?: boolean
   maximumAdvance?: string
   minimumLeadTime?: string
   sendConfirmationsToOwner?: boolean
   timeSlotInterval?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingWorkHours{
   day?: string
   timeSlots?: MicrosoftGraphBookingWorkTimeSlot[]
   "@odata.type"?: string
}
export interface MicrosoftGraphBookingWorkTimeSlot{
   endTime?: string
   startTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPhysicalAddress{
   city?: string
   countryOrRegion?: string
   postalCode?: string
   state?: string
   street?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOutlookGeoCoordinates{
   accuracy?: unknown
   altitude?: unknown
   altitudeAccuracy?: unknown
   latitude?: unknown
   longitude?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphPhone{
   language?: string
   number?: string
   region?: string
   type?: MicrosoftGraphPhoneType
   "@odata.type"?: string
}
export interface MicrosoftGraphStaffAvailabilityItem{
   availabilityItems?: MicrosoftGraphAvailabilityItem[]
   staffId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTimeSlot{
   end?: {dateTime?: string,timeZone?: string,"@odata.type"?: string,}
   start?: {dateTime?: string,timeZone?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphDataSubject{
   email?: string
   firstName?: string
   lastName?: string
   residency?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentitySet{
   application?: MicrosoftGraphIdentity
   device?: MicrosoftGraphIdentity
   user?: MicrosoftGraphIdentity
   "@odata.type"?: string
}
export interface MicrosoftGraphItemBody{
   content?: string
   contentType?: MicrosoftGraphBodyType
   "@odata.type"?: string
}
export interface MicrosoftGraphKeyValuePair{
   name?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPublicError{
   code?: string
   details?: MicrosoftGraphPublicErrorDetail[]
   innerError?: MicrosoftGraphPublicInnerError
   message?: string
   target?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPublicErrorDetail{
   code?: string
   message?: string
   target?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPublicInnerError{
   code?: string
   details?: MicrosoftGraphPublicErrorDetail[]
   message?: string
   target?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSubjectRightsRequestDetail{
   excludedItemCount?: number
   insightCounts?: MicrosoftGraphKeyValuePair[]
   itemCount?: number
   itemNeedReview?: number
   productItemCounts?: MicrosoftGraphKeyValuePair[]
   signedOffItemCount?: number
   totalItemSize?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphSubjectRightsRequestHistory{
   changedBy?: MicrosoftGraphIdentitySet
   eventDateTime?: string
   stage?: MicrosoftGraphSubjectRightsRequestStage
   stageStatus?: MicrosoftGraphSubjectRightsRequestStageStatus
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSubjectRightsRequestStageDetail{
   error?: MicrosoftGraphPublicError
   stage?: MicrosoftGraphSubjectRightsRequestStage
   status?: MicrosoftGraphSubjectRightsRequestStageStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamFunSettings{
   allowCustomMemes?: boolean
   allowGiphy?: boolean
   allowStickersAndMemes?: boolean
   giphyContentRating?: MicrosoftGraphGiphyRatingType
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamGuestSettings{
   allowCreateUpdateChannels?: boolean
   allowDeleteChannels?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamMemberSettings{
   allowAddRemoveApps?: boolean
   allowCreatePrivateChannels?: boolean
   allowCreateUpdateChannels?: boolean
   allowCreateUpdateRemoveConnectors?: boolean
   allowCreateUpdateRemoveTabs?: boolean
   allowDeleteChannels?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamMessagingSettings{
   allowChannelMentions?: boolean
   allowOwnerDeleteMessages?: boolean
   allowTeamMentions?: boolean
   allowUserDeleteMessages?: boolean
   allowUserEditMessages?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamSummary{
   guestsCount?: number
   membersCount?: number
   ownersCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphResultInfo{
   code?: number
   message?: string
   subcode?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphAssignedLabel{
   displayName?: string
   labelId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphLicenseProcessingState{
   state?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRoot{
   "@odata.type"?: string
}
export interface MicrosoftGraphSharepointIds{
   listId?: string
   listItemId?: string
   listItemUniqueId?: string
   siteId?: string
   siteUrl?: string
   tenantId?: string
   webId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSiteCollection{
   dataLocationCode?: string
   hostname?: string
   root?: MicrosoftGraphRoot
   "@odata.type"?: string
}
export interface MicrosoftGraphApiAuthenticationConfigurationBase{
   "@odata.type"?: string
}
export interface MicrosoftGraphAssignmentOrder{
   order?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphBasicAuthentication extends MicrosoftGraphApiAuthenticationConfigurationBase{
   password?: string
   username?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphClientCertificateAuthentication extends MicrosoftGraphApiAuthenticationConfigurationBase{
   certificateList?: MicrosoftGraphPkcs12CertificateInformation[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPkcs12CertificateInformation{
   isActive?: boolean
   notAfter?: number
   notBefore?: number
   thumbprint?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPkcs12Certificate extends MicrosoftGraphApiAuthenticationConfigurationBase{
   password?: string
   pkcs12Value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSelfServiceSignUpAuthenticationFlowConfiguration{
   isEnabled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphUserAttributeValuesItem{
   isDefault?: boolean
   name?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUserFlowApiConnectorConfiguration{
   postAttributeCollection?: MicrosoftGraphIdentityApiConnector
   postFederationSignup?: MicrosoftGraphIdentityApiConnector
   "@odata.type"?: string
}
export interface MicrosoftGraphAlternativeSecurityId{
   identityProvider?: string
   key?: string
   type?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphPreAuthorizedApplication{
   appId?: string
   delegatedPermissionIds?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphCertificateAuthority{
   certificate?: string
   certificateRevocationListUrl?: string
   deltaCertificateRevocationListUrl?: string
   isRootAuthority?: boolean
   issuer?: string
   issuerSki?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphComplexExtensionValue{
   "@odata.type"?: string
}
export interface MicrosoftGraphCrossTenantAccessPolicyB2BSetting{
   applications?: MicrosoftGraphCrossTenantAccessPolicyTargetConfiguration
   usersAndGroups?: MicrosoftGraphCrossTenantAccessPolicyTargetConfiguration
   "@odata.type"?: string
}
export interface MicrosoftGraphCrossTenantAccessPolicyTargetConfiguration{
   accessType?: MicrosoftGraphCrossTenantAccessPolicyTargetConfigurationAccessType
   targets?: MicrosoftGraphCrossTenantAccessPolicyTarget[]
   "@odata.type"?: string
}
export interface MicrosoftGraphCrossTenantAccessPolicyInboundTrust{
   isCompliantDeviceAccepted?: boolean
   isHybridAzureADJoinedDeviceAccepted?: boolean
   isMfaAccepted?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphCrossTenantAccessPolicyTarget{
   target?: string
   targetType?: MicrosoftGraphCrossTenantAccessPolicyTargetType
   "@odata.type"?: string
}
export interface MicrosoftGraphDefaultUserRolePermissions{
   allowedToCreateApps?: boolean
   allowedToCreateSecurityGroups?: boolean
   allowedToReadOtherUsers?: boolean
   permissionGrantPoliciesAssigned?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphDomainState{
   lastActionDateTime?: string
   operation?: string
   status?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphImplicitGrantSettings{
   enableAccessTokenIssuance?: boolean
   enableIdTokenIssuance?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphInstanceResourceAccess{
   permissions?: {type?: string,value?: string,"@odata.type"?: string,}
   resourceAppId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphResourcePermission{
   type?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphLicenseUnitsDetail{
   enabled?: number
   suspended?: number
   warning?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphOptionalClaim{
   additionalProperties?: string[]
   essential?: boolean
   name?: string
   source?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPhysicalOfficeAddress{
   city?: string
   countryOrRegion?: string
   officeLocation?: string
   postalCode?: string
   state?: string
   street?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPrivacyProfile{
   contactEmail?: string
   statementUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRedirectUriSettings{
   index?: number
   uri?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphResourceAccess{
   id?: string
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSelfSignedCertificate{
   customKeyIdentifier?: string
   displayName?: string
   endDateTime?: string
   key?: string
   keyId?: string
   startDateTime?: string
   thumbprint?: string
   type?: string
   usage?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphServicePlanInfo{
   appliesTo?: string
   provisioningStatus?: string
   servicePlanId?: string
   servicePlanName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSettingTemplateValue{
   defaultValue?: string
   description?: string
   name?: string
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSettingValue{
   name?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSigningCertificateUpdateStatus{
   certificateUpdateResult?: string
   lastRunDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRolePermission{
   allowedResourceActions?: string[]
   condition?: string
   excludedResourceActions?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphVerifiedDomain{
   capabilities?: string
   isDefault?: boolean
   isInitial?: boolean
   name?: string
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationAssignmentRecipient{
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationAssignmentClassRecipient extends MicrosoftGraphEducationAssignmentRecipient{
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationAssignmentGrade{
   gradedBy?: MicrosoftGraphIdentitySet
   gradedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationAssignmentGradeType{
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationAssignmentGroupRecipient extends MicrosoftGraphEducationAssignmentRecipient{
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationAssignmentIndividualRecipient extends MicrosoftGraphEducationAssignmentRecipient{
   recipients?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationAssignmentPointsGrade extends MicrosoftGraphEducationAssignmentGrade{
   points?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationAssignmentPointsGradeType extends MicrosoftGraphEducationAssignmentGradeType{
   maxPoints?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationResource{
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   displayName?: string
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationExcelResource extends MicrosoftGraphEducationResource{
   fileUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationExternalResource extends MicrosoftGraphEducationResource{
   webUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationFeedback{
   feedbackBy?: MicrosoftGraphIdentitySet
   feedbackDateTime?: string
   text?: MicrosoftGraphEducationItemBody
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationItemBody{
   content?: string
   contentType?: MicrosoftGraphBodyType
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationFileResource extends MicrosoftGraphEducationResource{
   fileUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationLinkResource extends MicrosoftGraphEducationResource{
   link?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationMediaResource extends MicrosoftGraphEducationResource{
   fileUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationPowerPointResource extends MicrosoftGraphEducationResource{
   fileUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationSubmissionRecipient{
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationSubmissionIndividualRecipient extends MicrosoftGraphEducationSubmissionRecipient{
   userId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationTeamsAppResource extends MicrosoftGraphEducationResource{
   appIconWebUrl?: string
   appId?: string
   teamsEmbeddedContentUrl?: string
   webUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationWordResource extends MicrosoftGraphEducationResource{
   fileUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRubricCriterion{
   description?: MicrosoftGraphEducationItemBody
   "@odata.type"?: string
}
export interface MicrosoftGraphRubricLevel{
   description?: MicrosoftGraphEducationItemBody
   displayName?: string
   grading?: MicrosoftGraphEducationAssignmentGradeType
   levelId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRubricQuality{
   criteria?: MicrosoftGraphRubricCriterion[]
   description?: MicrosoftGraphEducationItemBody
   displayName?: string
   qualityId?: string
   weight?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphRubricQualityFeedbackModel{
   feedback?: MicrosoftGraphEducationItemBody
   qualityId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRubricQualitySelectedColumnModel{
   columnId?: string
   qualityId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationCourse{
   courseNumber?: string
   description?: string
   displayName?: string
   externalId?: string
   subject?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationTerm{
   displayName?: string
   endDate?: string
   externalId?: string
   startDate?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRelatedContact{
   accessConsent?: boolean
   displayName?: string
   emailAddress?: string
   mobilePhone?: string
   relationship?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationOnPremisesInfo{
   immutableId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationStudent{
   birthDate?: string
   externalId?: string
   gender?: MicrosoftGraphEducationGender
   grade?: string
   graduationYear?: string
   studentNumber?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEducationTeacher{
   externalId?: string
   teacherNumber?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphJson{
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookFilterCriteria{
   color?: string
   criterion1?: string
   criterion2?: string
   dynamicCriteria?: string
   filterOn?: string
   icon?: MicrosoftGraphWorkbookIcon
   operator?: string
   values?: MicrosoftGraphJson
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookIcon{
   index?: number
   set?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookFilterDatetime{
   date?: string
   specificity?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookOperationError{
   code?: string
   innerError?: MicrosoftGraphWorkbookOperationError
   message?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookRangeReference{
   address?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookSessionInfo{
   id?: string
   persistChanges?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookSortField{
   ascending?: boolean
   color?: string
   dataOption?: string
   icon?: MicrosoftGraphWorkbookIcon
   key?: number
   sortOn?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkbookWorksheetProtectionOptions{
   allowAutoFilter?: boolean
   allowDeleteColumns?: boolean
   allowDeleteRows?: boolean
   allowFormatCells?: boolean
   allowFormatColumns?: boolean
   allowFormatRows?: boolean
   allowInsertColumns?: boolean
   allowInsertHyperlinks?: boolean
   allowInsertRows?: boolean
   allowPivotTables?: boolean
   allowSort?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphQuota{
   deleted?: number
   remaining?: number
   state?: string
   storagePlanInformation?: MicrosoftGraphStoragePlanInformation
   total?: number
   used?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphSystemFacet{
   "@odata.type"?: string
}
export interface MicrosoftGraphAudio{
   album?: string
   albumArtist?: string
   artist?: string
   bitrate?: number
   composers?: string
   copyright?: string
   disc?: number
   discCount?: number
   duration?: number
   genre?: string
   hasDrm?: boolean
   isVariableBitrate?: boolean
   title?: string
   track?: number
   trackCount?: number
   year?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphBundle{
   album?: MicrosoftGraphAlbum
   childCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDeleted{
   state?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphFile{
   hashes?: MicrosoftGraphHashes
   mimeType?: string
   processingMetadata?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphFileSystemInfo{
   createdDateTime?: string
   lastAccessedDateTime?: string
   lastModifiedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphFolder{
   childCount?: number
   view?: MicrosoftGraphFolderView
   "@odata.type"?: string
}
export interface MicrosoftGraphImage{
   height?: number
   width?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphMalware{
   description?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPackage{
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPendingOperations{
   pendingContentUpdate?: MicrosoftGraphPendingContentUpdate
   "@odata.type"?: string
}
export interface MicrosoftGraphPhoto{
   cameraMake?: string
   cameraModel?: string
   exposureDenominator?: unknown
   exposureNumerator?: unknown
   fNumber?: unknown
   focalLength?: unknown
   iso?: number
   orientation?: number
   takenDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPublicationFacet{
   level?: string
   versionId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRemoteItem{
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   file?: MicrosoftGraphFile
   fileSystemInfo?: MicrosoftGraphFileSystemInfo
   folder?: MicrosoftGraphFolder
   id?: string
   image?: MicrosoftGraphImage
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   name?: string
   package?: MicrosoftGraphPackage
   parentReference?: MicrosoftGraphItemReference
   shared?: MicrosoftGraphShared
   sharepointIds?: MicrosoftGraphSharepointIds
   size?: number
   specialFolder?: MicrosoftGraphSpecialFolder
   video?: MicrosoftGraphVideo
   webDavUrl?: string
   webUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSearchResult{
   onClickTelemetryUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphShared{
   owner?: MicrosoftGraphIdentitySet
   scope?: string
   sharedBy?: MicrosoftGraphIdentitySet
   sharedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSpecialFolder{
   name?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphVideo{
   audioBitsPerSample?: number
   audioChannels?: number
   audioFormat?: string
   audioSamplesPerSecond?: number
   bitrate?: number
   duration?: number
   fourCC?: string
   frameRate?: unknown
   height?: number
   width?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphListInfo{
   contentTypesEnabled?: boolean
   hidden?: boolean
   template?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAttendeeAvailability{
   attendee?: MicrosoftGraphAttendeeBase
   availability?: MicrosoftGraphFreeBusyStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphAttendeeBase extends MicrosoftGraphRecipient{
   type?: MicrosoftGraphAttendeeType
   "@odata.type"?: string
}
export interface MicrosoftGraphLocationConstraint{
   isRequired?: boolean
   locations?: MicrosoftGraphLocationConstraintItem[]
   suggestLocation?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphLocationConstraintItem extends MicrosoftGraphLocation{
   resolveAvailability?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphMeetingTimeSuggestion{
   attendeeAvailability?: MicrosoftGraphAttendeeAvailability[]
   confidence?: unknown
   locations?: MicrosoftGraphLocation[]
   meetingTimeSlot?: MicrosoftGraphTimeSlot
   order?: number
   organizerAvailability?: MicrosoftGraphFreeBusyStatus
   suggestionReason?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMeetingTimeSuggestionsResult{
   emptySuggestionsReason?: string
   meetingTimeSuggestions?: MicrosoftGraphMeetingTimeSuggestion[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTimeConstraint{
   activityDomain?: MicrosoftGraphActivityDomain
   timeSlots?: MicrosoftGraphTimeSlot[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAttachmentItem{
   attachmentType?: MicrosoftGraphAttachmentType
   contentId?: string
   contentType?: string
   isInline?: boolean
   name?: string
   size?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphAttendee extends MicrosoftGraphAttendeeBase{
   proposedNewTime?: MicrosoftGraphTimeSlot
   status?: MicrosoftGraphResponseStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphResponseStatus{
   response?: MicrosoftGraphResponseType
   time?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAutomaticRepliesMailTips{
   message?: string
   messageLanguage?: MicrosoftGraphLocaleInfo
   scheduledEndTime?: MicrosoftGraphDateTimeTimeZone
   scheduledStartTime?: MicrosoftGraphDateTimeTimeZone
   "@odata.type"?: string
}
export interface MicrosoftGraphLocaleInfo{
   displayName?: string
   locale?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAutomaticRepliesSetting{
   externalAudience?: MicrosoftGraphExternalAudienceScope
   externalReplyMessage?: string
   internalReplyMessage?: string
   scheduledEndDateTime?: MicrosoftGraphDateTimeTimeZone
   scheduledStartDateTime?: MicrosoftGraphDateTimeTimeZone
   status?: MicrosoftGraphAutomaticRepliesStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphCalendarSharingMessageAction{
   action?: MicrosoftGraphCalendarSharingAction
   actionType?: MicrosoftGraphCalendarSharingActionType
   importance?: MicrosoftGraphCalendarSharingActionImportance
   "@odata.type"?: string
}
export interface MicrosoftGraphConvertIdResult{
   errorDetails?: MicrosoftGraphGenericError
   sourceId?: string
   targetId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphGenericError{
   code?: string
   message?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTimeZoneBase{
   name?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCustomTimeZone extends MicrosoftGraphTimeZoneBase{
   bias?: number
   daylightOffset?: MicrosoftGraphDaylightTimeZoneOffset
   standardOffset?: MicrosoftGraphStandardTimeZoneOffset
   "@odata.type"?: string
}
export interface MicrosoftGraphStandardTimeZoneOffset{
   dayOccurrence?: number
   dayOfWeek?: MicrosoftGraphDayOfWeek
   month?: number
   time?: string
   year?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDaylightTimeZoneOffset extends MicrosoftGraphStandardTimeZoneOffset{
   daylightBias?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphFollowupFlag{
   completedDateTime?: MicrosoftGraphDateTimeTimeZone
   dueDateTime?: MicrosoftGraphDateTimeTimeZone
   flagStatus?: MicrosoftGraphFollowupFlagStatus
   startDateTime?: MicrosoftGraphDateTimeTimeZone
   "@odata.type"?: string
}
export interface MicrosoftGraphFreeBusyError{
   message?: string
   responseCode?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphInternetMessageHeader{
   name?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkingHours{
   daysOfWeek?: MicrosoftGraphDayOfWeek[]
   endTime?: string
   startTime?: string
   timeZone?: MicrosoftGraphTimeZoneBase
   "@odata.type"?: string
}
export interface MicrosoftGraphMailTips{
   automaticReplies?: MicrosoftGraphAutomaticRepliesMailTips
   customMailTip?: string
   deliveryRestricted?: boolean
   emailAddress?: MicrosoftGraphEmailAddress
   error?: MicrosoftGraphMailTipsError
   externalMemberCount?: number
   isModerated?: boolean
   mailboxFull?: boolean
   maxMessageSize?: number
   recipientScope?: MicrosoftGraphRecipientScopeType
   recipientSuggestions?: MicrosoftGraphRecipient[]
   totalMemberCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphMailTipsError{
   code?: string
   message?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMessageRuleActions{
   assignCategories?: string[]
   copyToFolder?: string
   delete?: boolean
   forwardAsAttachmentTo?: MicrosoftGraphRecipient[]
   forwardTo?: MicrosoftGraphRecipient[]
   markAsRead?: boolean
   markImportance?: MicrosoftGraphImportance
   moveToFolder?: string
   permanentDelete?: boolean
   redirectTo?: MicrosoftGraphRecipient[]
   stopProcessingRules?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphMessageRulePredicates{
   bodyContains?: string[]
   bodyOrSubjectContains?: string[]
   categories?: string[]
   fromAddresses?: MicrosoftGraphRecipient[]
   hasAttachments?: boolean
   headerContains?: string[]
   importance?: MicrosoftGraphImportance
   isApprovalRequest?: boolean
   isAutomaticForward?: boolean
   isAutomaticReply?: boolean
   isEncrypted?: boolean
   isMeetingRequest?: boolean
   isMeetingResponse?: boolean
   isNonDeliveryReport?: boolean
   isPermissionControlled?: boolean
   isReadReceipt?: boolean
   isSigned?: boolean
   isVoicemail?: boolean
   messageActionFlag?: MicrosoftGraphMessageActionFlag
   notSentToMe?: boolean
   recipientContains?: string[]
   senderContains?: string[]
   sensitivity?: MicrosoftGraphSensitivity
   sentCcMe?: boolean
   sentOnlyToMe?: boolean
   sentToAddresses?: MicrosoftGraphRecipient[]
   sentToMe?: boolean
   sentToOrCcMe?: boolean
   subjectContains?: string[]
   withinSizeRange?: MicrosoftGraphSizeRange
   "@odata.type"?: string
}
export interface MicrosoftGraphSizeRange{
   maximumSize?: number
   minimumSize?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphOnlineMeetingInfo{
   conferenceId?: string
   joinUrl?: string
   phones?: MicrosoftGraphPhone[]
   quickDial?: string
   tollFreeNumbers?: string[]
   tollNumber?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPatternedRecurrence{
   pattern?: MicrosoftGraphRecurrencePattern
   range?: MicrosoftGraphRecurrenceRange
   "@odata.type"?: string
}
export interface MicrosoftGraphRecurrencePattern{
   dayOfMonth?: number
   daysOfWeek?: MicrosoftGraphDayOfWeek[]
   firstDayOfWeek?: MicrosoftGraphDayOfWeek
   index?: MicrosoftGraphWeekIndex
   interval?: number
   month?: number
   type?: MicrosoftGraphRecurrencePatternType
   "@odata.type"?: string
}
export interface MicrosoftGraphRecurrenceRange{
   endDate?: string
   numberOfOccurrences?: number
   recurrenceTimeZone?: string
   startDate?: string
   type?: MicrosoftGraphRecurrenceRangeType
   "@odata.type"?: string
}
export interface MicrosoftGraphPersonType{
   class?: string
   subclass?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphReminder{
   changeKey?: string
   eventEndTime?: MicrosoftGraphDateTimeTimeZone
   eventId?: string
   eventLocation?: MicrosoftGraphLocation
   eventStartTime?: MicrosoftGraphDateTimeTimeZone
   eventSubject?: string
   eventWebLink?: string
   reminderFireTime?: MicrosoftGraphDateTimeTimeZone
   "@odata.type"?: string
}
export interface MicrosoftGraphScheduleInformation{
   availabilityView?: string
   error?: MicrosoftGraphFreeBusyError
   scheduleId?: string
   scheduleItems?: MicrosoftGraphScheduleItem[]
   workingHours?: MicrosoftGraphWorkingHours
   "@odata.type"?: string
}
export interface MicrosoftGraphScheduleItem{
   end?: MicrosoftGraphDateTimeTimeZone
   isPrivate?: boolean
   location?: string
   start?: MicrosoftGraphDateTimeTimeZone
   status?: MicrosoftGraphFreeBusyStatus
   subject?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphScoredEmailAddress{
   address?: string
   itemId?: string
   relevanceScore?: unknown
   selectionLikelihood?: MicrosoftGraphSelectionLikelihoodInfo
   "@odata.type"?: string
}
export interface MicrosoftGraphTimeZoneInformation{
   alias?: string
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUploadSession{
   expirationDateTime?: string
   nextExpectedRanges?: string[]
   uploadUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWebsite{
   address?: string
   displayName?: string
   type?: MicrosoftGraphWebsiteType
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessAction{
   "@odata.type"?: string
}
export interface MicrosoftGraphAlbum{
   coverImageItemId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphBooleanColumn{
   "@odata.type"?: string
}
export interface MicrosoftGraphCalculatedColumn{
   format?: string
   formula?: string
   outputType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphChoiceColumn{
   allowTextEntry?: boolean
   choices?: string[]
   displayAs?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphColumnValidation{
   defaultLanguage?: string
   descriptions?: MicrosoftGraphDisplayNameLocalization[]
   formula?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDisplayNameLocalization{
   displayName?: string
   languageTag?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphContentApprovalStatusColumn{
   "@odata.type"?: string
}
export interface MicrosoftGraphContentTypeInfo{
   id?: string
   name?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphContentTypeOrder{
   default?: boolean
   position?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphCurrencyColumn{
   locale?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDateTimeColumn{
   displayAs?: string
   format?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDefaultColumnValue{
   formula?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDocumentSet{
   allowedContentTypes?: MicrosoftGraphContentTypeInfo[]
   defaultContents?: MicrosoftGraphDocumentSetContent[]
   propagateWelcomePageChanges?: boolean
   shouldPrefixNameToFile?: boolean
   welcomePageUrl?: string
   sharedColumns?: MicrosoftGraphColumnDefinition[]
   welcomePageColumns?: MicrosoftGraphColumnDefinition[]
   "@odata.type"?: string
}
export interface MicrosoftGraphDocumentSetContent{
   contentType?: MicrosoftGraphContentTypeInfo
   fileName?: string
   folderName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDocumentSetVersionItem{
   itemId?: string
   title?: string
   versionId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDriveItemUploadableProperties{
   description?: string
   fileSize?: number
   fileSystemInfo?: MicrosoftGraphFileSystemInfo
   name?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDriveRecipient{
   alias?: string
   email?: string
   objectId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphHashes{
   crc32Hash?: string
   quickXorHash?: string
   sha1Hash?: string
   sha256Hash?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphFolderView{
   sortBy?: string
   sortOrder?: string
   viewType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphGeolocationColumn{
   "@odata.type"?: string
}
export interface MicrosoftGraphHyperlinkOrPictureColumn{
   isPicture?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphIncompleteData{
   missingDataBeforeDateTime?: string
   wasThrottled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphItemActionStat{
   actionCount?: number
   actorCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphItemPreviewInfo{
   getUrl?: string
   postParameters?: string
   postUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphItemReference{
   driveId?: string
   driveType?: string
   id?: string
   name?: string
   path?: string
   shareId?: string
   sharepointIds?: MicrosoftGraphSharepointIds
   siteId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphLookupColumn{
   allowMultipleValues?: boolean
   allowUnlimitedLength?: boolean
   columnName?: string
   listId?: string
   primaryLookupColumnId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphNumberColumn{
   decimalPlaces?: string
   displayAs?: string
   maximum?: unknown
   minimum?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphPendingContentUpdate{
   queuedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPersonOrGroupColumn{
   allowMultipleSelection?: boolean
   chooseFromType?: string
   displayAs?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphStoragePlanInformation{
   upgradeAvailable?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphSharePointIdentity extends MicrosoftGraphIdentity{
   loginName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSharePointIdentitySet extends MicrosoftGraphIdentitySet{
   group?: MicrosoftGraphIdentity
   siteGroup?: MicrosoftGraphSharePointIdentity
   siteUser?: MicrosoftGraphSharePointIdentity
   "@odata.type"?: string
}
export interface MicrosoftGraphSharingInvitation{
   email?: string
   invitedBy?: MicrosoftGraphIdentitySet
   redeemedBy?: string
   signInRequired?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphSharingLink{
   application?: MicrosoftGraphIdentity
   preventsDownload?: boolean
   scope?: string
   type?: string
   webHtml?: string
   webUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTermColumn{
   allowMultipleValues?: boolean
   showFullyQualifiedName?: boolean
   parentTerm?: MicrosoftGraphTermStoreTerm
   termSet?: MicrosoftGraphTermStoreSet
   "@odata.type"?: string
}
export interface MicrosoftGraphTextColumn{
   allowMultipleLines?: boolean
   appendChangesToExistingText?: boolean
   linesForEditing?: number
   maxLength?: number
   textType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphThumbnail{
   content?: string
   height?: number
   sourceItemId?: string
   url?: string
   width?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphThumbnailColumn{
   "@odata.type"?: string
}
export interface MicrosoftGraphExtensionSchemaProperty{
   name?: string
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewApplyAction{
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewHistoryScheduleSettings{
   recurrence?: {pattern?: MicrosoftGraphRecurrencePattern,range?: MicrosoftGraphRecurrenceRange,"@odata.type"?: string,}
   reportRange?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewScope{
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewQueryScope extends MicrosoftGraphAccessReviewScope{
   query?: string
   queryRoot?: string
   queryType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewInactiveUsersQueryScope extends MicrosoftGraphAccessReviewQueryScope{
   inactiveDuration?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewInstanceDecisionItemResource{
   displayName?: string
   id?: string
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewInstanceDecisionItemAccessPackageAssignmentPolicyResource extends MicrosoftGraphAccessReviewInstanceDecisionItemResource{
   accessPackageDisplayName?: string
   accessPackageId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewInstanceDecisionItemAzureRoleResource extends MicrosoftGraphAccessReviewInstanceDecisionItemResource{
   scope?: MicrosoftGraphAccessReviewInstanceDecisionItemResource
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewInstanceDecisionItemServicePrincipalResource extends MicrosoftGraphAccessReviewInstanceDecisionItemResource{
   appId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewNotificationRecipientItem{
   notificationRecipientScope?: MicrosoftGraphAccessReviewNotificationRecipientScope
   notificationTemplateType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewNotificationRecipientScope{
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewNotificationRecipientQueryScope extends MicrosoftGraphAccessReviewNotificationRecipientScope{
   query?: string
   queryRoot?: string
   queryType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewReviewerScope{
   query?: string
   queryRoot?: string
   queryType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewScheduleSettings{
   applyActions?: MicrosoftGraphAccessReviewApplyAction[]
   autoApplyDecisionsEnabled?: boolean
   decisionHistoriesForReviewersEnabled?: boolean
   defaultDecision?: string
   defaultDecisionEnabled?: boolean
   instanceDurationInDays?: number
   justificationRequiredOnApproval?: boolean
   mailNotificationsEnabled?: boolean
   recommendationsEnabled?: boolean
   recurrence?: MicrosoftGraphPatternedRecurrence
   reminderNotificationsEnabled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessReviewStageSettings{
   decisionsThatWillMoveToNextStage?: string[]
   dependsOn?: string[]
   durationInDays?: number
   fallbackReviewers?: MicrosoftGraphAccessReviewReviewerScope[]
   recommendationsEnabled?: boolean
   reviewers?: MicrosoftGraphAccessReviewReviewerScope[]
   stageId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAppConsentRequestScope{
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDisableAndDeleteUserApplyAction extends MicrosoftGraphAccessReviewApplyAction{
   "@odata.type"?: string
}
export interface MicrosoftGraphPrincipalResourceMembershipsScope extends MicrosoftGraphAccessReviewScope{
   principalScopes?: MicrosoftGraphAccessReviewScope[]
   resourceScopes?: MicrosoftGraphAccessReviewScope[]
   "@odata.type"?: string
}
export interface MicrosoftGraphRemoveAccessApplyAction extends MicrosoftGraphAccessReviewApplyAction{
   "@odata.type"?: string
}
export interface MicrosoftGraphServicePrincipalIdentity extends MicrosoftGraphIdentity{
   appId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAgreementFileData{
   data?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTermsExpiration{
   frequency?: string
   startDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessSessionControl{
   isEnabled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphApplicationEnforcedRestrictionsSessionControl extends MicrosoftGraphConditionalAccessSessionControl{
   "@odata.type"?: string
}
export interface MicrosoftGraphCloudAppSecuritySessionControl extends MicrosoftGraphConditionalAccessSessionControl{
   cloudAppSecurityType?: MicrosoftGraphCloudAppSecuritySessionControlType
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessApplications{
   excludeApplications?: string[]
   includeApplications?: string[]
   includeAuthenticationContextClassReferences?: string[]
   includeUserActions?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessClientApplications{
   excludeServicePrincipals?: string[]
   includeServicePrincipals?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessConditionSet{
   applications?: MicrosoftGraphConditionalAccessApplications
   clientApplications?: MicrosoftGraphConditionalAccessClientApplications
   clientAppTypes?: string[]
   devices?: MicrosoftGraphConditionalAccessDevices
   locations?: MicrosoftGraphConditionalAccessLocations
   platforms?: MicrosoftGraphConditionalAccessPlatforms
   servicePrincipalRiskLevels?: string[]
   signInRiskLevels?: string[]
   userRiskLevels?: string[]
   users?: MicrosoftGraphConditionalAccessUsers
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessDevices{
   deviceFilter?: MicrosoftGraphConditionalAccessFilter
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessLocations{
   excludeLocations?: string[]
   includeLocations?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessPlatforms{
   excludePlatforms?: string[]
   includePlatforms?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessUsers{
   excludeGroups?: string[]
   excludeRoles?: string[]
   excludeUsers?: string[]
   includeGroups?: string[]
   includeRoles?: string[]
   includeUsers?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessFilter{
   mode?: string
   rule?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessGrantControls{
   builtInControls?: string[]
   customAuthenticationFactors?: string[]
   operator?: string
   termsOfUse?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessPolicyDetail{
   conditions?: {applications?: MicrosoftGraphConditionalAccessApplications,clientApplications?: MicrosoftGraphConditionalAccessClientApplications,clientAppTypes?: string[],devices?: MicrosoftGraphConditionalAccessDevices,locations?: MicrosoftGraphConditionalAccessLocations,platforms?: MicrosoftGraphConditionalAccessPlatforms,servicePrincipalRiskLevels?: string[],signInRiskLevels?: string[],userRiskLevels?: string[],users?: MicrosoftGraphConditionalAccessUsers,"@odata.type"?: string,}
   grantControls?: MicrosoftGraphConditionalAccessGrantControls
   sessionControls?: MicrosoftGraphConditionalAccessSessionControls
   "@odata.type"?: string
}
export interface MicrosoftGraphConditionalAccessSessionControls{
   applicationEnforcedRestrictions?: MicrosoftGraphApplicationEnforcedRestrictionsSessionControl
   cloudAppSecurity?: MicrosoftGraphCloudAppSecuritySessionControl
   disableResilienceDefaults?: boolean
   persistentBrowser?: MicrosoftGraphPersistentBrowserSessionControl
   signInFrequency?: MicrosoftGraphSignInFrequencySessionControl
   "@odata.type"?: string
}
export interface MicrosoftGraphPersistentBrowserSessionControl extends MicrosoftGraphConditionalAccessSessionControl{
   mode?: MicrosoftGraphPersistentBrowserSessionMode
   "@odata.type"?: string
}
export interface MicrosoftGraphSignInFrequencySessionControl extends MicrosoftGraphConditionalAccessSessionControl{
   authenticationType?: MicrosoftGraphSignInFrequencyAuthenticationType
   frequencyInterval?: MicrosoftGraphSignInFrequencyInterval
   type?: MicrosoftGraphSigninFrequencyType
   value?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphIpRange{
   "@odata.type"?: string
}
export interface MicrosoftGraphIPv4CidrRange extends MicrosoftGraphIpRange{
   cidrAddress?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIPv6CidrRange extends MicrosoftGraphIpRange{
   cidrAddress?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRiskUserActivity{
   detail?: MicrosoftGraphRiskDetail
   riskEventTypes?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessPackageApprovalStage{
   durationBeforeAutomaticDenial?: string
   durationBeforeEscalation?: string
   escalationApprovers?: MicrosoftGraphSubjectSet[]
   fallbackEscalationApprovers?: MicrosoftGraphSubjectSet[]
   fallbackPrimaryApprovers?: MicrosoftGraphSubjectSet[]
   isApproverJustificationRequired?: boolean
   isEscalationEnabled?: boolean
   primaryApprovers?: MicrosoftGraphSubjectSet[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSubjectSet{
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessPackageAssignmentApprovalSettings{
   isApprovalRequiredForAdd?: boolean
   isApprovalRequiredForUpdate?: boolean
   stages?: MicrosoftGraphAccessPackageApprovalStage[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessPackageAssignmentRequestorSettings{
   allowCustomAssignmentSchedule?: boolean
   enableOnBehalfRequestorsToAddAccess?: boolean
   enableOnBehalfRequestorsToRemoveAccess?: boolean
   enableOnBehalfRequestorsToUpdateAccess?: boolean
   enableTargetsToSelfAddAccess?: boolean
   enableTargetsToSelfRemoveAccess?: boolean
   enableTargetsToSelfUpdateAccess?: boolean
   onBehalfRequestors?: MicrosoftGraphSubjectSet[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessPackageAssignmentRequestRequirements{
   allowCustomAssignmentSchedule?: boolean
   isApprovalRequiredForAdd?: boolean
   isApprovalRequiredForUpdate?: boolean
   policyDescription?: string
   policyDisplayName?: string
   policyId?: string
   schedule?: MicrosoftGraphEntitlementManagementSchedule
   "@odata.type"?: string
}
export interface MicrosoftGraphEntitlementManagementSchedule{
   expiration?: MicrosoftGraphExpirationPattern
   recurrence?: MicrosoftGraphPatternedRecurrence
   startDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessPackageAssignmentReviewSettings{
   expirationBehavior?: MicrosoftGraphAccessReviewExpirationBehavior
   fallbackReviewers?: MicrosoftGraphSubjectSet[]
   isEnabled?: boolean
   isRecommendationEnabled?: boolean
   isReviewerJustificationRequired?: boolean
   isSelfReview?: boolean
   primaryReviewers?: MicrosoftGraphSubjectSet[]
   schedule?: MicrosoftGraphEntitlementManagementSchedule
   "@odata.type"?: string
}
export interface MicrosoftGraphAccessPackageAutomaticRequestSettings{
   gracePeriodBeforeAccessRemoval?: string
   removeAccessWhenTargetLeavesAllowedTargets?: boolean
   requestAccessForAllowedTargets?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphAttributeRuleMembers extends MicrosoftGraphSubjectSet{
   description?: string
   membershipRule?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphConnectedOrganizationMembers extends MicrosoftGraphSubjectSet{
   connectedOrganizationId?: string
   description?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphConnectionInfo{
   url?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphExpirationPattern{
   duration?: string
   endDateTime?: string
   type?: MicrosoftGraphExpirationPatternType
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalSponsors extends MicrosoftGraphSubjectSet{
   "@odata.type"?: string
}
export interface MicrosoftGraphGroupMembers extends MicrosoftGraphSubjectSet{
   description?: string
   groupId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphInternalSponsors extends MicrosoftGraphSubjectSet{
   "@odata.type"?: string
}
export interface MicrosoftGraphRequestorManager extends MicrosoftGraphSubjectSet{
   managerLevel?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphSingleServicePrincipal extends MicrosoftGraphSubjectSet{
   description?: string
   servicePrincipalId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSingleUser extends MicrosoftGraphSubjectSet{
   description?: string
   userId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTargetApplicationOwners extends MicrosoftGraphSubjectSet{
   "@odata.type"?: string
}
export interface MicrosoftGraphTargetManager extends MicrosoftGraphSubjectSet{
   managerLevel?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphIdentitySource{
   "@odata.type"?: string
}
export interface MicrosoftGraphAzureActiveDirectoryTenant extends MicrosoftGraphIdentitySource{
   displayName?: string
   tenantId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDomainIdentitySource extends MicrosoftGraphIdentitySource{
   displayName?: string
   domainName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalDomainFederation extends MicrosoftGraphIdentitySource{
   displayName?: string
   domainName?: string
   issuerUri?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceAndAppManagementAssignmentTarget{
   "@odata.type"?: string
}
export interface MicrosoftGraphAllDevicesAssignmentTarget extends MicrosoftGraphDeviceAndAppManagementAssignmentTarget{
   "@odata.type"?: string
}
export interface MicrosoftGraphAllLicensedUsersAssignmentTarget extends MicrosoftGraphDeviceAndAppManagementAssignmentTarget{
   "@odata.type"?: string
}
export interface MicrosoftGraphAndroidMinimumOperatingSystem{
   v10_0?: boolean
   v11_0?: boolean
   v4_0?: boolean
   v4_0_3?: boolean
   v4_1?: boolean
   v4_2?: boolean
   v4_3?: boolean
   v4_4?: boolean
   v5_0?: boolean
   v5_1?: boolean
   v6_0?: boolean
   v7_0?: boolean
   v7_1?: boolean
   v8_0?: boolean
   v8_1?: boolean
   v9_0?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphAppConfigurationSettingItem{
   appConfigKey?: string
   appConfigKeyType?: string
   appConfigKeyValue?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphConfigurationManagerCollectionAssignmentTarget extends MicrosoftGraphDeviceAndAppManagementAssignmentTarget{
   collectionId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphGroupAssignmentTarget extends MicrosoftGraphDeviceAndAppManagementAssignmentTarget{
   groupId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphExclusionGroupAssignmentTarget extends MicrosoftGraphGroupAssignmentTarget{
   "@odata.type"?: string
}
export interface MicrosoftGraphFileEncryptionInfo{
   encryptionKey?: string
   fileDigest?: string
   fileDigestAlgorithm?: string
   initializationVector?: string
   mac?: string
   macKey?: string
   profileIdentifier?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIosDeviceType{
   iPad?: boolean
   iPhoneAndIPod?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphMobileAppAssignmentSettings{
   "@odata.type"?: string
}
export interface MicrosoftGraphIosLobAppAssignmentSettings extends MicrosoftGraphMobileAppAssignmentSettings{
   vpnConfigurationId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIosMinimumOperatingSystem{
   v10_0?: boolean
   v11_0?: boolean
   v12_0?: boolean
   v13_0?: boolean
   v14_0?: boolean
   v8_0?: boolean
   v9_0?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphIosStoreAppAssignmentSettings extends MicrosoftGraphMobileAppAssignmentSettings{
   vpnConfigurationId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIosVppAppAssignmentSettings extends MicrosoftGraphMobileAppAssignmentSettings{
   useDeviceLicensing?: boolean
   vpnConfigurationId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMicrosoftStoreForBusinessAppAssignmentSettings extends MicrosoftGraphMobileAppAssignmentSettings{
   useDeviceContext?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphMimeContent{
   type?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMobileAppInstallTimeSettings{
   deadlineDateTime?: string
   startDateTime?: string
   useLocalTime?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphVppLicensingType{
   supportsDeviceLicensing?: boolean
   supportsUserLicensing?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWin32LobAppAssignmentSettings extends MicrosoftGraphMobileAppAssignmentSettings{
   deliveryOptimizationPriority?: string
   installTimeSettings?: MicrosoftGraphMobileAppInstallTimeSettings
   notifications?: string
   restartSettings?: MicrosoftGraphWin32LobAppRestartSettings
   "@odata.type"?: string
}
export interface MicrosoftGraphWin32LobAppRestartSettings{
   countdownDisplayBeforeRestartInMinutes?: number
   gracePeriodInMinutes?: number
   restartNotificationSnoozeDurationInMinutes?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphWin32LobAppRule{
   ruleType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWin32LobAppFileSystemRule extends MicrosoftGraphWin32LobAppRule{
   check32BitOn64System?: boolean
   comparisonValue?: string
   fileOrFolderName?: string
   operationType?: string
   operator?: string
   path?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWin32LobAppInstallExperience{
   deviceRestartBehavior?: string
   runAsAccount?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWin32LobAppMsiInformation{
   packageType?: string
   productCode?: string
   productName?: string
   productVersion?: string
   publisher?: string
   requiresReboot?: boolean
   upgradeCode?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWin32LobAppPowerShellScriptRule extends MicrosoftGraphWin32LobAppRule{
   comparisonValue?: string
   displayName?: string
   enforceSignatureCheck?: boolean
   operationType?: string
   operator?: string
   runAs32Bit?: boolean
   runAsAccount?: MicrosoftGraphRunAsAccountType
   scriptContent?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWin32LobAppProductCodeRule extends MicrosoftGraphWin32LobAppRule{
   productCode?: string
   productVersion?: string
   productVersionOperator?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWin32LobAppRegistryRule extends MicrosoftGraphWin32LobAppRule{
   check32BitOn64System?: boolean
   comparisonValue?: string
   keyPath?: string
   operationType?: string
   operator?: string
   valueName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWin32LobAppReturnCode{
   returnCode?: number
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsMinimumOperatingSystem{
   v10_0?: boolean
   v8_0?: boolean
   v8_1?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceManagementSettings{
   deviceComplianceCheckinThresholdDays?: number
   isScheduledActionEnabled?: boolean
   secureByDefault?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphIntuneBrand{
   contactITEmailAddress?: string
   contactITName?: string
   contactITNotes?: string
   contactITPhoneNumber?: string
   darkBackgroundLogo?: MicrosoftGraphMimeContent
   displayName?: string
   lightBackgroundLogo?: MicrosoftGraphMimeContent
   onlineSupportSiteName?: string
   onlineSupportSiteUrl?: string
   privacyUrl?: string
   showDisplayNameNextToLogo?: boolean
   showLogo?: boolean
   showNameNextToLogo?: boolean
   themeColor?: MicrosoftGraphRgbColor
   "@odata.type"?: string
}
export interface MicrosoftGraphAppListItem{
   appId?: string
   appStoreUrl?: string
   name?: string
   publisher?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphBitLockerRemovableDrivePolicy{
   blockCrossOrganizationWriteAccess?: boolean
   encryptionMethod?: MicrosoftGraphBitLockerEncryptionMethod
   requireEncryptionForWriteAccess?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphDefenderDetectedMalwareActions{
   highSeverity?: string
   lowSeverity?: string
   moderateSeverity?: string
   severeSeverity?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceCompliancePolicySettingState{
   currentValue?: string
   errorCode?: number
   errorDescription?: string
   instanceDisplayName?: string
   setting?: string
   settingName?: string
   sources?: MicrosoftGraphSettingSource[]
   state?: string
   userEmail?: string
   userId?: string
   userName?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSettingSource{
   displayName?: string
   id?: string
   sourceType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceConfigurationSettingState{
   currentValue?: string
   errorCode?: number
   errorDescription?: string
   instanceDisplayName?: string
   setting?: string
   settingName?: string
   sources?: MicrosoftGraphSettingSource[]
   state?: string
   userEmail?: string
   userId?: string
   userName?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEdgeSearchEngineBase{
   "@odata.type"?: string
}
export interface MicrosoftGraphEdgeSearchEngine extends MicrosoftGraphEdgeSearchEngineBase{
   edgeSearchEngineType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEdgeSearchEngineCustom extends MicrosoftGraphEdgeSearchEngineBase{
   edgeSearchEngineOpenSearchXmlUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIosHomeScreenItem{
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIosHomeScreenApp extends MicrosoftGraphIosHomeScreenItem{
   bundleID?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIosHomeScreenFolder extends MicrosoftGraphIosHomeScreenItem{
   pages?: {apps?: MicrosoftGraphIosHomeScreenApp[],displayName?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphIosHomeScreenFolderPage{
   apps?: MicrosoftGraphIosHomeScreenApp[]
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIosHomeScreenPage{
   displayName?: string
   icons?: {displayName?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphIosNetworkUsageRule{
   cellularDataBlocked?: boolean
   cellularDataBlockWhenRoaming?: boolean
   managedApps?: MicrosoftGraphAppListItem[]
   "@odata.type"?: string
}
export interface MicrosoftGraphIosNotificationSettings{
   alertType?: string
   appName?: string
   badgesEnabled?: boolean
   bundleID?: string
   enabled?: boolean
   publisher?: string
   showInNotificationCenter?: boolean
   showOnLockScreen?: boolean
   soundsEnabled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaContentRatingAustralia{
   movieRating?: string
   tvRating?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaContentRatingCanada{
   movieRating?: string
   tvRating?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaContentRatingFrance{
   movieRating?: string
   tvRating?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaContentRatingGermany{
   movieRating?: string
   tvRating?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaContentRatingIreland{
   movieRating?: string
   tvRating?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaContentRatingJapan{
   movieRating?: string
   tvRating?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaContentRatingNewZealand{
   movieRating?: string
   tvRating?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaContentRatingUnitedKingdom{
   movieRating?: string
   tvRating?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaContentRatingUnitedStates{
   movieRating?: string
   tvRating?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOmaSetting{
   description?: string
   displayName?: string
   omaUri?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOmaSettingBase64 extends MicrosoftGraphOmaSetting{
   fileName?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOmaSettingBoolean extends MicrosoftGraphOmaSetting{
   value?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphOmaSettingDateTime extends MicrosoftGraphOmaSetting{
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOmaSettingFloatingPoint extends MicrosoftGraphOmaSetting{
   value?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphOmaSettingInteger extends MicrosoftGraphOmaSetting{
   value?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphOmaSettingString extends MicrosoftGraphOmaSetting{
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOmaSettingStringXml extends MicrosoftGraphOmaSetting{
   fileName?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphReport{
   content?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSharedPCAccountManagerPolicy{
   accountDeletionPolicy?: string
   cacheAccountsAboveDiskFreePercentage?: number
   inactiveThresholdDays?: number
   removeAccountsBelowDiskFreePercentage?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphWindows10NetworkProxyServer{
   address?: string
   exceptions?: string[]
   useForLocalAddresses?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsFirewallNetworkProfile{
   authorizedApplicationRulesFromGroupPolicyMerged?: boolean
   connectionSecurityRulesFromGroupPolicyMerged?: boolean
   firewallEnabled?: string
   globalPortRulesFromGroupPolicyMerged?: boolean
   inboundConnectionsBlocked?: boolean
   inboundNotificationsBlocked?: boolean
   incomingTrafficBlocked?: boolean
   outboundConnectionsBlocked?: boolean
   policyRulesFromGroupPolicyMerged?: boolean
   securedPacketExemptionAllowed?: boolean
   stealthModeBlocked?: boolean
   unicastResponsesToMulticastBroadcastsBlocked?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsUpdateInstallScheduleType{
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsUpdateActiveHoursInstall extends MicrosoftGraphWindowsUpdateInstallScheduleType{
   activeHoursEnd?: string
   activeHoursStart?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsUpdateScheduledInstall extends MicrosoftGraphWindowsUpdateInstallScheduleType{
   scheduledInstallDay?: string
   scheduledInstallTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphConfigurationManagerClientEnabledFeatures{
   compliancePolicy?: boolean
   deviceConfiguration?: boolean
   inventory?: boolean
   modernApps?: boolean
   resourceAccess?: boolean
   windowsUpdateForBusiness?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceActionResult{
   actionName?: string
   actionState?: string
   lastUpdatedDateTime?: string
   startDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceHealthAttestationState{
   attestationIdentityKey?: string
   bitLockerStatus?: string
   bootAppSecurityVersion?: string
   bootDebugging?: string
   bootManagerSecurityVersion?: string
   bootManagerVersion?: string
   bootRevisionListInfo?: string
   codeIntegrity?: string
   codeIntegrityCheckVersion?: string
   codeIntegrityPolicy?: string
   contentNamespaceUrl?: string
   contentVersion?: string
   dataExcutionPolicy?: string
   deviceHealthAttestationStatus?: string
   earlyLaunchAntiMalwareDriverProtection?: string
   healthAttestationSupportedStatus?: string
   healthStatusMismatchInfo?: string
   issuedDateTime?: string
   lastUpdateDateTime?: string
   operatingSystemKernelDebugging?: string
   operatingSystemRevListInfo?: string
   pcr0?: string
   pcrHashAlgorithm?: string
   resetCount?: number
   restartCount?: number
   safeMode?: string
   secureBoot?: string
   secureBootConfigurationPolicyFingerPrint?: string
   testSigning?: string
   tpmVersion?: string
   virtualSecureMode?: string
   windowsPE?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphComplianceManagementPartnerAssignment{
   target?: MicrosoftGraphDeviceAndAppManagementAssignmentTarget
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceEnrollmentPlatformRestriction{
   osMaximumVersion?: string
   osMinimumVersion?: string
   personalDeviceEnrollmentBlocked?: boolean
   platformBlocked?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphRgbColor{
   b?: number
   g?: number
   r?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDeleteUserFromSharedAppleDeviceActionResult extends MicrosoftGraphDeviceActionResult{
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceExchangeAccessStateSummary{
   allowedDeviceCount?: number
   blockedDeviceCount?: number
   quarantinedDeviceCount?: number
   unavailableDeviceCount?: number
   unknownDeviceCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceGeoLocation{
   altitude?: unknown
   heading?: unknown
   horizontalAccuracy?: unknown
   lastCollectedDateTime?: string
   latitude?: unknown
   longitude?: unknown
   speed?: unknown
   verticalAccuracy?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphDeviceOperatingSystemSummary{
   androidCorporateWorkProfileCount?: number
   androidCount?: number
   androidDedicatedCount?: number
   androidDeviceAdminCount?: number
   androidFullyManagedCount?: number
   androidWorkProfileCount?: number
   configMgrDeviceCount?: number
   iosCount?: number
   macOSCount?: number
   unknownCount?: number
   windowsCount?: number
   windowsMobileCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphLocateDeviceActionResult extends MicrosoftGraphDeviceActionResult{
   deviceLocation?: MicrosoftGraphDeviceGeoLocation
   "@odata.type"?: string
}
export interface MicrosoftGraphRemoteLockActionResult extends MicrosoftGraphDeviceActionResult{
   unlockPin?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphResetPasscodeActionResult extends MicrosoftGraphDeviceActionResult{
   passcode?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUpdateWindowsDeviceAccountActionParameter{
   calendarSyncEnabled?: boolean
   deviceAccount?: MicrosoftGraphWindowsDeviceAccount
   deviceAccountEmail?: string
   exchangeServer?: string
   passwordRotationEnabled?: boolean
   sessionInitiationProtocalAddress?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsDeviceAccount{
   password?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsDefenderScanActionResult extends MicrosoftGraphDeviceActionResult{
   scanType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsDeviceADAccount extends MicrosoftGraphWindowsDeviceAccount{
   domainName?: string
   userName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsDeviceAzureADAccount extends MicrosoftGraphWindowsDeviceAccount{
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphImportedWindowsAutopilotDeviceIdentityState{
   deviceErrorCode?: number
   deviceErrorName?: string
   deviceImportStatus?: string
   deviceRegistrationId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMobileAppIdentifier{
   "@odata.type"?: string
}
export interface MicrosoftGraphAndroidMobileAppIdentifier extends MicrosoftGraphMobileAppIdentifier{
   packageId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIosMobileAppIdentifier extends MicrosoftGraphMobileAppIdentifier{
   bundleId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIPv4Range extends MicrosoftGraphIpRange{
   lowerAddress?: string
   upperAddress?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIPv6Range extends MicrosoftGraphIpRange{
   lowerAddress?: string
   upperAddress?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedAppDiagnosticStatus{
   mitigationInstruction?: string
   state?: string
   validationName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphManagedAppPolicyDeploymentSummaryPerApp{
   configurationAppliedUserCount?: number
   mobileAppIdentifier?: MicrosoftGraphMobileAppIdentifier
   "@odata.type"?: string
}
export interface MicrosoftGraphProxiedDomain{
   ipAddressOrFQDN?: string
   proxy?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsInformationProtectionApp{
   denied?: boolean
   description?: string
   displayName?: string
   productName?: string
   publisherName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsInformationProtectionDataRecoveryCertificate{
   certificate?: string
   description?: string
   expirationDateTime?: string
   subjectName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsInformationProtectionDesktopApp extends MicrosoftGraphWindowsInformationProtectionApp{
   binaryName?: string
   binaryVersionHigh?: string
   binaryVersionLow?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsInformationProtectionIPRangeCollection{
   displayName?: string
   ranges?: {"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsInformationProtectionProxiedDomainCollection{
   displayName?: string
   proxiedDomains?: {ipAddressOrFQDN?: string,proxy?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsInformationProtectionResourceCollection{
   displayName?: string
   resources?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphWindowsInformationProtectionStoreApp extends MicrosoftGraphWindowsInformationProtectionApp{
   "@odata.type"?: string
}
export interface MicrosoftGraphResourceAction{
   allowedResourceActions?: string[]
   notAllowedResourceActions?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphRolePermission{
   resourceActions?: MicrosoftGraphResourceAction[]
   "@odata.type"?: string
}
export interface MicrosoftGraphServiceHealthIssuePost{
   createdDateTime?: string
   description?: MicrosoftGraphItemBody
   postType?: MicrosoftGraphPostType
   "@odata.type"?: string
}
export interface MicrosoftGraphServiceUpdateMessageViewpoint{
   isArchived?: boolean
   isFavorited?: boolean
   isRead?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphAggregationOption{
   bucketDefinition?: {isDescending?: boolean,minimumCount?: number,prefixFilter?: string,ranges?: MicrosoftGraphBucketAggregationRange[],sortBy?: string,"@odata.type"?: string,}
   field?: string
   size?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphBucketAggregationDefinition{
   isDescending?: boolean
   minimumCount?: number
   prefixFilter?: string
   ranges?: MicrosoftGraphBucketAggregationRange[]
   sortBy?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAlterationResponse{
   originalQueryString?: string
   queryAlteration?: MicrosoftGraphSearchAlteration
   queryAlterationType?: MicrosoftGraphSearchAlterationType
   "@odata.type"?: string
}
export interface MicrosoftGraphSearchAlteration{
   alteredHighlightedQueryString?: string
   alteredQueryString?: string
   alteredQueryTokens?: MicrosoftGraphAlteredQueryToken[]
   "@odata.type"?: string
}
export interface MicrosoftGraphAlteredQueryToken{
   length?: number
   offset?: number
   suggestion?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphBucketAggregationRange{
   from?: string
   to?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphResultTemplate{
   body?: MicrosoftGraphJson
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphDictionary{
   "@odata.type"?: string
}
export interface MicrosoftGraphResultTemplateDictionary extends MicrosoftGraphDictionary{
   "@odata.type"?: string
}
export interface MicrosoftGraphResultTemplateOption{
   enableResultTemplate?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphSearchAggregation{
   buckets?: MicrosoftGraphSearchBucket[]
   field?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSearchBucket{
   aggregationFilterToken?: string
   count?: number
   key?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSearchAlterationOptions{
   enableModification?: boolean
   enableSuggestion?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphSearchHit{
   contentSource?: string
   hitId?: string
   rank?: number
   resultTemplateId?: string
   summary?: string
   resource?: MicrosoftGraphEntity
   "@odata.type"?: string
}
export interface MicrosoftGraphSearchHitsContainer{
   aggregations?: MicrosoftGraphSearchAggregation[]
   hits?: MicrosoftGraphSearchHit[]
   moreResultsAvailable?: boolean
   total?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphSearchQuery{
   queryString?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSearchRequest{
   aggregationFilters?: string[]
   aggregations?: MicrosoftGraphAggregationOption[]
   contentSources?: string[]
   enableTopResults?: boolean
   entityTypes?: MicrosoftGraphEntityType[]
   fields?: string[]
   from?: number
   query?: {queryString?: string,"@odata.type"?: string,}
   queryAlterationOptions?: MicrosoftGraphSearchAlterationOptions
   resultTemplateOptions?: MicrosoftGraphResultTemplateOption
   size?: number
   sortProperties?: MicrosoftGraphSortProperty[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSortProperty{
   isDescending?: boolean
   name?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSearchResponse{
   hitsContainers?: MicrosoftGraphSearchHitsContainer[]
   queryAlterationResponse?: MicrosoftGraphAlterationResponse
   resultTemplates?: MicrosoftGraphResultTemplateDictionary
   searchTerms?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerAppliedCategories{
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerAssignment{
   assignedBy?: MicrosoftGraphIdentitySet
   assignedDateTime?: string
   orderHint?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerAssignments{
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerCategoryDescriptions{
   category1?: string
   category10?: string
   category11?: string
   category12?: string
   category13?: string
   category14?: string
   category15?: string
   category16?: string
   category17?: string
   category18?: string
   category19?: string
   category2?: string
   category20?: string
   category21?: string
   category22?: string
   category23?: string
   category24?: string
   category25?: string
   category3?: string
   category4?: string
   category5?: string
   category6?: string
   category7?: string
   category8?: string
   category9?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerChecklistItem{
   isChecked?: boolean
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   orderHint?: string
   title?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerChecklistItems{
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerExternalReference{
   alias?: string
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   previewPriority?: string
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerExternalReferences{
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerOrderHintsByAssignee{
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerPlanContainer{
   containerId?: string
   type?: string
   url?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPlannerUserIds{
   "@odata.type"?: string
}
export interface MicrosoftGraphInsightIdentity{
   address?: string
   displayName?: string
   id?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphResourceReference{
   id?: string
   type?: string
   webUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphResourceVisualization{
   containerDisplayName?: string
   containerType?: string
   containerWebUrl?: string
   mediaType?: string
   previewImageUrl?: string
   previewText?: string
   title?: string
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSharingDetail{
   sharedBy?: MicrosoftGraphInsightIdentity
   sharedDateTime?: string
   sharingReference?: MicrosoftGraphResourceReference
   sharingSubject?: string
   sharingType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUsageDetails{
   lastAccessedDateTime?: string
   lastModifiedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCopyNotebookModel{
   createdBy?: string
   createdByIdentity?: MicrosoftGraphIdentitySet
   createdTime?: string
   id?: string
   isDefault?: boolean
   isShared?: boolean
   lastModifiedBy?: string
   lastModifiedByIdentity?: MicrosoftGraphIdentitySet
   lastModifiedTime?: string
   links?: MicrosoftGraphNotebookLinks
   name?: string
   sectionGroupsUrl?: string
   sectionsUrl?: string
   self?: string
   userRole?: MicrosoftGraphOnenoteUserRole
   "@odata.type"?: string
}
export interface MicrosoftGraphNotebookLinks{
   oneNoteClientUrl?: MicrosoftGraphExternalLink
   oneNoteWebUrl?: MicrosoftGraphExternalLink
   "@odata.type"?: string
}
export interface MicrosoftGraphDiagnostic{
   message?: string
   url?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalLink{
   href?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOnenoteOperationError{
   code?: string
   message?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOnenotePagePreview{
   links?: MicrosoftGraphOnenotePagePreviewLinks
   previewText?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOnenotePagePreviewLinks{
   previewImageUrl?: MicrosoftGraphExternalLink
   "@odata.type"?: string
}
export interface MicrosoftGraphOnenotePatchContentCommand{
   action?: string
   content?: string
   position?: MicrosoftGraphOnenotePatchInsertPosition
   target?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPageLinks{
   oneNoteClientUrl?: MicrosoftGraphExternalLink
   oneNoteWebUrl?: MicrosoftGraphExternalLink
   "@odata.type"?: string
}
export interface MicrosoftGraphRecentNotebook{
   displayName?: string
   lastAccessedTime?: string
   links?: MicrosoftGraphRecentNotebookLinks
   sourceService?: MicrosoftGraphOnenoteSourceService
   "@odata.type"?: string
}
export interface MicrosoftGraphRecentNotebookLinks{
   oneNoteClientUrl?: MicrosoftGraphExternalLink
   oneNoteWebUrl?: MicrosoftGraphExternalLink
   "@odata.type"?: string
}
export interface MicrosoftGraphSectionLinks{
   oneNoteClientUrl?: MicrosoftGraphExternalLink
   oneNoteWebUrl?: MicrosoftGraphExternalLink
   "@odata.type"?: string
}
export interface MicrosoftGraphApprovalSettings{
   approvalMode?: string
   approvalStages?: MicrosoftGraphUnifiedApprovalStage[]
   isApprovalRequired?: boolean
   isApprovalRequiredForExtension?: boolean
   isRequestorJustificationRequired?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedApprovalStage{
   approvalStageTimeOutInDays?: number
   escalationApprovers?: MicrosoftGraphSubjectSet[]
   escalationTimeInMinutes?: number
   isApproverJustificationRequired?: boolean
   isEscalationEnabled?: boolean
   primaryApprovers?: MicrosoftGraphSubjectSet[]
   "@odata.type"?: string
}
export interface MicrosoftGraphRequestSchedule{
   expiration?: MicrosoftGraphExpirationPattern
   recurrence?: MicrosoftGraphPatternedRecurrence
   startDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTicketInfo{
   ticketNumber?: string
   ticketSystem?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUnifiedRoleManagementPolicyRuleTarget{
   caller?: string
   enforcedSettings?: string[]
   inheritableSettings?: string[]
   level?: string
   operations?: MicrosoftGraphUnifiedRoleManagementPolicyRuleTargetOperations[]
   targetObjects?: MicrosoftGraphDirectoryObject[]
   "@odata.type"?: string
}
export interface MicrosoftGraphArchivedPrintJob{
   acquiredByPrinter?: boolean
   acquiredDateTime?: string
   completionDateTime?: string
   copiesPrinted?: number
   createdBy?: MicrosoftGraphUserIdentity
   createdDateTime?: string
   id?: string
   printerId?: string
   processingState?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphIntegerRange{
   end?: number
   start?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintCertificateSigningRequest{
   content?: string
   transportKey?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintDocumentUploadProperties{
   contentType?: string
   documentName?: string
   size?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphPrinterCapabilities{
   bottomMargins?: number[]
   collation?: boolean
   colorModes?: MicrosoftGraphPrintColorMode[]
   contentTypes?: string[]
   copiesPerJob?: MicrosoftGraphIntegerRange
   dpis?: number[]
   duplexModes?: MicrosoftGraphPrintDuplexMode[]
   feedOrientations?: MicrosoftGraphPrinterFeedOrientation[]
   finishings?: MicrosoftGraphPrintFinishing[]
   inputBins?: string[]
   isColorPrintingSupported?: boolean
   isPageRangeSupported?: boolean
   leftMargins?: number[]
   mediaColors?: string[]
   mediaSizes?: string[]
   mediaTypes?: string[]
   multipageLayouts?: MicrosoftGraphPrintMultipageLayout[]
   orientations?: MicrosoftGraphPrintOrientation[]
   outputBins?: string[]
   pagesPerSheet?: number[]
   qualities?: MicrosoftGraphPrintQuality[]
   rightMargins?: number[]
   scalings?: MicrosoftGraphPrintScaling[]
   supportsFitPdfToPage?: boolean
   topMargins?: number[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPrinterDefaults{
   colorMode?: MicrosoftGraphPrintColorMode
   contentType?: string
   copiesPerJob?: number
   dpi?: number
   duplexMode?: MicrosoftGraphPrintDuplexMode
   finishings?: MicrosoftGraphPrintFinishing[]
   fitPdfToPage?: boolean
   inputBin?: string
   mediaColor?: string
   mediaSize?: string
   mediaType?: string
   multipageLayout?: MicrosoftGraphPrintMultipageLayout
   orientation?: MicrosoftGraphPrintOrientation
   outputBin?: string
   pagesPerSheet?: number
   quality?: MicrosoftGraphPrintQuality
   scaling?: MicrosoftGraphPrintScaling
   "@odata.type"?: string
}
export interface MicrosoftGraphPrinterLocation{
   altitudeInMeters?: number
   building?: string
   city?: string
   countryOrRegion?: string
   floor?: string
   floorDescription?: string
   latitude?: unknown
   longitude?: unknown
   organization?: string[]
   postalCode?: string
   roomDescription?: string
   roomName?: string
   site?: string
   stateOrProvince?: string
   streetAddress?: string
   subdivision?: string[]
   subunit?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphPrinterStatus{
   description?: string
   details?: string[]
   state?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintJobConfiguration{
   collate?: boolean
   colorMode?: MicrosoftGraphPrintColorMode
   copies?: number
   dpi?: number
   duplexMode?: MicrosoftGraphPrintDuplexMode
   feedOrientation?: MicrosoftGraphPrinterFeedOrientation
   finishings?: MicrosoftGraphPrintFinishing[]
   fitPdfToPage?: boolean
   inputBin?: string
   margin?: MicrosoftGraphPrintMargin
   mediaSize?: string
   mediaType?: string
   multipageLayout?: MicrosoftGraphPrintMultipageLayout
   orientation?: MicrosoftGraphPrintOrientation
   outputBin?: string
   pageRanges?: MicrosoftGraphIntegerRange[]
   pagesPerSheet?: number
   quality?: MicrosoftGraphPrintQuality
   scaling?: MicrosoftGraphPrintScaling
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintMargin{
   bottom?: number
   left?: number
   right?: number
   top?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintJobStatus{
   description?: string
   details?: string[]
   isAcquiredByPrinter?: boolean
   state?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintOperationStatus{
   description?: string
   state?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintSettings{
   documentConversionEnabled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphPrintTaskStatus{
   description?: string
   state?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphImageInfo{
   addImageQuery?: boolean
   alternateText?: string
   alternativeText?: string
   iconUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphVisualInfo{
   attribution?: MicrosoftGraphImageInfo
   backgroundColor?: string
   content?: MicrosoftGraphJson
   description?: string
   displayText?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAssignedTrainingInfo{
   assignedUserCount?: number
   completedUserCount?: number
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAttackSimulationRepeatOffender{
   attackSimulationUser?: MicrosoftGraphAttackSimulationUser
   repeatOffenceCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphAttackSimulationUser{
   displayName?: string
   email?: string
   userId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAttackSimulationSimulationUserCoverage{
   attackSimulationUser?: MicrosoftGraphAttackSimulationUser
   clickCount?: number
   compromisedCount?: number
   latestSimulationDateTime?: string
   simulationCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphAttackSimulationTrainingUserCoverage{
   attackSimulationUser?: MicrosoftGraphAttackSimulationUser
   userTrainings?: MicrosoftGraphUserTrainingStatusInfo[]
   "@odata.type"?: string
}
export interface MicrosoftGraphUserTrainingStatusInfo{
   assignedDateTime?: string
   completionDateTime?: string
   displayName?: string
   trainingStatus?: MicrosoftGraphTrainingStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphEmailIdentity extends MicrosoftGraphIdentity{
   email?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRecommendedAction{
   actionWebUrl?: string
   potentialScoreImpact?: unknown
   title?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSimulationEvent{
   count?: number
   eventName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSimulationEventsContent{
   compromisedRate?: unknown
   events?: MicrosoftGraphSimulationEvent[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSimulationReport{
   overview?: MicrosoftGraphSimulationReportOverview
   simulationUsers?: MicrosoftGraphUserSimulationDetails[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSimulationReportOverview{
   recommendedActions?: MicrosoftGraphRecommendedAction[]
   resolvedTargetsCount?: number
   simulationEventsContent?: MicrosoftGraphSimulationEventsContent
   trainingEventsContent?: MicrosoftGraphTrainingEventsContent
   "@odata.type"?: string
}
export interface MicrosoftGraphUserSimulationDetails{
   assignedTrainingsCount?: number
   completedTrainingsCount?: number
   compromisedDateTime?: string
   inProgressTrainingsCount?: number
   isCompromised?: boolean
   reportedPhishDateTime?: string
   simulationEvents?: MicrosoftGraphUserSimulationEventInfo[]
   simulationUser?: MicrosoftGraphAttackSimulationUser
   trainingEvents?: MicrosoftGraphUserTrainingEventInfo[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTrainingEventsContent{
   assignedTrainingsInfos?: MicrosoftGraphAssignedTrainingInfo[]
   trainingsAssignedUserCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphUserSimulationEventInfo{
   browser?: string
   eventDateTime?: string
   eventName?: string
   ipAddress?: string
   osPlatformDeviceDetails?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUserTrainingEventInfo{
   displayName?: string
   latestTrainingStatus?: MicrosoftGraphTrainingStatus
   trainingAssignedProperties?: MicrosoftGraphUserTrainingContentEventInfo
   trainingCompletedProperties?: MicrosoftGraphUserTrainingContentEventInfo
   trainingUpdatedProperties?: MicrosoftGraphUserTrainingContentEventInfo
   "@odata.type"?: string
}
export interface MicrosoftGraphUserTrainingContentEventInfo{
   browser?: string
   contentDateTime?: string
   ipAddress?: string
   osPlatformDeviceDetails?: string
   potentialScoreImpact?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphAlertDetection{
   detectionType?: string
   method?: string
   name?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAlertHistoryState{
   appId?: string
   assignedTo?: string
   comments?: string[]
   feedback?: MicrosoftGraphAlertFeedback
   status?: MicrosoftGraphAlertStatus
   updatedDateTime?: string
   user?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAlertTrigger{
   name?: string
   type?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAverageComparativeScore{
   averageScore?: unknown
   basis?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCertificationControl{
   name?: string
   url?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCloudAppSecurityState{
   destinationServiceIp?: string
   destinationServiceName?: string
   riskScore?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphComplianceInformation{
   certificationControls?: MicrosoftGraphCertificationControl[]
   certificationName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphControlScore{
   controlCategory?: string
   controlName?: string
   description?: string
   score?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphFileHash{
   hashType?: MicrosoftGraphFileHashType
   hashValue?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphFileSecurityState{
   fileHash?: MicrosoftGraphFileHash
   name?: string
   path?: string
   riskScore?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphHostSecurityState{
   fqdn?: string
   isAzureAdJoined?: boolean
   isAzureAdRegistered?: boolean
   isHybridAzureDomainJoined?: boolean
   netBiosName?: string
   os?: string
   privateIpAddress?: string
   publicIpAddress?: string
   riskScore?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphInvestigationSecurityState{
   name?: string
   status?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMalwareState{
   category?: string
   family?: string
   name?: string
   severity?: string
   wasRunning?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphMessageSecurityState{
   connectingIP?: string
   deliveryAction?: string
   deliveryLocation?: string
   directionality?: string
   internetMessageId?: string
   messageFingerprint?: string
   messageReceivedDateTime?: string
   messageSubject?: string
   networkMessageId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphNetworkConnection{
   applicationName?: string
   destinationAddress?: string
   destinationDomain?: string
   destinationLocation?: string
   destinationPort?: string
   destinationUrl?: string
   direction?: MicrosoftGraphConnectionDirection
   domainRegisteredDateTime?: string
   localDnsName?: string
   natDestinationAddress?: string
   natDestinationPort?: string
   natSourceAddress?: string
   natSourcePort?: string
   protocol?: MicrosoftGraphSecurityNetworkProtocol
   riskScore?: string
   sourceAddress?: string
   sourceLocation?: string
   sourcePort?: string
   status?: MicrosoftGraphConnectionStatus
   urlParameters?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphProcess{
   accountName?: string
   commandLine?: string
   createdDateTime?: string
   fileHash?: MicrosoftGraphFileHash
   integrityLevel?: MicrosoftGraphProcessIntegrityLevel
   isElevated?: boolean
   name?: string
   parentProcessCreatedDateTime?: string
   parentProcessId?: number
   parentProcessName?: string
   path?: string
   processId?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphRegistryKeyState{
   hive?: MicrosoftGraphRegistryHive
   key?: string
   oldKey?: string
   oldValueData?: string
   oldValueName?: string
   operation?: MicrosoftGraphRegistryOperation
   processId?: number
   valueData?: string
   valueName?: string
   valueType?: MicrosoftGraphRegistryValueType
   "@odata.type"?: string
}
export interface MicrosoftGraphSecureScoreControlStateUpdate{
   assignedTo?: string
   comment?: string
   state?: string
   updatedBy?: string
   updatedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityResource{
   resource?: string
   resourceType?: MicrosoftGraphSecurityResourceType
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityVendorInformation{
   provider?: string
   providerVersion?: string
   subProvider?: string
   vendor?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUriClickSecurityState{
   clickAction?: string
   clickDateTime?: string
   id?: string
   sourceId?: string
   uriDomain?: string
   verdict?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphUserSecurityState{
   aadUserId?: string
   accountName?: string
   domainName?: string
   emailRole?: MicrosoftGraphEmailRole
   isVpn?: boolean
   logonDateTime?: string
   logonId?: string
   logonIp?: string
   logonLocation?: string
   logonType?: MicrosoftGraphLogonType
   onPremisesSecurityIdentifier?: string
   riskScore?: string
   userAccountType?: MicrosoftGraphUserAccountSecurityType
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphVulnerabilityState{
   cve?: string
   severity?: string
   wasRunning?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphParticipantJoiningResponse{
   "@odata.type"?: string
}
export interface MicrosoftGraphAcceptJoinResponse extends MicrosoftGraphParticipantJoiningResponse{
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaConfig{
   "@odata.type"?: string
}
export interface MicrosoftGraphAppHostedMediaConfig extends MicrosoftGraphMediaConfig{
   blob?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAttendanceInterval{
   durationInSeconds?: number
   joinDateTime?: string
   leaveDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAudioConferencing{
   conferenceId?: string
   dialinUrl?: string
   tollFreeNumber?: string
   tollFreeNumbers?: string[]
   tollNumber?: string
   tollNumbers?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphBroadcastMeetingCaptionSettings{
   isCaptionEnabled?: boolean
   spokenLanguage?: string
   translationLanguages?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphBroadcastMeetingSettings{
   allowedAudience?: MicrosoftGraphBroadcastMeetingAudience
   captions?: MicrosoftGraphBroadcastMeetingCaptionSettings
   isAttendeeReportEnabled?: boolean
   isQuestionAndAnswerEnabled?: boolean
   isRecordingEnabled?: boolean
   isVideoOnDemandEnabled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphCallMediaState{
   audio?: MicrosoftGraphMediaState
   "@odata.type"?: string
}
export interface MicrosoftGraphCallOptions{
   hideBotAfterEscalation?: boolean
   isContentSharingNotificationEnabled?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRoute{
   final?: {application?: MicrosoftGraphIdentity,device?: MicrosoftGraphIdentity,user?: MicrosoftGraphIdentity,"@odata.type"?: string,}
   original?: {application?: MicrosoftGraphIdentity,device?: MicrosoftGraphIdentity,user?: MicrosoftGraphIdentity,"@odata.type"?: string,}
   routingType?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCallTranscriptionInfo{
   lastModifiedDateTime?: string
   state?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphChatInfo{
   messageId?: string
   replyChainMessageId?: string
   threadId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCommsNotification{
   changeType?: string
   resourceUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCommsNotifications{
   value?: MicrosoftGraphCommsNotification[]
   "@odata.type"?: string
}
export interface MicrosoftGraphIncomingCallOptions extends MicrosoftGraphCallOptions{
   "@odata.type"?: string
}
export interface MicrosoftGraphIncomingContext{
   observedParticipantId?: string
   onBehalfOf?: MicrosoftGraphIdentitySet
   sourceParticipantId?: string
   transferor?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphInvitationParticipantInfo{
   hidden?: boolean
   identity?: {application?: MicrosoftGraphIdentity,device?: MicrosoftGraphIdentity,user?: MicrosoftGraphIdentity,"@odata.type"?: string,}
   participantId?: string
   removeFromDefaultAudioRoutingGroup?: boolean
   replacesCallId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphInviteNewBotResponse extends MicrosoftGraphParticipantJoiningResponse{
   inviteUri?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphLobbyBypassSettings{
   isDialInBypassEnabled?: boolean
   scope?: MicrosoftGraphLobbyBypassScope
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaInfo{
   resourceId?: string
   uri?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPrompt{
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaPrompt extends MicrosoftGraphPrompt{
   mediaInfo?: {resourceId?: string,uri?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphMediaStream{
   direction?: string
   label?: string
   mediaType?: string
   serverMuted?: boolean
   sourceId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMeetingInfo{
   "@odata.type"?: string
}
export interface MicrosoftGraphMeetingParticipantInfo{
   identity?: MicrosoftGraphIdentitySet
   role?: MicrosoftGraphOnlineMeetingRole
   upn?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMeetingParticipants{
   attendees?: MicrosoftGraphMeetingParticipantInfo[]
   organizer?: MicrosoftGraphMeetingParticipantInfo
   "@odata.type"?: string
}
export interface MicrosoftGraphOrganizerMeetingInfo extends MicrosoftGraphMeetingInfo{
   organizer?: {application?: MicrosoftGraphIdentity,device?: MicrosoftGraphIdentity,user?: MicrosoftGraphIdentity,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphOutgoingCallOptions extends MicrosoftGraphCallOptions{
   "@odata.type"?: string
}
export interface MicrosoftGraphParticipantInfo{
   countryCode?: string
   endpointType?: MicrosoftGraphEndpointType
   identity?: {application?: MicrosoftGraphIdentity,device?: MicrosoftGraphIdentity,user?: MicrosoftGraphIdentity,"@odata.type"?: string,}
   languageId?: string
   participantId?: string
   region?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRecordingInfo{
   initiator?: MicrosoftGraphIdentitySet
   recordingStatus?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphRejectJoinResponse extends MicrosoftGraphParticipantJoiningResponse{
   reason?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphServiceHostedMediaConfig extends MicrosoftGraphMediaConfig{
   preFetchMedia?: MicrosoftGraphMediaInfo[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTeleconferenceDeviceMediaQuality{
   averageInboundJitter?: string
   averageInboundPacketLossRateInPercentage?: unknown
   averageInboundRoundTripDelay?: string
   averageOutboundJitter?: string
   averageOutboundPacketLossRateInPercentage?: unknown
   averageOutboundRoundTripDelay?: string
   channelIndex?: number
   inboundPackets?: number
   localIPAddress?: string
   localPort?: number
   maximumInboundJitter?: string
   maximumInboundPacketLossRateInPercentage?: unknown
   maximumInboundRoundTripDelay?: string
   maximumOutboundJitter?: string
   maximumOutboundPacketLossRateInPercentage?: unknown
   maximumOutboundRoundTripDelay?: string
   mediaDuration?: string
   networkLinkSpeedInBytes?: number
   outboundPackets?: number
   remoteIPAddress?: string
   remotePort?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphTeleconferenceDeviceAudioQuality extends MicrosoftGraphTeleconferenceDeviceMediaQuality{
   "@odata.type"?: string
}
export interface MicrosoftGraphTeleconferenceDeviceQuality{
   callChainId?: string
   cloudServiceDeploymentEnvironment?: string
   cloudServiceDeploymentId?: string
   cloudServiceInstanceName?: string
   cloudServiceName?: string
   deviceDescription?: string
   deviceName?: string
   mediaLegId?: string
   mediaQualityList?: {averageInboundJitter?: string,averageInboundPacketLossRateInPercentage?: unknown,averageInboundRoundTripDelay?: string,averageOutboundJitter?: string,averageOutboundPacketLossRateInPercentage?: unknown,averageOutboundRoundTripDelay?: string,channelIndex?: number,inboundPackets?: number,localIPAddress?: string,localPort?: number,maximumInboundJitter?: string,maximumInboundPacketLossRateInPercentage?: unknown,maximumInboundRoundTripDelay?: string,maximumOutboundJitter?: string,maximumOutboundPacketLossRateInPercentage?: unknown,maximumOutboundRoundTripDelay?: string,mediaDuration?: string,networkLinkSpeedInBytes?: number,outboundPackets?: number,remoteIPAddress?: string,remotePort?: number,"@odata.type"?: string,}
   participantId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeleconferenceDeviceVideoQuality extends MicrosoftGraphTeleconferenceDeviceMediaQuality{
   averageInboundBitRate?: unknown
   averageInboundFrameRate?: unknown
   averageOutboundBitRate?: unknown
   averageOutboundFrameRate?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphTeleconferenceDeviceScreenSharingQuality extends MicrosoftGraphTeleconferenceDeviceVideoQuality{
   "@odata.type"?: string
}
export interface MicrosoftGraphTokenMeetingInfo extends MicrosoftGraphMeetingInfo{
   token?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphToneInfo{
   sequenceId?: number
   tone?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphPasswordResetResponse{
   newPassword?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphChangeNotification{
   changeType?: string
   clientState?: string
   encryptedContent?: MicrosoftGraphChangeNotificationEncryptedContent
   id?: string
   lifecycleEvent?: MicrosoftGraphLifecycleEventType
   resource?: string
   resourceData?: MicrosoftGraphResourceData
   subscriptionExpirationDateTime?: string
   subscriptionId?: string
   tenantId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphChangeNotificationEncryptedContent{
   data?: string
   dataKey?: string
   dataSignature?: string
   encryptionCertificateId?: string
   encryptionCertificateThumbprint?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphResourceData{
   "@odata.type"?: string
}
export interface MicrosoftGraphChangeNotificationCollection{
   validationTokens?: string[]
   value?: {changeType?: string,clientState?: string,encryptedContent?: MicrosoftGraphChangeNotificationEncryptedContent,id?: string,lifecycleEvent?: MicrosoftGraphLifecycleEventType,resource?: string,resourceData?: MicrosoftGraphResourceData,subscriptionExpirationDateTime?: string,subscriptionId?: string,tenantId?: string,"@odata.type"?: string,}
   "@odata.type"?: string
}
export interface MicrosoftGraphActionResultPart{
   error?: MicrosoftGraphPublicError
   "@odata.type"?: string
}
export interface MicrosoftGraphAadUserConversationMemberResult extends MicrosoftGraphActionResultPart{
   userId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamworkNotificationRecipient{
   "@odata.type"?: string
}
export interface MicrosoftGraphAadUserNotificationRecipient extends MicrosoftGraphTeamworkNotificationRecipient{
   userId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphEventMessageDetail{
   "@odata.type"?: string
}
export interface MicrosoftGraphCallEndedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   callDuration?: string
   callEventType?: MicrosoftGraphTeamworkCallEventType
   callId?: string
   callParticipants?: MicrosoftGraphCallParticipantInfo[]
   initiator?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphCallParticipantInfo{
   participant?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordingEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   callId?: string
   callRecordingDisplayName?: string
   callRecordingDuration?: string
   callRecordingStatus?: MicrosoftGraphCallRecordingStatus
   callRecordingUrl?: string
   initiator?: MicrosoftGraphIdentitySet
   meetingOrganizer?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphCallStartedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   callEventType?: MicrosoftGraphTeamworkCallEventType
   callId?: string
   initiator?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphCallTranscriptEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   callId?: string
   callTranscriptICalUid?: string
   meetingOrganizer?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphChannelAddedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   channelDisplayName?: string
   channelId?: string
   initiator?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphChannelDeletedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   channelDisplayName?: string
   channelId?: string
   initiator?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphChannelDescriptionUpdatedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   channelDescription?: string
   channelId?: string
   initiator?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphChannelIdentity{
   channelId?: string
   teamId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphChannelRenamedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   channelDisplayName?: string
   channelId?: string
   initiator?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphChannelSetAsFavoriteByDefaultEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   channelId?: string
   initiator?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphChannelUnsetAsFavoriteByDefaultEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   channelId?: string
   initiator?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphChatMessageAttachment{
   content?: string
   contentType?: string
   contentUrl?: string
   id?: string
   name?: string
   thumbnailUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphChatMessageFromIdentitySet extends MicrosoftGraphIdentitySet{
   "@odata.type"?: string
}
export interface MicrosoftGraphChatMessageMention{
   id?: number
   mentioned?: MicrosoftGraphChatMessageMentionedIdentitySet
   mentionText?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphChatMessageMentionedIdentitySet extends MicrosoftGraphIdentitySet{
   conversation?: MicrosoftGraphTeamworkConversationIdentity
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamworkConversationIdentity extends MicrosoftGraphIdentity{
   conversationIdentityType?: MicrosoftGraphTeamworkConversationIdentityType
   "@odata.type"?: string
}
export interface MicrosoftGraphChatMessagePolicyViolation{
   dlpAction?: MicrosoftGraphChatMessagePolicyViolationDlpActionTypes
   justificationText?: string
   policyTip?: MicrosoftGraphChatMessagePolicyViolationPolicyTip
   userAction?: MicrosoftGraphChatMessagePolicyViolationUserActionTypes
   verdictDetails?: MicrosoftGraphChatMessagePolicyViolationVerdictDetailsTypes
   "@odata.type"?: string
}
export interface MicrosoftGraphChatMessagePolicyViolationPolicyTip{
   complianceUrl?: string
   generalText?: string
   matchedConditionDescriptions?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphChatMessageReaction{
   createdDateTime?: string
   reactionType?: string
   user?: MicrosoftGraphChatMessageReactionIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphChatMessageReactionIdentitySet extends MicrosoftGraphIdentitySet{
   "@odata.type"?: string
}
export interface MicrosoftGraphChatRenamedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   chatDisplayName?: string
   chatId?: string
   initiator?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphChatViewpoint{
   isHidden?: boolean
   lastMessageReadDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphConversationMemberRoleUpdatedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   conversationMemberRoles?: string[]
   conversationMemberUser?: MicrosoftGraphTeamworkUserIdentity
   initiator?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamworkUserIdentity extends MicrosoftGraphIdentity{
   userIdentityType?: MicrosoftGraphTeamworkUserIdentityType
   "@odata.type"?: string
}
export interface MicrosoftGraphMeetingPolicyUpdatedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   meetingChatEnabled?: boolean
   meetingChatId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMembersAddedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   members?: MicrosoftGraphTeamworkUserIdentity[]
   visibleHistoryStartDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphMembersDeletedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   members?: MicrosoftGraphTeamworkUserIdentity[]
   "@odata.type"?: string
}
export interface MicrosoftGraphMembersJoinedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   members?: MicrosoftGraphTeamworkUserIdentity[]
   "@odata.type"?: string
}
export interface MicrosoftGraphMembersLeftEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   members?: MicrosoftGraphTeamworkUserIdentity[]
   "@odata.type"?: string
}
export interface MicrosoftGraphMessagePinnedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   eventDateTime?: string
   initiator?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphMessageUnpinnedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   eventDateTime?: string
   initiator?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphOperationError{
   code?: string
   message?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphProvisionChannelEmailResult{
   email?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTabUpdatedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   tabId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamArchivedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   teamId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamClassSettings{
   notifyGuardiansAboutAssignments?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamCreatedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   teamDescription?: string
   teamDisplayName?: string
   teamId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamDescriptionUpdatedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   teamDescription?: string
   teamId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamJoiningDisabledEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   teamId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamJoiningEnabledEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   teamId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamRenamedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   teamDisplayName?: string
   teamId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamsAppInstalledEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   teamsAppDisplayName?: string
   teamsAppId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamsAppRemovedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   teamsAppDisplayName?: string
   teamsAppId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamsAppUpgradedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   teamsAppDisplayName?: string
   teamsAppId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamsTabConfiguration{
   contentUrl?: string
   entityId?: string
   removeUrl?: string
   websiteUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamUnarchivedEventMessageDetail extends MicrosoftGraphEventMessageDetail{
   initiator?: MicrosoftGraphIdentitySet
   teamId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamworkActivityTopic{
   source?: MicrosoftGraphTeamworkActivityTopicSource
   value?: string
   webUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamworkApplicationIdentity extends MicrosoftGraphIdentity{
   applicationIdentityType?: MicrosoftGraphTeamworkApplicationIdentityType
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamworkOnlineMeetingInfo{
   calendarEventId?: string
   joinWebUrl?: string
   organizer?: MicrosoftGraphTeamworkUserIdentity
   "@odata.type"?: string
}
export interface MicrosoftGraphTeamworkTagIdentity extends MicrosoftGraphIdentity{
   "@odata.type"?: string
}
export interface MicrosoftGraphScheduleEntity{
   endDateTime?: string
   startDateTime?: string
   theme?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphShiftItem extends MicrosoftGraphScheduleEntity{
   activities?: MicrosoftGraphShiftActivity[]
   displayName?: string
   notes?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphOpenShiftItem extends MicrosoftGraphShiftItem{
   openSlotCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphShiftActivity{
   code?: string
   displayName?: string
   endDateTime?: string
   isPaid?: boolean
   startDateTime?: string
   theme?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphShiftAvailability{
   recurrence?: MicrosoftGraphPatternedRecurrence
   timeSlots?: MicrosoftGraphTimeRange[]
   timeZone?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTimeRange{
   endTime?: string
   startTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTimeOffItem extends MicrosoftGraphScheduleEntity{
   timeOffReasonId?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphWorkforceIntegrationEncryption{
   protocol?: MicrosoftGraphWorkforceIntegrationEncryptionProtocol
   secret?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphAttachmentInfo{
   attachmentType?: MicrosoftGraphAttachmentType
   contentType?: string
   name?: string
   size?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityCasesRoot extends MicrosoftGraphEntity{
   ediscoveryCases?: MicrosoftGraphSecurityEdiscoveryCase[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityCase extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   displayName?: string
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   status?: MicrosoftGraphSecurityCaseStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityCaseOperation extends MicrosoftGraphEntity{
   action?: MicrosoftGraphSecurityCaseAction
   completedDateTime?: string
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   percentProgress?: number
   resultInfo?: MicrosoftGraphResultInfo
   status?: MicrosoftGraphSecurityCaseOperationStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoveryCase extends MicrosoftGraphSecurityCase{
   closedBy?: MicrosoftGraphIdentitySet
   closedDateTime?: string
   externalId?: string
   custodians?: MicrosoftGraphSecurityEdiscoveryCustodian[]
   noncustodialDataSources?: MicrosoftGraphSecurityEdiscoveryNoncustodialDataSource[]
   operations?: MicrosoftGraphSecurityCaseOperation[]
   reviewSets?: MicrosoftGraphSecurityEdiscoveryReviewSet[]
   searches?: MicrosoftGraphSecurityEdiscoverySearch[]
   settings?: MicrosoftGraphSecurityEdiscoveryCaseSettings
   tags?: MicrosoftGraphSecurityEdiscoveryReviewTag[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityDataSet extends MicrosoftGraphEntity{
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   displayName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityDataSource extends MicrosoftGraphEntity{
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   displayName?: string
   holdStatus?: MicrosoftGraphSecurityDataSourceHoldStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityDataSourceContainer extends MicrosoftGraphEntity{
   createdDateTime?: string
   displayName?: string
   holdStatus?: MicrosoftGraphSecurityDataSourceHoldStatus
   lastModifiedDateTime?: string
   releasedDateTime?: string
   status?: MicrosoftGraphSecurityDataSourceContainerStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoveryAddToReviewSetOperation extends MicrosoftGraphSecurityCaseOperation{
   reviewSet?: MicrosoftGraphSecurityEdiscoveryReviewSet
   search?: MicrosoftGraphSecurityEdiscoverySearch
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoveryReviewSet extends MicrosoftGraphSecurityDataSet{
   queries?: MicrosoftGraphSecurityEdiscoveryReviewSetQuery[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSecuritySearch extends MicrosoftGraphEntity{
   contentQuery?: string
   createdBy?: MicrosoftGraphIdentitySet
   createdDateTime?: string
   description?: string
   displayName?: string
   lastModifiedBy?: MicrosoftGraphIdentitySet
   lastModifiedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoverySearch extends MicrosoftGraphSecuritySearch{
   dataSourceScopes?: MicrosoftGraphSecurityDataSourceScopes
   additionalSources?: MicrosoftGraphSecurityDataSource[]
   addToReviewSetOperation?: MicrosoftGraphSecurityEdiscoveryAddToReviewSetOperation
   custodianSources?: MicrosoftGraphSecurityDataSource[]
   lastEstimateStatisticsOperation?: MicrosoftGraphSecurityEdiscoveryEstimateOperation
   noncustodialSources?: MicrosoftGraphSecurityEdiscoveryNoncustodialDataSource[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoveryCustodian extends MicrosoftGraphSecurityDataSourceContainer{
   acknowledgedDateTime?: string
   email?: string
   lastIndexOperation?: MicrosoftGraphSecurityEdiscoveryIndexOperation
   siteSources?: MicrosoftGraphSecuritySiteSource[]
   unifiedGroupSources?: MicrosoftGraphSecurityUnifiedGroupSource[]
   userSources?: MicrosoftGraphSecurityUserSource[]
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoveryNoncustodialDataSource extends MicrosoftGraphSecurityDataSourceContainer{
   dataSource?: MicrosoftGraphSecurityDataSource
   lastIndexOperation?: MicrosoftGraphSecurityEdiscoveryIndexOperation
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoveryCaseSettings extends MicrosoftGraphEntity{
   ocr?: MicrosoftGraphSecurityOcrSettings
   redundancyDetection?: MicrosoftGraphSecurityRedundancyDetectionSettings
   topicModeling?: MicrosoftGraphSecurityTopicModelingSettings
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityTag extends MicrosoftGraphEntity{
   createdBy?: MicrosoftGraphIdentitySet
   description?: string
   displayName?: string
   lastModifiedDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoveryReviewTag extends MicrosoftGraphSecurityTag{
   childSelectability?: MicrosoftGraphSecurityChildSelectability
   childTags?: MicrosoftGraphSecurityEdiscoveryReviewTag[]
   parent?: MicrosoftGraphSecurityEdiscoveryReviewTag
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoveryIndexOperation extends MicrosoftGraphSecurityCaseOperation{
   "@odata.type"?: string
}
export interface MicrosoftGraphSecuritySiteSource extends MicrosoftGraphSecurityDataSource{
   site?: MicrosoftGraphSite
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityUnifiedGroupSource extends MicrosoftGraphSecurityDataSource{
   includedSources?: MicrosoftGraphSecuritySourceType
   group?: MicrosoftGraphGroup
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityUserSource extends MicrosoftGraphSecurityDataSource{
   email?: string
   includedSources?: MicrosoftGraphSecuritySourceType
   siteWebUrl?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoveryEstimateOperation extends MicrosoftGraphSecurityCaseOperation{
   indexedItemCount?: number
   indexedItemsSize?: number
   mailboxCount?: number
   siteCount?: number
   unindexedItemCount?: number
   unindexedItemsSize?: number
   search?: MicrosoftGraphSecurityEdiscoverySearch
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoveryHoldOperation extends MicrosoftGraphSecurityCaseOperation{
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoveryReviewSetQuery extends MicrosoftGraphSecuritySearch{
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityEdiscoveryTagOperation extends MicrosoftGraphSecurityCaseOperation{
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityOcrSettings{
   isEnabled?: boolean
   maxImageSize?: number
   timeout?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityRedundancyDetectionSettings{
   isEnabled?: boolean
   maxWords?: number
   minWords?: number
   similarityThreshold?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityStringValueDictionary{
   "@odata.type"?: string
}
export interface MicrosoftGraphSecurityTopicModelingSettings{
   dynamicallyAdjustTopicCount?: boolean
   ignoreNumbers?: boolean
   isEnabled?: boolean
   topicCount?: number
   "@odata.type"?: string
}
export interface MicrosoftGraphTermStoreStore extends MicrosoftGraphEntity{
   defaultLanguageTag?: string
   languageTags?: string[]
   groups?: MicrosoftGraphTermStoreGroup[]
   sets?: MicrosoftGraphTermStoreSet[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTermStoreGroup extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   displayName?: string
   parentSiteId?: string
   scope?: MicrosoftGraphTermStoreTermGroupScope
   sets?: MicrosoftGraphTermStoreSet[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTermStoreSet extends MicrosoftGraphEntity{
   createdDateTime?: string
   description?: string
   localizedNames?: MicrosoftGraphTermStoreLocalizedName[]
   properties?: MicrosoftGraphKeyValue[]
   children?: MicrosoftGraphTermStoreTerm[]
   parentGroup?: MicrosoftGraphTermStoreGroup
   relations?: MicrosoftGraphTermStoreRelation[]
   terms?: MicrosoftGraphTermStoreTerm[]
   "@odata.type"?: string
}
export interface MicrosoftGraphTermStoreRelation extends MicrosoftGraphEntity{
   relationship?: MicrosoftGraphTermStoreRelationType
   fromTerm?: MicrosoftGraphTermStoreTerm
   set?: MicrosoftGraphTermStoreSet
   toTerm?: MicrosoftGraphTermStoreTerm
   "@odata.type"?: string
}
export interface MicrosoftGraphTermStoreTerm extends MicrosoftGraphEntity{
   createdDateTime?: string
   descriptions?: MicrosoftGraphTermStoreLocalizedDescription[]
   labels?: MicrosoftGraphTermStoreLocalizedLabel[]
   lastModifiedDateTime?: string
   properties?: MicrosoftGraphKeyValue[]
   children?: MicrosoftGraphTermStoreTerm[]
   relations?: MicrosoftGraphTermStoreRelation[]
   set?: MicrosoftGraphTermStoreSet
   "@odata.type"?: string
}
export interface MicrosoftGraphTermStoreLocalizedDescription{
   description?: string
   languageTag?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTermStoreLocalizedLabel{
   isDefault?: boolean
   languageTag?: string
   name?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphTermStoreLocalizedName{
   languageTag?: string
   name?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsCallRecord extends MicrosoftGraphEntity{
   endDateTime?: string
   joinWebUrl?: string
   lastModifiedDateTime?: string
   modalities?: string[]
   organizer?: MicrosoftGraphIdentitySet
   participants?: MicrosoftGraphIdentitySet[]
   startDateTime?: string
   type?: string
   version?: number
   sessions?: MicrosoftGraphCallRecordsSession[]
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsSession extends MicrosoftGraphEntity{
   callee?: MicrosoftGraphCallRecordsEndpoint
   caller?: MicrosoftGraphCallRecordsEndpoint
   endDateTime?: string
   failureInfo?: MicrosoftGraphCallRecordsFailureInfo
   modalities?: string[]
   startDateTime?: string
   segments?: MicrosoftGraphCallRecordsSegment[]
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsSegment extends MicrosoftGraphEntity{
   callee?: MicrosoftGraphCallRecordsEndpoint
   caller?: MicrosoftGraphCallRecordsEndpoint
   endDateTime?: string
   failureInfo?: MicrosoftGraphCallRecordsFailureInfo
   media?: MicrosoftGraphCallRecordsMedia[]
   startDateTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsUserAgent{
   applicationVersion?: string
   headerValue?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsClientUserAgent extends MicrosoftGraphCallRecordsUserAgent{
   azureADAppId?: string
   communicationServiceId?: string
   platform?: string
   productFamily?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsDeviceInfo{
   captureDeviceDriver?: string
   captureDeviceName?: string
   captureNotFunctioningEventRatio?: unknown
   cpuInsufficentEventRatio?: unknown
   deviceClippingEventRatio?: unknown
   deviceGlitchEventRatio?: unknown
   howlingEventCount?: number
   initialSignalLevelRootMeanSquare?: unknown
   lowSpeechLevelEventRatio?: unknown
   lowSpeechToNoiseEventRatio?: unknown
   micGlitchRate?: unknown
   receivedNoiseLevel?: number
   receivedSignalLevel?: number
   renderDeviceDriver?: string
   renderDeviceName?: string
   renderMuteEventRatio?: unknown
   renderNotFunctioningEventRatio?: unknown
   renderZeroVolumeEventRatio?: unknown
   sentNoiseLevel?: number
   sentSignalLevel?: number
   speakerGlitchRate?: unknown
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsDirectRoutingLogRow{
   calleeNumber?: string
   callEndSubReason?: number
   callerNumber?: string
   callType?: string
   correlationId?: string
   duration?: number
   endDateTime?: string
   failureDateTime?: string
   finalSipCode?: number
   finalSipCodePhrase?: string
   id?: string
   inviteDateTime?: string
   mediaBypassEnabled?: boolean
   mediaPathLocation?: string
   signalingLocation?: string
   startDateTime?: string
   successfulCall?: boolean
   trunkFullyQualifiedDomainName?: string
   userDisplayName?: string
   userId?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsEndpoint{
   userAgent?: MicrosoftGraphCallRecordsUserAgent
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsFailureInfo{
   reason?: string
   stage?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsFeedbackTokenSet{
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsMedia{
   calleeDevice?: MicrosoftGraphCallRecordsDeviceInfo
   calleeNetwork?: MicrosoftGraphCallRecordsNetworkInfo
   callerDevice?: MicrosoftGraphCallRecordsDeviceInfo
   callerNetwork?: MicrosoftGraphCallRecordsNetworkInfo
   label?: string
   streams?: MicrosoftGraphCallRecordsMediaStream[]
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsNetworkInfo{
   bandwidthLowEventRatio?: unknown
   basicServiceSetIdentifier?: string
   connectionType?: string
   delayEventRatio?: unknown
   dnsSuffix?: string
   ipAddress?: string
   linkSpeed?: number
   macAddress?: string
   networkTransportProtocol?: string
   port?: number
   receivedQualityEventRatio?: unknown
   reflexiveIPAddress?: string
   relayIPAddress?: string
   relayPort?: number
   sentQualityEventRatio?: unknown
   subnet?: string
   traceRouteHops?: {hopCount?: number,ipAddress?: string,roundTripTime?: string,"@odata.type"?: string,}
   wifiBand?: string
   wifiBatteryCharge?: number
   wifiChannel?: number
   wifiMicrosoftDriver?: string
   wifiMicrosoftDriverVersion?: string
   wifiRadioType?: string
   wifiSignalStrength?: number
   wifiVendorDriver?: string
   wifiVendorDriverVersion?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsMediaStream{
   audioCodec?: MicrosoftGraphCallRecordsAudioCodec
   averageAudioDegradation?: unknown
   averageAudioNetworkJitter?: string
   averageBandwidthEstimate?: number
   averageJitter?: string
   averagePacketLossRate?: unknown
   averageRatioOfConcealedSamples?: unknown
   averageReceivedFrameRate?: unknown
   averageRoundTripTime?: string
   averageVideoFrameLossPercentage?: unknown
   averageVideoFrameRate?: unknown
   averageVideoPacketLossRate?: unknown
   endDateTime?: string
   lowFrameRateRatio?: unknown
   lowVideoProcessingCapabilityRatio?: unknown
   maxAudioNetworkJitter?: string
   maxJitter?: string
   maxPacketLossRate?: unknown
   maxRatioOfConcealedSamples?: unknown
   maxRoundTripTime?: string
   packetUtilization?: number
   postForwardErrorCorrectionPacketLossRate?: unknown
   startDateTime?: string
   streamDirection?: string
   streamId?: string
   videoCodec?: MicrosoftGraphCallRecordsVideoCodec
   wasMediaBypassed?: boolean
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsTraceRouteHop{
   hopCount?: number
   ipAddress?: string
   roundTripTime?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsParticipantEndpoint extends MicrosoftGraphCallRecordsEndpoint{
   feedback?: MicrosoftGraphCallRecordsUserFeedback
   identity?: MicrosoftGraphIdentitySet
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsUserFeedback{
   rating?: string
   text?: string
   tokens?: MicrosoftGraphCallRecordsFeedbackTokenSet
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsPstnCallLogRow{
   callDurationSource?: MicrosoftGraphCallRecordsPstnCallDurationSource
   calleeNumber?: string
   callerNumber?: string
   callId?: string
   callType?: string
   charge?: number
   conferenceId?: string
   connectionCharge?: number
   currency?: string
   destinationContext?: string
   destinationName?: string
   duration?: number
   endDateTime?: string
   id?: string
   inventoryType?: string
   licenseCapability?: string
   operator?: string
   startDateTime?: string
   tenantCountryCode?: string
   usageCountryCode?: string
   userDisplayName?: string
   userId?: string
   userPrincipalName?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsServiceEndpoint extends MicrosoftGraphCallRecordsEndpoint{
   "@odata.type"?: string
}
export interface MicrosoftGraphCallRecordsServiceUserAgent extends MicrosoftGraphCallRecordsUserAgent{
   role?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalConnectorsConnectionOperation extends MicrosoftGraphEntity{
   error?: MicrosoftGraphPublicError
   status?: MicrosoftGraphExternalConnectorsConnectionOperationStatus
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalConnectorsExternal{
   connections?: MicrosoftGraphExternalConnectorsExternalConnection[]
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalConnectorsExternalConnection extends MicrosoftGraphEntity{
   configuration?: MicrosoftGraphExternalConnectorsConfiguration
   description?: string
   name?: string
   state?: MicrosoftGraphExternalConnectorsConnectionState
   groups?: MicrosoftGraphExternalConnectorsExternalGroup[]
   items?: MicrosoftGraphExternalConnectorsExternalItem[]
   operations?: MicrosoftGraphExternalConnectorsConnectionOperation[]
   schema?: MicrosoftGraphExternalConnectorsSchema
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalConnectorsExternalGroup extends MicrosoftGraphEntity{
   description?: string
   displayName?: string
   members?: MicrosoftGraphExternalConnectorsIdentity[]
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalConnectorsExternalItem extends MicrosoftGraphEntity{
   acl?: MicrosoftGraphExternalConnectorsAcl[]
   content?: MicrosoftGraphExternalConnectorsExternalItemContent
   properties?: MicrosoftGraphExternalConnectorsProperties
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalConnectorsSchema extends MicrosoftGraphEntity{
   baseType?: string
   properties?: MicrosoftGraphExternalConnectorsProperty[]
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalConnectorsIdentity extends MicrosoftGraphEntity{
   type?: MicrosoftGraphExternalConnectorsIdentityType
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalConnectorsAcl{
   accessType?: string
   type?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalConnectorsConfiguration{
   authorizedAppIds?: string[]
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalConnectorsExternalItemContent{
   type?: string
   value?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalConnectorsProperties{
   "@odata.type"?: string
}
export interface MicrosoftGraphExternalConnectorsProperty{
   aliases?: string[]
   isQueryable?: boolean
   isRefinable?: boolean
   isRetrievable?: boolean
   isSearchable?: boolean
   labels?: MicrosoftGraphExternalConnectorsLabel[]
   name?: string
   type?: string
   "@odata.type"?: string
}
export interface MicrosoftGraphODataErrorsODataError{
   error?: {code?: string,message?: string,target?: string,details?: {code?: string,message?: string,target?: string,},innererror?: {requestid?: string,clientrequestid?: string,"Date"?: string,"@odata.type"?: string,},}
}
export interface MicrosoftGraphODataErrorsMainError{
   code?: string
   message?: string
   target?: string
   details?: {code?: string,message?: string,target?: string,}
   innererror?: {requestid?: string,clientrequestid?: string,"Date"?: string,"@odata.type"?: string,}
}
export interface MicrosoftGraphODataErrorsErrorDetails{
   code?: string
   message?: string
   target?: string
}
export interface MicrosoftGraphODataErrorsInnerError{
   requestid?: string
   clientrequestid?: string
   "Date"?: string
   "@odata.type"?: string
}
export interface ReferenceUpdate{
   "@odata.id"?: string
   "@odata.type"?: string
}
export interface ReferenceCreate{
   "@odata.id"?: string
}
export interface BaseCollectionPaginationCountResponse{
   "@odata.count"?: number
   "@odata.nextLink"?: string
}
export interface BaseDeltaFunctionResponse{
   "@odata.nextLink"?: string
   "@odata.deltaLink"?: string
}
export type MicrosoftGraphAppliedConditionalAccessPolicyResult = "success" | "failure" | "notApplied" | "notEnabled" | "unknown" | "unknownFutureValue"
export type MicrosoftGraphConditionalAccessStatus = "success" | "failure" | "notApplied" | "unknownFutureValue"
export type MicrosoftGraphGroupType = "unifiedGroups" | "azureAD" | "unknownFutureValue"
export type MicrosoftGraphInitiatorType = "user" | "application" | "system" | "unknownFutureValue"
export type MicrosoftGraphOperationResult = "success" | "failure" | "timeout" | "unknownFutureValue"
export type MicrosoftGraphProvisioningAction = "other" | "create" | "delete" | "disable" | "update" | "stagedDelete" | "unknownFutureValue"
export type MicrosoftGraphProvisioningResult = "success" | "failure" | "skipped" | "warning" | "unknownFutureValue"
export type MicrosoftGraphProvisioningStatusErrorCategory = "failure" | "nonServiceFailure" | "success" | "unknownFutureValue"
export type MicrosoftGraphProvisioningStepType = "import" | "scoping" | "matching" | "processing" | "referenceResolution" | "export" | "unknownFutureValue"
export type MicrosoftGraphRiskDetail = "none" | "adminGeneratedTemporaryPassword" | "userPerformedSecuredPasswordChange" | "userPerformedSecuredPasswordReset" | "adminConfirmedSigninSafe" | "aiConfirmedSigninSafe" | "userPassedMFADrivenByRiskBasedPolicy" | "adminDismissedAllRiskForUser" | "adminConfirmedSigninCompromised" | "hidden" | "adminConfirmedUserCompromised" | "unknownFutureValue" | "m365DAdminDismissedDetection"
export type MicrosoftGraphRiskEventType = "unlikelyTravel" | "anonymizedIPAddress" | "maliciousIPAddress" | "unfamiliarFeatures" | "malwareInfectedIPAddress" | "suspiciousIPAddress" | "leakedCredentials" | "investigationsThreatIntelligence" | "generic" | "adminConfirmedUserCompromised" | "mcasImpossibleTravel" | "mcasSuspiciousInboxManipulationRules" | "investigationsThreatIntelligenceSigninLinked" | "maliciousIPAddressValidCredentialsBlockedIP" | "unknownFutureValue"
export type MicrosoftGraphRiskLevel = "low" | "medium" | "high" | "hidden" | "none" | "unknownFutureValue"
export type MicrosoftGraphRiskState = "none" | "confirmedSafe" | "remediated" | "dismissed" | "atRisk" | "confirmedCompromised" | "unknownFutureValue"
export type MicrosoftGraphAdvancedConfigState = "default" | "enabled" | "disabled" | "unknownFutureValue"
export type MicrosoftGraphAuthenticationMethodState = "enabled" | "disabled"
export type MicrosoftGraphAuthenticationMethodTargetType = "user" | "group" | "unknownFutureValue"
export type MicrosoftGraphExternalEmailOtpState = "default" | "enabled" | "disabled" | "unknownFutureValue"
export type MicrosoftGraphFeatureTargetType = "group" | "administrativeUnit" | "role" | "unknownFutureValue"
export type MicrosoftGraphFido2RestrictionEnforcementType = "allow" | "block" | "unknownFutureValue"
export type MicrosoftGraphMicrosoftAuthenticatorAuthenticationMode = "deviceBasedPush" | "push" | "any"
export type MicrosoftGraphX509CertificateAuthenticationMode = "x509CertificateSingleFactor" | "x509CertificateMultiFactor" | "unknownFutureValue"
export type MicrosoftGraphX509CertificateRuleType = "issuerSubject" | "policyOID" | "unknownFutureValue"
export type MicrosoftGraphVolumeType = "operatingSystemVolume" | "fixedDataVolume" | "removableDataVolume" | "unknownFutureValue"
export type MicrosoftGraphAnswerInputType = "text" | "radioButton" | "unknownFutureValue"
export type MicrosoftGraphBookingPriceType = "undefined" | "fixedPrice" | "startingAt" | "hourly" | "free" | "priceVaries" | "callUs" | "notSet" | "unknownFutureValue"
export type MicrosoftGraphBookingReminderRecipients = "allAttendees" | "staff" | "customer" | "unknownFutureValue"
export type MicrosoftGraphBookingsAvailabilityStatus = "available" | "busy" | "slotsAvailable" | "outOfOffice" | "unknownFutureValue"
export type MicrosoftGraphBookingStaffRole = "guest" | "administrator" | "viewer" | "externalGuest" | "unknownFutureValue" | "scheduler" | "teamMember"
export type MicrosoftGraphDayOfWeek = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday"
export type MicrosoftGraphLocationType = "default" | "conferenceRoom" | "homeAddress" | "businessAddress" | "geoCoordinates" | "streetAddress" | "hotel" | "restaurant" | "localBusiness" | "postalAddress"
export type MicrosoftGraphLocationUniqueIdType = "unknown" | "locationStore" | "directory" | "private" | "bing"
export type MicrosoftGraphPhoneType = "home" | "business" | "mobile" | "other" | "assistant" | "homeFax" | "businessFax" | "otherFax" | "pager" | "radio"
export type MicrosoftGraphPhysicalAddressType = "unknown" | "home" | "business" | "other"
export type MicrosoftGraphBodyType = "text" | "html"
export type MicrosoftGraphDataSubjectType = "customer" | "currentEmployee" | "formerEmployee" | "prospectiveEmployee" | "student" | "teacher" | "faculty" | "other" | "unknownFutureValue"
export type MicrosoftGraphSubjectRightsRequestStage = "contentRetrieval" | "contentReview" | "generateReport" | "contentDeletion" | "caseResolved" | "contentEstimate" | "unknownFutureValue"
export type MicrosoftGraphSubjectRightsRequestStageStatus = "notStarted" | "current" | "completed" | "failed" | "unknownFutureValue"
export type MicrosoftGraphSubjectRightsRequestStatus = "active" | "closed" | "unknownFutureValue"
export type MicrosoftGraphSubjectRightsRequestType = "export" | "delete" | "access" | "tagForAction" | "unknownFutureValue"
export type MicrosoftGraphIdentityUserFlowAttributeDataType = "string" | "boolean" | "int64" | "stringCollection" | "dateTime" | "unknownFutureValue"
export type MicrosoftGraphIdentityUserFlowAttributeInputType = "textBox" | "dateTimeDropdown" | "radioSingleSelect" | "dropdownSingleSelect" | "emailBox" | "checkboxMultiSelect"
export type MicrosoftGraphIdentityUserFlowAttributeType = "builtIn" | "custom" | "required" | "unknownFutureValue"
export type MicrosoftGraphUserFlowType = "signUp" | "signIn" | "signUpOrSignIn" | "passwordReset" | "profileUpdate" | "resourceOwner" | "unknownFutureValue"
export type MicrosoftGraphAllowInvitesFrom = "none" | "adminsAndGuestInviters" | "adminsGuestInvitersAndAllMembers" | "everyone" | "unknownFutureValue"
export type MicrosoftGraphAuthenticationProtocol = "wsFed" | "saml" | "unknownFutureValue"
export type MicrosoftGraphCrossTenantAccessPolicyTargetConfigurationAccessType = "allowed" | "blocked" | "unknownFutureValue"
export type MicrosoftGraphCrossTenantAccessPolicyTargetType = "user" | "group" | "application" | "unknownFutureValue"
export type MicrosoftGraphFederatedIdpMfaBehavior = "acceptIfMfaDoneByFederatedIdp" | "enforceMfaByFederatedIdp" | "rejectMfaByFederatedIdp" | "unknownFutureValue"
export type MicrosoftGraphPermissionClassificationType = "low" | "medium" | "high" | "unknownFutureValue"
export type MicrosoftGraphPermissionType = "application" | "delegated" | "delegatedUserConsentable"
export type MicrosoftGraphPromptLoginBehavior = "translateToFreshPasswordAuthentication" | "nativeSupport" | "disabled" | "unknownFutureValue"
export type MicrosoftGraphEducationAddedStudentAction = "none" | "assignIfOpen" | "unknownFutureValue"
export type MicrosoftGraphEducationAddToCalendarOptions = "none" | "studentsAndPublisher" | "studentsAndTeamOwners" | "unknownFutureValue" | "studentsOnly"
export type MicrosoftGraphEducationAssignmentStatus = "draft" | "published" | "assigned" | "unknownFutureValue"
export type MicrosoftGraphEducationSubmissionStatus = "working" | "submitted" | "released" | "returned" | "unknownFutureValue" | "reassigned"
export type MicrosoftGraphContactRelationship = "parent" | "relative" | "aide" | "doctor" | "guardian" | "child" | "other" | "unknownFutureValue"
export type MicrosoftGraphEducationExternalSource = "sis" | "manual" | "unknownFutureValue"
export type MicrosoftGraphEducationGender = "female" | "male" | "other" | "unknownFutureValue"
export type MicrosoftGraphEducationUserRole = "student" | "teacher" | "none" | "unknownFutureValue"
export type MicrosoftGraphWorkbookOperationStatus = "notStarted" | "running" | "succeeded" | "failed"
export type MicrosoftGraphActivityDomain = "unknown" | "work" | "personal" | "unrestricted"
export type MicrosoftGraphAttendeeType = "required" | "optional" | "resource"
export type MicrosoftGraphFreeBusyStatus = "unknown" | "free" | "tentative" | "busy" | "oof" | "workingElsewhere"
export type MicrosoftGraphBookingType = "unknown" | "standard" | "reserved"
export type MicrosoftGraphAttachmentType = "file" | "item" | "reference"
export type MicrosoftGraphAutomaticRepliesStatus = "disabled" | "alwaysEnabled" | "scheduled"
export type MicrosoftGraphCalendarColor = "auto" | "lightBlue" | "lightGreen" | "lightOrange" | "lightGray" | "lightYellow" | "lightTeal" | "lightPink" | "lightBrown" | "lightRed" | "maxColor"
export type MicrosoftGraphCalendarRoleType = "none" | "freeBusyRead" | "limitedRead" | "read" | "write" | "delegateWithoutPrivateEventAccess" | "delegateWithPrivateEventAccess" | "custom"
export type MicrosoftGraphCalendarSharingAction = "accept" | "acceptAndViewCalendar" | "viewCalendar" | "addThisCalendar"
export type MicrosoftGraphCalendarSharingActionImportance = "primary" | "secondary"
export type MicrosoftGraphCalendarSharingActionType = "accept"
export type MicrosoftGraphCategoryColor = "none" | "preset0" | "preset1" | "preset2" | "preset3" | "preset4" | "preset5" | "preset6" | "preset7" | "preset8" | "preset9" | "preset10" | "preset11" | "preset12" | "preset13" | "preset14" | "preset15" | "preset16" | "preset17" | "preset18" | "preset19" | "preset20" | "preset21" | "preset22" | "preset23" | "preset24"
export type MicrosoftGraphDelegateMeetingMessageDeliveryOptions = "sendToDelegateAndInformationToPrincipal" | "sendToDelegateAndPrincipal" | "sendToDelegateOnly"
export type MicrosoftGraphEventType = "singleInstance" | "occurrence" | "exception" | "seriesMaster"
export type MicrosoftGraphExchangeIdFormat = "entryId" | "ewsId" | "immutableEntryId" | "restId" | "restImmutableEntryId"
export type MicrosoftGraphExternalAudienceScope = "none" | "contactsOnly" | "all"
export type MicrosoftGraphFollowupFlagStatus = "notFlagged" | "complete" | "flagged"
export type MicrosoftGraphImportance = "low" | "normal" | "high"
export type MicrosoftGraphInferenceClassificationType = "focused" | "other"
export type MicrosoftGraphMailTipsType = "automaticReplies" | "mailboxFullStatus" | "customMailTip" | "externalMemberCount" | "totalMemberCount" | "maxMessageSize" | "deliveryRestriction" | "moderationStatus" | "recipientScope" | "recipientSuggestions"
export type MicrosoftGraphMeetingMessageType = "none" | "meetingRequest" | "meetingCancelled" | "meetingAccepted" | "meetingTenativelyAccepted" | "meetingDeclined"
export type MicrosoftGraphMeetingRequestType = "none" | "newMeetingRequest" | "fullUpdate" | "informationalUpdate" | "silentUpdate" | "outdated" | "principalWantsCopy"
export type MicrosoftGraphMessageActionFlag = "any" | "call" | "doNotForward" | "followUp" | "fyi" | "forward" | "noResponseNecessary" | "read" | "reply" | "replyToAll" | "review"
export type MicrosoftGraphOnlineMeetingProviderType = "unknown" | "skypeForBusiness" | "skypeForConsumer" | "teamsForBusiness"
export type MicrosoftGraphRecipientScopeType = "none" | "internal" | "external" | "externalPartner" | "externalNonPartner"
export type MicrosoftGraphRecurrencePatternType = "daily" | "weekly" | "absoluteMonthly" | "relativeMonthly" | "absoluteYearly" | "relativeYearly"
export type MicrosoftGraphRecurrenceRangeType = "endDate" | "noEnd" | "numbered"
export type MicrosoftGraphResponseType = "none" | "organizer" | "tentativelyAccepted" | "accepted" | "declined" | "notResponded"
export type MicrosoftGraphSelectionLikelihoodInfo = "notSpecified" | "high"
export type MicrosoftGraphSensitivity = "normal" | "personal" | "private" | "confidential"
export type MicrosoftGraphTimeZoneStandard = "windows" | "iana"
export type MicrosoftGraphUserPurpose = "user" | "linked" | "shared" | "room" | "equipment" | "others" | "unknownFutureValue"
export type MicrosoftGraphWebsiteType = "other" | "home" | "work" | "blog" | "profile"
export type MicrosoftGraphWeekIndex = "first" | "second" | "third" | "fourth" | "last"
export type MicrosoftGraphColumnTypes = "note" | "text" | "choice" | "multichoice" | "number" | "currency" | "dateTime" | "lookup" | "boolean" | "user" | "url" | "calculated" | "location" | "geolocation" | "term" | "multiterm" | "thumbnail" | "approvalStatus" | "unknownFutureValue"
export type MicrosoftGraphLongRunningOperationStatus = "notStarted" | "running" | "succeeded" | "failed" | "unknownFutureValue"
export type MicrosoftGraphStagedFeatureName = "passthroughAuthentication" | "seamlessSso" | "passwordHashSync" | "emailAsAlternateId" | "unknownFutureValue" | "certificateBasedAuthentication" | "multiFactorAuthentication"
export type MicrosoftGraphAccessReviewHistoryDecisionFilter = "approve" | "deny" | "notReviewed" | "dontKnow" | "notNotified" | "unknownFutureValue"
export type MicrosoftGraphAccessReviewHistoryStatus = "done" | "inprogress" | "error" | "requested" | "unknownFutureValue"
export type MicrosoftGraphAccessReviewInstanceDecisionItemFilterByCurrentUserOptions = "reviewer" | "unknownFutureValue"
export type MicrosoftGraphAccessReviewInstanceFilterByCurrentUserOptions = "reviewer" | "unknownFutureValue"
export type MicrosoftGraphAccessReviewScheduleDefinitionFilterByCurrentUserOptions = "reviewer" | "unknownFutureValue"
export type MicrosoftGraphAccessReviewStageFilterByCurrentUserOptions = "reviewer" | "unknownFutureValue"
export type MicrosoftGraphApprovalFilterByCurrentUserOptions = "target" | "createdBy" | "approver" | "unknownFutureValue"
export type MicrosoftGraphConsentRequestFilterByCurrentUserOptions = "reviewer" | "unknownFutureValue"
export type MicrosoftGraphAgreementAcceptanceState = "accepted" | "declined" | "unknownFutureValue"
export type MicrosoftGraphActivityType = "signin" | "user" | "unknownFutureValue"
export type MicrosoftGraphCloudAppSecuritySessionControlType = "mcasConfigured" | "monitorOnly" | "blockDownloads" | "unknownFutureValue"
export type MicrosoftGraphConditionalAccessClientApp = "all" | "browser" | "mobileAppsAndDesktopClients" | "exchangeActiveSync" | "easSupported" | "other" | "unknownFutureValue"
export type MicrosoftGraphConditionalAccessDevicePlatform = "android" | "iOS" | "windows" | "windowsPhone" | "macOS" | "all" | "unknownFutureValue" | "linux"
export type MicrosoftGraphConditionalAccessGrantControl = "block" | "mfa" | "compliantDevice" | "domainJoinedDevice" | "approvedApplication" | "compliantApplication" | "passwordChange" | "unknownFutureValue"
export type MicrosoftGraphConditionalAccessPolicyState = "enabled" | "disabled" | "enabledForReportingButNotEnforced"
export type MicrosoftGraphCountryLookupMethodType = "clientIpAddress" | "authenticatorAppGps" | "unknownFutureValue"
export type MicrosoftGraphFilterMode = "include" | "exclude"
export type MicrosoftGraphPersistentBrowserSessionMode = "always" | "never"
export type MicrosoftGraphRiskDetectionTimingType = "notDefined" | "realtime" | "nearRealtime" | "offline" | "unknownFutureValue"
export type MicrosoftGraphSignInFrequencyAuthenticationType = "primaryAndSecondaryAuthentication" | "secondaryAuthentication" | "unknownFutureValue"
export type MicrosoftGraphSignInFrequencyInterval = "timeBased" | "everyTime" | "unknownFutureValue"
export type MicrosoftGraphSigninFrequencyType = "days" | "hours"
export type MicrosoftGraphTemplateScenarios = "new" | "secureFoundation" | "zeroTrust" | "remoteWork" | "protectAdmins" | "emergingThreats" | "unknownFutureValue"
export type MicrosoftGraphTokenIssuerType = "AzureAD" | "ADFederationServices" | "UnknownFutureValue" | "AzureADBackupAuth" | "ADFederationServicesMFAAdapter" | "NPSExtension"
export type MicrosoftGraphAccessPackageAssignmentFilterByCurrentUserOptions = "target" | "createdBy" | "unknownFutureValue"
export type MicrosoftGraphAccessPackageAssignmentRequestFilterByCurrentUserOptions = "target" | "createdBy" | "approver" | "unknownFutureValue"
export type MicrosoftGraphAccessPackageAssignmentState = "delivering" | "partiallyDelivered" | "delivered" | "expired" | "deliveryFailed" | "unknownFutureValue"
export type MicrosoftGraphAccessPackageCatalogState = "unpublished" | "published" | "unknownFutureValue"
export type MicrosoftGraphAccessPackageCatalogType = "userManaged" | "serviceDefault" | "serviceManaged" | "unknownFutureValue"
export type MicrosoftGraphAccessPackageExternalUserLifecycleAction = "none" | "blockSignIn" | "blockSignInAndDelete" | "unknownFutureValue"
export type MicrosoftGraphAccessPackageFilterByCurrentUserOptions = "allowedRequestor" | "unknownFutureValue"
export type MicrosoftGraphAccessPackageRequestState = "submitted" | "pendingApproval" | "delivering" | "delivered" | "deliveryFailed" | "denied" | "scheduled" | "canceled" | "partiallyDelivered" | "unknownFutureValue"
export type MicrosoftGraphAccessPackageRequestType = "notSpecified" | "userAdd" | "userUpdate" | "userRemove" | "adminAdd" | "adminUpdate" | "adminRemove" | "systemAdd" | "systemUpdate" | "systemRemove" | "onBehalfAdd" | "unknownFutureValue"
export type MicrosoftGraphAccessPackageSubjectType = "notSpecified" | "user" | "servicePrincipal" | "unknownFutureValue"
export type MicrosoftGraphAccessReviewExpirationBehavior = "keepAccess" | "removeAccess" | "acceptAccessRecommendation" | "unknownFutureValue"
export type MicrosoftGraphAllowedTargetScope = "notSpecified" | "specificDirectoryUsers" | "specificConnectedOrganizationUsers" | "specificDirectoryServicePrincipals" | "allMemberUsers" | "allDirectoryUsers" | "allDirectoryServicePrincipals" | "allConfiguredConnectedOrganizationUsers" | "allExternalUsers" | "unknownFutureValue"
export type MicrosoftGraphExpirationPatternType = "notSpecified" | "noExpiration" | "afterDateTime" | "afterDuration"
export type MicrosoftGraphConnectedOrganizationState = "configured" | "proposed" | "unknownFutureValue"
export type MicrosoftGraphComplianceStatus = "unknown" | "notApplicable" | "compliant" | "remediated" | "nonCompliant" | "error" | "conflict" | "notAssigned"
export type MicrosoftGraphInstallIntent = "available" | "required" | "uninstall" | "availableWithoutEnrollment"
export type MicrosoftGraphManagedAppAvailability = "global" | "lineOfBusiness"
export type MicrosoftGraphMdmAppConfigKeyType = "stringType" | "integerType" | "realType" | "booleanType" | "tokenType"
export type MicrosoftGraphMicrosoftStoreForBusinessLicenseType = "offline" | "online"
export type MicrosoftGraphMobileAppContentFileUploadState = "success" | "transientError" | "error" | "unknown" | "azureStorageUriRequestSuccess" | "azureStorageUriRequestPending" | "azureStorageUriRequestFailed" | "azureStorageUriRequestTimedOut" | "azureStorageUriRenewalSuccess" | "azureStorageUriRenewalPending" | "azureStorageUriRenewalFailed" | "azureStorageUriRenewalTimedOut" | "commitFileSuccess" | "commitFilePending" | "commitFileFailed" | "commitFileTimedOut"
export type MicrosoftGraphMobileAppPublishingState = "notPublished" | "processing" | "published"
export type MicrosoftGraphRunAsAccountType = "system" | "user"
export type MicrosoftGraphVppTokenAccountType = "business" | "education"
export type MicrosoftGraphWin32LobAppDeliveryOptimizationPriority = "notConfigured" | "foreground"
export type MicrosoftGraphWin32LobAppFileSystemOperationType = "notConfigured" | "exists" | "modifiedDate" | "createdDate" | "version" | "sizeInMB"
export type MicrosoftGraphWin32LobAppMsiPackageType = "perMachine" | "perUser" | "dualPurpose"
export type MicrosoftGraphWin32LobAppNotification = "showAll" | "showReboot" | "hideAll"
export type MicrosoftGraphWin32LobAppPowerShellScriptRuleOperationType = "notConfigured" | "string" | "dateTime" | "integer" | "float" | "version" | "boolean"
export type MicrosoftGraphWin32LobAppRegistryRuleOperationType = "notConfigured" | "exists" | "doesNotExist" | "string" | "integer" | "version"
export type MicrosoftGraphWin32LobAppRestartBehavior = "basedOnReturnCode" | "allow" | "suppress" | "force"
export type MicrosoftGraphWin32LobAppReturnCodeType = "failed" | "success" | "softReboot" | "hardReboot" | "retry"
export type MicrosoftGraphWin32LobAppRuleOperator = "notConfigured" | "equal" | "notEqual" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual"
export type MicrosoftGraphWin32LobAppRuleType = "detection" | "requirement"
export type MicrosoftGraphWindowsArchitecture = "none" | "x86" | "x64" | "arm" | "neutral"
export type MicrosoftGraphWindowsDeviceType = "none" | "desktop" | "mobile" | "holographic" | "team"
export type MicrosoftGraphInstallState = "notApplicable" | "installed" | "failed" | "notInstalled" | "uninstallFailed" | "unknown"
export type MicrosoftGraphAndroidRequiredPasswordType = "deviceDefault" | "alphabetic" | "alphanumeric" | "alphanumericWithSymbols" | "lowSecurityBiometric" | "numeric" | "numericComplex" | "any"
export type MicrosoftGraphAndroidWorkProfileCrossProfileDataSharingType = "deviceDefault" | "preventAny" | "allowPersonalToWork" | "noRestrictions"
export type MicrosoftGraphAndroidWorkProfileDefaultAppPermissionPolicyType = "deviceDefault" | "prompt" | "autoGrant" | "autoDeny"
export type MicrosoftGraphAndroidWorkProfileRequiredPasswordType = "deviceDefault" | "lowSecurityBiometric" | "required" | "atLeastNumeric" | "numericComplex" | "atLeastAlphabetic" | "atLeastAlphanumeric" | "alphanumericWithSymbols"
export type MicrosoftGraphApplicationGuardBlockClipboardSharingType = "notConfigured" | "blockBoth" | "blockHostToContainer" | "blockContainerToHost" | "blockNone"
export type MicrosoftGraphApplicationGuardBlockFileTransferType = "notConfigured" | "blockImageAndTextFile" | "blockImageFile" | "blockNone" | "blockTextFile"
export type MicrosoftGraphAppListType = "none" | "appsInListCompliant" | "appsNotInListCompliant"
export type MicrosoftGraphAppLockerApplicationControlType = "notConfigured" | "enforceComponentsAndStoreApps" | "auditComponentsAndStoreApps" | "enforceComponentsStoreAppsAndSmartlocker" | "auditComponentsStoreAppsAndSmartlocker"
export type MicrosoftGraphAutomaticUpdateMode = "userDefined" | "notifyDownload" | "autoInstallAtMaintenanceTime" | "autoInstallAndRebootAtMaintenanceTime" | "autoInstallAndRebootAtScheduledTime" | "autoInstallAndRebootWithoutEndUserControl"
export type MicrosoftGraphAutoRestartNotificationDismissalMethod = "notConfigured" | "automatic" | "user" | "unknownFutureValue"
export type MicrosoftGraphBitLockerEncryptionMethod = "aesCbc128" | "aesCbc256" | "xtsAes128" | "xtsAes256"
export type MicrosoftGraphDefenderCloudBlockLevelType = "notConfigured" | "high" | "highPlus" | "zeroTolerance"
export type MicrosoftGraphDefenderMonitorFileActivity = "userDefined" | "disable" | "monitorAllFiles" | "monitorIncomingFilesOnly" | "monitorOutgoingFilesOnly"
export type MicrosoftGraphDefenderPromptForSampleSubmission = "userDefined" | "alwaysPrompt" | "promptBeforeSendingPersonalData" | "neverSendData" | "sendAllDataWithoutPrompting"
export type MicrosoftGraphDefenderScanType = "userDefined" | "disabled" | "quick" | "full"
export type MicrosoftGraphDefenderThreatAction = "deviceDefault" | "clean" | "quarantine" | "remove" | "allow" | "userDefined" | "block"
export type MicrosoftGraphDeviceComplianceActionType = "noAction" | "notification" | "block" | "retire" | "wipe" | "removeResourceAccessProfiles" | "pushNotification"
export type MicrosoftGraphDeviceThreatProtectionLevel = "unavailable" | "secured" | "low" | "medium" | "high" | "notSet"
export type MicrosoftGraphDiagnosticDataSubmissionMode = "userDefined" | "none" | "basic" | "enhanced" | "full"
export type MicrosoftGraphEdgeCookiePolicy = "userDefined" | "allow" | "blockThirdParty" | "blockAll"
export type MicrosoftGraphEdgeSearchEngineType = "default" | "bing"
export type MicrosoftGraphEditionUpgradeLicenseType = "productKey" | "licenseFile"
export type MicrosoftGraphEnablement = "notConfigured" | "enabled" | "disabled"
export type MicrosoftGraphFirewallCertificateRevocationListCheckMethodType = "deviceDefault" | "none" | "attempt" | "require"
export type MicrosoftGraphFirewallPacketQueueingMethodType = "deviceDefault" | "disabled" | "queueInbound" | "queueOutbound" | "queueBoth"
export type MicrosoftGraphFirewallPreSharedKeyEncodingMethodType = "deviceDefault" | "none" | "utF8"
export type MicrosoftGraphInternetSiteSecurityLevel = "userDefined" | "medium" | "mediumHigh" | "high"
export type MicrosoftGraphIosNotificationAlertType = "deviceDefault" | "banner" | "modal" | "none"
export type MicrosoftGraphIosUpdatesInstallStatus = "deviceOsHigherThanDesiredOsVersion" | "sharedDeviceUserLoggedInError" | "notSupportedOperation" | "installFailed" | "installPhoneCallInProgress" | "installInsufficientPower" | "installInsufficientSpace" | "installing" | "downloadInsufficientNetwork" | "downloadInsufficientPower" | "downloadInsufficientSpace" | "downloadRequiresComputer" | "downloadFailed" | "downloading" | "success" | "available" | "idle" | "unknown"
export type MicrosoftGraphMiracastChannel = "userDefined" | "one" | "two" | "three" | "four" | "five" | "six" | "seven" | "eight" | "nine" | "ten" | "eleven" | "thirtySix" | "forty" | "fortyFour" | "fortyEight" | "oneHundredFortyNine" | "oneHundredFiftyThree" | "oneHundredFiftySeven" | "oneHundredSixtyOne" | "oneHundredSixtyFive"
export type MicrosoftGraphPolicyPlatformType = "android" | "androidForWork" | "iOS" | "macOS" | "windowsPhone81" | "windows81AndLater" | "windows10AndLater" | "all"
export type MicrosoftGraphPrereleaseFeatures = "userDefined" | "settingsOnly" | "settingsAndExperimentations" | "notAllowed"
export type MicrosoftGraphRatingAppsType = "allAllowed" | "allBlocked" | "agesAbove4" | "agesAbove9" | "agesAbove12" | "agesAbove17"
export type MicrosoftGraphRatingAustraliaMoviesType = "allAllowed" | "allBlocked" | "general" | "parentalGuidance" | "mature" | "agesAbove15" | "agesAbove18"
export type MicrosoftGraphRatingAustraliaTelevisionType = "allAllowed" | "allBlocked" | "preschoolers" | "children" | "general" | "parentalGuidance" | "mature" | "agesAbove15" | "agesAbove15AdultViolence"
export type MicrosoftGraphRatingCanadaMoviesType = "allAllowed" | "allBlocked" | "general" | "parentalGuidance" | "agesAbove14" | "agesAbove18" | "restricted"
export type MicrosoftGraphRatingCanadaTelevisionType = "allAllowed" | "allBlocked" | "children" | "childrenAbove8" | "general" | "parentalGuidance" | "agesAbove14" | "agesAbove18"
export type MicrosoftGraphRatingFranceMoviesType = "allAllowed" | "allBlocked" | "agesAbove10" | "agesAbove12" | "agesAbove16" | "agesAbove18"
export type MicrosoftGraphRatingFranceTelevisionType = "allAllowed" | "allBlocked" | "agesAbove10" | "agesAbove12" | "agesAbove16" | "agesAbove18"
export type MicrosoftGraphRatingGermanyMoviesType = "allAllowed" | "allBlocked" | "general" | "agesAbove6" | "agesAbove12" | "agesAbove16" | "adults"
export type MicrosoftGraphRatingGermanyTelevisionType = "allAllowed" | "allBlocked" | "general" | "agesAbove6" | "agesAbove12" | "agesAbove16" | "adults"
export type MicrosoftGraphRatingIrelandMoviesType = "allAllowed" | "allBlocked" | "general" | "parentalGuidance" | "agesAbove12" | "agesAbove15" | "agesAbove16" | "adults"
export type MicrosoftGraphRatingIrelandTelevisionType = "allAllowed" | "allBlocked" | "general" | "children" | "youngAdults" | "parentalSupervision" | "mature"
export type MicrosoftGraphRatingJapanMoviesType = "allAllowed" | "allBlocked" | "general" | "parentalGuidance" | "agesAbove15" | "agesAbove18"
export type MicrosoftGraphRatingJapanTelevisionType = "allAllowed" | "allBlocked" | "explicitAllowed"
export type MicrosoftGraphRatingNewZealandMoviesType = "allAllowed" | "allBlocked" | "general" | "parentalGuidance" | "mature" | "agesAbove13" | "agesAbove15" | "agesAbove16" | "agesAbove18" | "restricted" | "agesAbove16Restricted"
export type MicrosoftGraphRatingNewZealandTelevisionType = "allAllowed" | "allBlocked" | "general" | "parentalGuidance" | "adults"
export type MicrosoftGraphRatingUnitedKingdomMoviesType = "allAllowed" | "allBlocked" | "general" | "universalChildren" | "parentalGuidance" | "agesAbove12Video" | "agesAbove12Cinema" | "agesAbove15" | "adults"
export type MicrosoftGraphRatingUnitedKingdomTelevisionType = "allAllowed" | "allBlocked" | "caution"
export type MicrosoftGraphRatingUnitedStatesMoviesType = "allAllowed" | "allBlocked" | "general" | "parentalGuidance" | "parentalGuidance13" | "restricted" | "adults"
export type MicrosoftGraphRatingUnitedStatesTelevisionType = "allAllowed" | "allBlocked" | "childrenAll" | "childrenAbove7" | "general" | "parentalGuidance" | "childrenAbove14" | "adults"
export type MicrosoftGraphRequiredPasswordType = "deviceDefault" | "alphanumeric" | "numeric"
export type MicrosoftGraphSafeSearchFilterType = "userDefined" | "strict" | "moderate"
export type MicrosoftGraphSettingSourceType = "deviceConfiguration" | "deviceIntent"
export type MicrosoftGraphSharedPCAccountDeletionPolicyType = "immediate" | "diskSpaceThreshold" | "diskSpaceThresholdOrInactiveThreshold"
export type MicrosoftGraphSharedPCAllowedAccountType = "guest" | "domain"
export type MicrosoftGraphSiteSecurityLevel = "userDefined" | "low" | "mediumLow" | "medium" | "mediumHigh" | "high"
export type MicrosoftGraphStateManagementSetting = "notConfigured" | "blocked" | "allowed"
export type MicrosoftGraphVisibilitySetting = "notConfigured" | "hide" | "show"
export type MicrosoftGraphWebBrowserCookieSettings = "browserDefault" | "blockAlways" | "allowCurrentWebSite" | "allowFromWebsitesVisited" | "allowAlways"
export type MicrosoftGraphWeeklySchedule = "userDefined" | "everyday" | "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday"
export type MicrosoftGraphWelcomeScreenMeetingInformation = "userDefined" | "showOrganizerAndTimeOnly" | "showOrganizerAndTimeAndSubject"
export type MicrosoftGraphWindows10EditionType = "windows10Enterprise" | "windows10EnterpriseN" | "windows10Education" | "windows10EducationN" | "windows10MobileEnterprise" | "windows10HolographicEnterprise" | "windows10Professional" | "windows10ProfessionalN" | "windows10ProfessionalEducation" | "windows10ProfessionalEducationN" | "windows10ProfessionalWorkstation" | "windows10ProfessionalWorkstationN"
export type MicrosoftGraphWindowsDeliveryOptimizationMode = "userDefined" | "httpOnly" | "httpWithPeeringNat" | "httpWithPeeringPrivateGroup" | "httpWithInternetPeering" | "simpleDownload" | "bypassMode"
export type MicrosoftGraphWindowsSpotlightEnablementSettings = "notConfigured" | "disabled" | "enabled"
export type MicrosoftGraphWindowsStartMenuAppListVisibilityType = "userDefined" | "collapse" | "remove" | "disableSettingsApp"
export type MicrosoftGraphWindowsStartMenuModeType = "userDefined" | "fullScreen" | "nonFullScreen"
export type MicrosoftGraphWindowsUpdateForBusinessUpdateWeeks = "userDefined" | "firstWeek" | "secondWeek" | "thirdWeek" | "fourthWeek" | "everyWeek" | "unknownFutureValue"
export type MicrosoftGraphWindowsUpdateNotificationDisplayOption = "notConfigured" | "defaultNotifications" | "restartWarningsOnly" | "disableAllNotifications" | "unknownFutureValue"
export type MicrosoftGraphWindowsUpdateType = "userDefined" | "all" | "businessReadyOnly" | "windowsInsiderBuildFast" | "windowsInsiderBuildSlow" | "windowsInsiderBuildRelease"
export type MicrosoftGraphWindowsUserAccountControlSettings = "userDefined" | "alwaysNotify" | "notifyOnAppChanges" | "notifyOnAppChangesWithoutDimming" | "neverNotify"
export type MicrosoftGraphDeviceManagementExchangeConnectorStatus = "none" | "connectionPending" | "connected" | "disconnected"
export type MicrosoftGraphDeviceManagementExchangeConnectorSyncType = "fullSync" | "deltaSync"
export type MicrosoftGraphDeviceManagementExchangeConnectorType = "onPremises" | "hosted" | "serviceToService" | "dedicated"
export type MicrosoftGraphDeviceManagementPartnerAppType = "unknown" | "singleTenantApp" | "multiTenantApp"
export type MicrosoftGraphDeviceManagementPartnerTenantState = "unknown" | "unavailable" | "enabled" | "terminated" | "rejected" | "unresponsive"
export type MicrosoftGraphMdmAuthority = "unknown" | "intune" | "sccm" | "office365"
export type MicrosoftGraphMobileThreatPartnerTenantState = "unavailable" | "available" | "enabled" | "unresponsive"
export type MicrosoftGraphVppTokenState = "unknown" | "valid" | "expired" | "invalid" | "assignedToExternalMDM"
export type MicrosoftGraphVppTokenSyncStatus = "none" | "inProgress" | "completed" | "failed"
export type MicrosoftGraphWindowsHelloForBusinessPinUsage = "allowed" | "required" | "disallowed"
export type MicrosoftGraphActionState = "none" | "pending" | "canceled" | "active" | "done" | "failed" | "notSupported"
export type MicrosoftGraphComplianceState = "unknown" | "compliant" | "noncompliant" | "conflict" | "error" | "inGracePeriod" | "configManager"
export type MicrosoftGraphDetectedAppPlatformType = "unknown" | "windows" | "windowsMobile" | "windowsHolographic" | "ios" | "macOS" | "chromeOS" | "androidOSP" | "androidDeviceAdministrator" | "androidWorkProfile" | "androidDedicatedAndFullyManaged"
export type MicrosoftGraphDeviceEnrollmentType = "unknown" | "userEnrollment" | "deviceEnrollmentManager" | "appleBulkWithUser" | "appleBulkWithoutUser" | "windowsAzureADJoin" | "windowsBulkUserless" | "windowsAutoEnrollment" | "windowsBulkAzureDomainJoin" | "windowsCoManagement" | "windowsAzureADJoinUsingDeviceAuth" | "appleUserEnrollment" | "appleUserEnrollmentWithServiceAccount"
export type MicrosoftGraphDeviceManagementExchangeAccessState = "none" | "unknown" | "allowed" | "blocked" | "quarantined"
export type MicrosoftGraphDeviceManagementExchangeAccessStateReason = "none" | "unknown" | "exchangeGlobalRule" | "exchangeIndividualRule" | "exchangeDeviceRule" | "exchangeUpgrade" | "exchangeMailboxPolicy" | "other" | "compliant" | "notCompliant" | "notEnrolled" | "unknownLocation" | "mfaRequired" | "azureADBlockDueToAccessPolicy" | "compromisedPassword" | "deviceNotKnownWithManagedApp"
export type MicrosoftGraphDeviceManagementSubscriptionState = "pending" | "active" | "warning" | "disabled" | "deleted" | "blocked" | "lockedOut"
export type MicrosoftGraphDeviceRegistrationState = "notRegistered" | "registered" | "revoked" | "keyConflict" | "approvalPending" | "certificateReset" | "notRegisteredPendingEnrollment" | "unknown"
export type MicrosoftGraphDiskType = "unknown" | "hdd" | "ssd" | "unknownFutureValue"
export type MicrosoftGraphManagedDeviceOwnerType = "unknown" | "company" | "personal"
export type MicrosoftGraphManagedDevicePartnerReportedHealthState = "unknown" | "activated" | "deactivated" | "secured" | "lowSeverity" | "mediumSeverity" | "highSeverity" | "unresponsive" | "compromised" | "misconfigured"
export type MicrosoftGraphManagementAgentType = "eas" | "mdm" | "easMdm" | "intuneClient" | "easIntuneClient" | "configurationManagerClient" | "configurationManagerClientMdm" | "configurationManagerClientMdmEas" | "unknown" | "jamf" | "googleCloudDevicePolicyController" | "microsoft365ManagedMdm" | "msSense"
export type MicrosoftGraphUserExperienceAnalyticsHealthState = "unknown" | "insufficientData" | "needsAttention" | "meetingGoals" | "unknownFutureValue"
export type MicrosoftGraphEnrollmentState = "unknown" | "enrolled" | "pendingReset" | "failed" | "notContacted"
export type MicrosoftGraphImportedWindowsAutopilotDeviceIdentityImportStatus = "unknown" | "pending" | "partial" | "complete" | "error"
export type MicrosoftGraphImportedWindowsAutopilotDeviceIdentityUploadStatus = "noUpload" | "pending" | "complete" | "error"
export type MicrosoftGraphManagedAppClipboardSharingLevel = "allApps" | "managedAppsWithPasteIn" | "managedApps" | "blocked"
export type MicrosoftGraphManagedAppDataEncryptionType = "useDeviceSettings" | "afterDeviceRestart" | "whenDeviceLockedExceptOpenFiles" | "whenDeviceLocked"
export type MicrosoftGraphManagedAppDataStorageLocation = "oneDriveForBusiness" | "sharePoint" | "box" | "localStorage"
export type MicrosoftGraphManagedAppDataTransferLevel = "allApps" | "managedApps" | "none"
export type MicrosoftGraphManagedAppFlaggedReason = "none" | "rootedDevice"
export type MicrosoftGraphManagedAppPinCharacterSet = "numeric" | "alphanumericAndSymbol"
export type MicrosoftGraphManagedBrowserType = "notConfigured" | "microsoftEdge"
export type MicrosoftGraphTargetedManagedAppGroupType = "selectedPublicApps" | "allCoreMicrosoftApps" | "allMicrosoftApps" | "allApps"
export type MicrosoftGraphWindowsInformationProtectionEnforcementLevel = "noProtection" | "encryptAndAuditOnly" | "encryptAuditAndPrompt" | "encryptAuditAndBlock"
export type MicrosoftGraphWindowsInformationProtectionPinCharacterRequirements = "notAllow" | "requireAtLeastOne" | "allow"
export type MicrosoftGraphNotificationTemplateBrandingOptions = "none" | "includeCompanyLogo" | "includeCompanyName" | "includeContactInformation" | "includeDeviceDetails"
export type MicrosoftGraphRemoteAssistanceOnboardingStatus = "notOnboarded" | "onboarding" | "onboarded"
export type MicrosoftGraphDeviceManagementExportJobLocalizationType = "localizedValuesAsAdditionalColumn" | "replaceLocalizableValues"
export type MicrosoftGraphDeviceManagementReportFileFormat = "csv" | "pdf" | "json" | "unknownFutureValue"
export type MicrosoftGraphDeviceManagementReportStatus = "unknown" | "notStarted" | "inProgress" | "completed" | "failed"
export type MicrosoftGraphDeviceEnrollmentFailureReason = "unknown" | "authentication" | "authorization" | "accountValidation" | "userValidation" | "deviceNotSupported" | "inMaintenance" | "badRequest" | "featureNotSupported" | "enrollmentRestrictionsEnforced" | "clientDisconnected" | "userAbandonment"
export type MicrosoftGraphApplicationType = "universal" | "desktop"
export type MicrosoftGraphPostType = "regular" | "quick" | "strategic" | "unknownFutureValue"
export type MicrosoftGraphServiceHealthClassificationType = "advisory" | "incident" | "unknownFutureValue"
export type MicrosoftGraphServiceHealthOrigin = "microsoft" | "thirdParty" | "customer" | "unknownFutureValue"
export type MicrosoftGraphServiceHealthStatus = "serviceOperational" | "investigating" | "restoringService" | "verifyingService" | "serviceRestored" | "postIncidentReviewPublished" | "serviceDegradation" | "serviceInterruption" | "extendedRecovery" | "falsePositive" | "investigationSuspended" | "resolved" | "mitigatedExternal" | "mitigated" | "resolvedExternal" | "confirmed" | "reported" | "unknownFutureValue"
export type MicrosoftGraphServiceUpdateCategory = "preventOrFixIssue" | "planForChange" | "stayInformed" | "unknownFutureValue"
export type MicrosoftGraphServiceUpdateSeverity = "normal" | "high" | "critical" | "unknownFutureValue"
export type MicrosoftGraphBucketAggregationSortProperty = "count" | "keyAsString" | "keyAsNumber" | "unknownFutureValue"
export type MicrosoftGraphEntityType = "event" | "message" | "driveItem" | "externalItem" | "site" | "list" | "listItem" | "drive" | "unknownFutureValue"
export type MicrosoftGraphSearchAlterationType = "suggestion" | "modification" | "unknownFutureValue"
export type MicrosoftGraphPlannerContainerType = "group" | "unknownFutureValue" | "roster"
export type MicrosoftGraphPlannerPreviewType = "automatic" | "noPreview" | "checklist" | "description" | "reference"
export type MicrosoftGraphOnenotePatchActionType = "Replace" | "Append" | "Delete" | "Insert" | "Prepend"
export type MicrosoftGraphOnenotePatchInsertPosition = "After" | "Before"
export type MicrosoftGraphOnenoteSourceService = "Unknown" | "OneDrive" | "OneDriveForBusiness" | "OnPremOneDriveForBusiness"
export type MicrosoftGraphOnenoteUserRole = "None" | "Owner" | "Contributor" | "Reader"
export type MicrosoftGraphOperationStatus = "NotStarted" | "Running" | "Completed" | "Failed"
export type MicrosoftGraphRoleAssignmentScheduleFilterByCurrentUserOptions = "principal" | "unknownFutureValue"
export type MicrosoftGraphRoleAssignmentScheduleInstanceFilterByCurrentUserOptions = "principal" | "unknownFutureValue"
export type MicrosoftGraphRoleAssignmentScheduleRequestFilterByCurrentUserOptions = "principal" | "createdBy" | "approver" | "unknownFutureValue"
export type MicrosoftGraphRoleEligibilityScheduleFilterByCurrentUserOptions = "principal" | "unknownFutureValue"
export type MicrosoftGraphRoleEligibilityScheduleInstanceFilterByCurrentUserOptions = "principal" | "unknownFutureValue"
export type MicrosoftGraphRoleEligibilityScheduleRequestFilterByCurrentUserOptions = "principal" | "createdBy" | "approver" | "unknownFutureValue"
export type MicrosoftGraphUnifiedRoleManagementPolicyRuleTargetOperations = "all" | "activate" | "deactivate" | "assign" | "update" | "remove" | "extend" | "renew" | "unknownFutureValue"
export type MicrosoftGraphUnifiedRoleScheduleRequestActions = "adminAssign" | "adminUpdate" | "adminRemove" | "selfActivate" | "selfDeactivate" | "adminExtend" | "adminRenew" | "selfExtend" | "selfRenew" | "unknownFutureValue"
export type MicrosoftGraphPrintColorMode = "blackAndWhite" | "grayscale" | "color" | "auto" | "unknownFutureValue"
export type MicrosoftGraphPrintDuplexMode = "flipOnLongEdge" | "flipOnShortEdge" | "oneSided" | "unknownFutureValue"
export type MicrosoftGraphPrinterFeedOrientation = "longEdgeFirst" | "shortEdgeFirst" | "unknownFutureValue"
export type MicrosoftGraphPrinterProcessingState = "unknown" | "idle" | "processing" | "stopped" | "unknownFutureValue"
export type MicrosoftGraphPrinterProcessingStateDetail = "paused" | "mediaJam" | "mediaNeeded" | "mediaLow" | "mediaEmpty" | "coverOpen" | "interlockOpen" | "outputTrayMissing" | "outputAreaFull" | "markerSupplyLow" | "markerSupplyEmpty" | "inputTrayMissing" | "outputAreaAlmostFull" | "markerWasteAlmostFull" | "markerWasteFull" | "fuserOverTemp" | "fuserUnderTemp" | "other" | "none" | "movingToPaused" | "shutdown" | "connectingToDevice" | "timedOut" | "stopping" | "stoppedPartially" | "tonerLow" | "tonerEmpty" | "spoolAreaFull" | "doorOpen" | "opticalPhotoConductorNearEndOfLife" | "opticalPhotoConductorLifeOver" | "developerLow" | "developerEmpty" | "interpreterResourceUnavailable" | "unknownFutureValue" | "alertRemovalOfBinaryChangeEntry" | "banderAdded" | "banderAlmostEmpty" | "banderAlmostFull" | "banderAtLimit" | "banderClosed" | "banderConfigurationChange" | "banderCoverClosed" | "banderCoverOpen" | "banderEmpty" | "banderFull" | "banderInterlockClosed" | "banderInterlockOpen" | "banderJam" | "banderLifeAlmostOver" | "banderLifeOver" | "banderMemoryExhausted" | "banderMissing" | "banderMotorFailure" | "banderNearLimit" | "banderOffline" | "banderOpened" | "banderOverTemperature" | "banderPowerSaver" | "banderRecoverableFailure" | "banderRecoverableStorage" | "banderRemoved" | "banderResourceAdded" | "banderResourceRemoved" | "banderThermistorFailure" | "banderTimingFailure" | "banderTurnedOff" | "banderTurnedOn" | "banderUnderTemperature" | "banderUnrecoverableFailure" | "banderUnrecoverableStorageError" | "banderWarmingUp" | "binderAdded" | "binderAlmostEmpty" | "binderAlmostFull" | "binderAtLimit" | "binderClosed" | "binderConfigurationChange" | "binderCoverClosed" | "binderCoverOpen" | "binderEmpty" | "binderFull" | "binderInterlockClosed" | "binderInterlockOpen" | "binderJam" | "binderLifeAlmostOver" | "binderLifeOver" | "binderMemoryExhausted" | "binderMissing" | "binderMotorFailure" | "binderNearLimit" | "binderOffline" | "binderOpened" | "binderOverTemperature" | "binderPowerSaver" | "binderRecoverableFailure" | "binderRecoverableStorage" | "binderRemoved" | "binderResourceAdded" | "binderResourceRemoved" | "binderThermistorFailure" | "binderTimingFailure" | "binderTurnedOff" | "binderTurnedOn" | "binderUnderTemperature" | "binderUnrecoverableFailure" | "binderUnrecoverableStorageError" | "binderWarmingUp" | "cameraFailure" | "chamberCooling" | "chamberFailure" | "chamberHeating" | "chamberTemperatureHigh" | "chamberTemperatureLow" | "cleanerLifeAlmostOver" | "cleanerLifeOver" | "configurationChange" | "deactivated" | "deleted" | "dieCutterAdded" | "dieCutterAlmostEmpty" | "dieCutterAlmostFull" | "dieCutterAtLimit" | "dieCutterClosed" | "dieCutterConfigurationChange" | "dieCutterCoverClosed" | "dieCutterCoverOpen" | "dieCutterEmpty" | "dieCutterFull" | "dieCutterInterlockClosed" | "dieCutterInterlockOpen" | "dieCutterJam" | "dieCutterLifeAlmostOver" | "dieCutterLifeOver" | "dieCutterMemoryExhausted" | "dieCutterMissing" | "dieCutterMotorFailure" | "dieCutterNearLimit" | "dieCutterOffline" | "dieCutterOpened" | "dieCutterOverTemperature" | "dieCutterPowerSaver" | "dieCutterRecoverableFailure" | "dieCutterRecoverableStorage" | "dieCutterRemoved" | "dieCutterResourceAdded" | "dieCutterResourceRemoved" | "dieCutterThermistorFailure" | "dieCutterTimingFailure" | "dieCutterTurnedOff" | "dieCutterTurnedOn" | "dieCutterUnderTemperature" | "dieCutterUnrecoverableFailure" | "dieCutterUnrecoverableStorageError" | "dieCutterWarmingUp" | "extruderCooling" | "extruderFailure" | "extruderHeating" | "extruderJam" | "extruderTemperatureHigh" | "extruderTemperatureLow" | "fanFailure" | "faxModemLifeAlmostOver" | "faxModemLifeOver" | "faxModemMissing" | "faxModemTurnedOff" | "faxModemTurnedOn" | "folderAdded" | "folderAlmostEmpty" | "folderAlmostFull" | "folderAtLimit" | "folderClosed" | "folderConfigurationChange" | "folderCoverClosed" | "folderCoverOpen" | "folderEmpty" | "folderFull" | "folderInterlockClosed" | "folderInterlockOpen" | "folderJam" | "folderLifeAlmostOver" | "folderLifeOver" | "folderMemoryExhausted" | "folderMissing" | "folderMotorFailure" | "folderNearLimit" | "folderOffline" | "folderOpened" | "folderOverTemperature" | "folderPowerSaver" | "folderRecoverableFailure" | "folderRecoverableStorage" | "folderRemoved" | "folderResourceAdded" | "folderResourceRemoved" | "folderThermistorFailure" | "folderTimingFailure" | "folderTurnedOff" | "folderTurnedOn" | "folderUnderTemperature" | "folderUnrecoverableFailure" | "folderUnrecoverableStorageError" | "folderWarmingUp" | "hibernate" | "holdNewJobs" | "identifyPrinterRequested" | "imprinterAdded" | "imprinterAlmostEmpty" | "imprinterAlmostFull" | "imprinterAtLimit" | "imprinterClosed" | "imprinterConfigurationChange" | "imprinterCoverClosed" | "imprinterCoverOpen" | "imprinterEmpty" | "imprinterFull" | "imprinterInterlockClosed" | "imprinterInterlockOpen" | "imprinterJam" | "imprinterLifeAlmostOver" | "imprinterLifeOver" | "imprinterMemoryExhausted" | "imprinterMissing" | "imprinterMotorFailure" | "imprinterNearLimit" | "imprinterOffline" | "imprinterOpened" | "imprinterOverTemperature" | "imprinterPowerSaver" | "imprinterRecoverableFailure" | "imprinterRecoverableStorage" | "imprinterRemoved" | "imprinterResourceAdded" | "imprinterResourceRemoved" | "imprinterThermistorFailure" | "imprinterTimingFailure" | "imprinterTurnedOff" | "imprinterTurnedOn" | "imprinterUnderTemperature" | "imprinterUnrecoverableFailure" | "imprinterUnrecoverableStorageError" | "imprinterWarmingUp" | "inputCannotFeedSizeSelected" | "inputManualInputRequest" | "inputMediaColorChange" | "inputMediaFormPartsChange" | "inputMediaSizeChange" | "inputMediaTrayFailure" | "inputMediaTrayFeedError" | "inputMediaTrayJam" | "inputMediaTypeChange" | "inputMediaWeightChange" | "inputPickRollerFailure" | "inputPickRollerLifeOver" | "inputPickRollerLifeWarn" | "inputPickRollerMissing" | "inputTrayElevationFailure" | "inputTrayPositionFailure" | "inserterAdded" | "inserterAlmostEmpty" | "inserterAlmostFull" | "inserterAtLimit" | "inserterClosed" | "inserterConfigurationChange" | "inserterCoverClosed" | "inserterCoverOpen" | "inserterEmpty" | "inserterFull" | "inserterInterlockClosed" | "inserterInterlockOpen" | "inserterJam" | "inserterLifeAlmostOver" | "inserterLifeOver" | "inserterMemoryExhausted" | "inserterMissing" | "inserterMotorFailure" | "inserterNearLimit" | "inserterOffline" | "inserterOpened" | "inserterOverTemperature" | "inserterPowerSaver" | "inserterRecoverableFailure" | "inserterRecoverableStorage" | "inserterRemoved" | "inserterResourceAdded" | "inserterResourceRemoved" | "inserterThermistorFailure" | "inserterTimingFailure" | "inserterTurnedOff" | "inserterTurnedOn" | "inserterUnderTemperature" | "inserterUnrecoverableFailure" | "inserterUnrecoverableStorageError" | "inserterWarmingUp" | "interlockClosed" | "interpreterCartridgeAdded" | "interpreterCartridgeDeleted" | "interpreterComplexPageEncountered" | "interpreterMemoryDecrease" | "interpreterMemoryIncrease" | "interpreterResourceAdded" | "interpreterResourceDeleted" | "lampAtEol" | "lampFailure" | "lampNearEol" | "laserAtEol" | "laserFailure" | "laserNearEol" | "makeEnvelopeAdded" | "makeEnvelopeAlmostEmpty" | "makeEnvelopeAlmostFull" | "makeEnvelopeAtLimit" | "makeEnvelopeClosed" | "makeEnvelopeConfigurationChange" | "makeEnvelopeCoverClosed" | "makeEnvelopeCoverOpen" | "makeEnvelopeEmpty" | "makeEnvelopeFull" | "makeEnvelopeInterlockClosed" | "makeEnvelopeInterlockOpen" | "makeEnvelopeJam" | "makeEnvelopeLifeAlmostOver" | "makeEnvelopeLifeOver" | "makeEnvelopeMemoryExhausted" | "makeEnvelopeMissing" | "makeEnvelopeMotorFailure" | "makeEnvelopeNearLimit" | "makeEnvelopeOffline" | "makeEnvelopeOpened" | "makeEnvelopeOverTemperature" | "makeEnvelopePowerSaver" | "makeEnvelopeRecoverableFailure" | "makeEnvelopeRecoverableStorage" | "makeEnvelopeRemoved" | "makeEnvelopeResourceAdded" | "makeEnvelopeResourceRemoved" | "makeEnvelopeThermistorFailure" | "makeEnvelopeTimingFailure" | "makeEnvelopeTurnedOff" | "makeEnvelopeTurnedOn" | "makeEnvelopeUnderTemperature" | "makeEnvelopeUnrecoverableFailure" | "makeEnvelopeUnrecoverableStorageError" | "makeEnvelopeWarmingUp" | "markerAdjustingPrintQuality" | "markerCleanerMissing" | "markerDeveloperAlmostEmpty" | "markerDeveloperEmpty" | "markerDeveloperMissing" | "markerFuserMissing" | "markerFuserThermistorFailure" | "markerFuserTimingFailure" | "markerInkAlmostEmpty" | "markerInkEmpty" | "markerInkMissing" | "markerOpcMissing" | "markerPrintRibbonAlmostEmpty" | "markerPrintRibbonEmpty" | "markerPrintRibbonMissing" | "markerSupplyAlmostEmpty" | "markerSupplyMissing" | "markerTonerCartridgeMissing" | "markerTonerMissing" | "markerWasteInkReceptacleAlmostFull" | "markerWasteInkReceptacleFull" | "markerWasteInkReceptacleMissing" | "markerWasteMissing" | "markerWasteTonerReceptacleAlmostFull" | "markerWasteTonerReceptacleFull" | "markerWasteTonerReceptacleMissing" | "materialEmpty" | "materialLow" | "materialNeeded" | "mediaDrying" | "mediaPathCannotDuplexMediaSelected" | "mediaPathFailure" | "mediaPathInputEmpty" | "mediaPathInputFeedError" | "mediaPathInputJam" | "mediaPathInputRequest" | "mediaPathJam" | "mediaPathMediaTrayAlmostFull" | "mediaPathMediaTrayFull" | "mediaPathMediaTrayMissing" | "mediaPathOutputFeedError" | "mediaPathOutputFull" | "mediaPathOutputJam" | "mediaPathPickRollerFailure" | "mediaPathPickRollerLifeOver" | "mediaPathPickRollerLifeWarn" | "mediaPathPickRollerMissing" | "motorFailure" | "outputMailboxSelectFailure" | "outputMediaTrayFailure" | "outputMediaTrayFeedError" | "outputMediaTrayJam" | "perforaterAdded" | "perforaterAlmostEmpty" | "perforaterAlmostFull" | "perforaterAtLimit" | "perforaterClosed" | "perforaterConfigurationChange" | "perforaterCoverClosed" | "perforaterCoverOpen" | "perforaterEmpty" | "perforaterFull" | "perforaterInterlockClosed" | "perforaterInterlockOpen" | "perforaterJam" | "perforaterLifeAlmostOver" | "perforaterLifeOver" | "perforaterMemoryExhausted" | "perforaterMissing" | "perforaterMotorFailure" | "perforaterNearLimit" | "perforaterOffline" | "perforaterOpened" | "perforaterOverTemperature" | "perforaterPowerSaver" | "perforaterRecoverableFailure" | "perforaterRecoverableStorage" | "perforaterRemoved" | "perforaterResourceAdded" | "perforaterResourceRemoved" | "perforaterThermistorFailure" | "perforaterTimingFailure" | "perforaterTurnedOff" | "perforaterTurnedOn" | "perforaterUnderTemperature" | "perforaterUnrecoverableFailure" | "perforaterUnrecoverableStorageError" | "perforaterWarmingUp" | "platformCooling" | "platformFailure" | "platformHeating" | "platformTemperatureHigh" | "platformTemperatureLow" | "powerDown" | "powerUp" | "printerManualReset" | "printerNmsReset" | "printerReadyToPrint" | "puncherAdded" | "puncherAlmostEmpty" | "puncherAlmostFull" | "puncherAtLimit" | "puncherClosed" | "puncherConfigurationChange" | "puncherCoverClosed" | "puncherCoverOpen" | "puncherEmpty" | "puncherFull" | "puncherInterlockClosed" | "puncherInterlockOpen" | "puncherJam" | "puncherLifeAlmostOver" | "puncherLifeOver" | "puncherMemoryExhausted" | "puncherMissing" | "puncherMotorFailure" | "puncherNearLimit" | "puncherOffline" | "puncherOpened" | "puncherOverTemperature" | "puncherPowerSaver" | "puncherRecoverableFailure" | "puncherRecoverableStorage" | "puncherRemoved" | "puncherResourceAdded" | "puncherResourceRemoved" | "puncherThermistorFailure" | "puncherTimingFailure" | "puncherTurnedOff" | "puncherTurnedOn" | "puncherUnderTemperature" | "puncherUnrecoverableFailure" | "puncherUnrecoverableStorageError" | "puncherWarmingUp" | "resuming" | "scanMediaPathFailure" | "scanMediaPathInputEmpty" | "scanMediaPathInputFeedError" | "scanMediaPathInputJam" | "scanMediaPathInputRequest" | "scanMediaPathJam" | "scanMediaPathOutputFeedError" | "scanMediaPathOutputFull" | "scanMediaPathOutputJam" | "scanMediaPathPickRollerFailure" | "scanMediaPathPickRollerLifeOver" | "scanMediaPathPickRollerLifeWarn" | "scanMediaPathPickRollerMissing" | "scanMediaPathTrayAlmostFull" | "scanMediaPathTrayFull" | "scanMediaPathTrayMissing" | "scannerLightFailure" | "scannerLightLifeAlmostOver" | "scannerLightLifeOver" | "scannerLightMissing" | "scannerSensorFailure" | "scannerSensorLifeAlmostOver" | "scannerSensorLifeOver" | "scannerSensorMissing" | "separationCutterAdded" | "separationCutterAlmostEmpty" | "separationCutterAlmostFull" | "separationCutterAtLimit" | "separationCutterClosed" | "separationCutterConfigurationChange" | "separationCutterCoverClosed" | "separationCutterCoverOpen" | "separationCutterEmpty" | "separationCutterFull" | "separationCutterInterlockClosed" | "separationCutterInterlockOpen" | "separationCutterJam" | "separationCutterLifeAlmostOver" | "separationCutterLifeOver" | "separationCutterMemoryExhausted" | "separationCutterMissing" | "separationCutterMotorFailure" | "separationCutterNearLimit" | "separationCutterOffline" | "separationCutterOpened" | "separationCutterOverTemperature" | "separationCutterPowerSaver" | "separationCutterRecoverableFailure" | "separationCutterRecoverableStorage" | "separationCutterRemoved" | "separationCutterResourceAdded" | "separationCutterResourceRemoved" | "separationCutterThermistorFailure" | "separationCutterTimingFailure" | "separationCutterTurnedOff" | "separationCutterTurnedOn" | "separationCutterUnderTemperature" | "separationCutterUnrecoverableFailure" | "separationCutterUnrecoverableStorageError" | "separationCutterWarmingUp" | "sheetRotatorAdded" | "sheetRotatorAlmostEmpty" | "sheetRotatorAlmostFull" | "sheetRotatorAtLimit" | "sheetRotatorClosed" | "sheetRotatorConfigurationChange" | "sheetRotatorCoverClosed" | "sheetRotatorCoverOpen" | "sheetRotatorEmpty" | "sheetRotatorFull" | "sheetRotatorInterlockClosed" | "sheetRotatorInterlockOpen" | "sheetRotatorJam" | "sheetRotatorLifeAlmostOver" | "sheetRotatorLifeOver" | "sheetRotatorMemoryExhausted" | "sheetRotatorMissing" | "sheetRotatorMotorFailure" | "sheetRotatorNearLimit" | "sheetRotatorOffline" | "sheetRotatorOpened" | "sheetRotatorOverTemperature" | "sheetRotatorPowerSaver" | "sheetRotatorRecoverableFailure" | "sheetRotatorRecoverableStorage" | "sheetRotatorRemoved" | "sheetRotatorResourceAdded" | "sheetRotatorResourceRemoved" | "sheetRotatorThermistorFailure" | "sheetRotatorTimingFailure" | "sheetRotatorTurnedOff" | "sheetRotatorTurnedOn" | "sheetRotatorUnderTemperature" | "sheetRotatorUnrecoverableFailure" | "sheetRotatorUnrecoverableStorageError" | "sheetRotatorWarmingUp" | "slitterAdded" | "slitterAlmostEmpty" | "slitterAlmostFull" | "slitterAtLimit" | "slitterClosed" | "slitterConfigurationChange" | "slitterCoverClosed" | "slitterCoverOpen" | "slitterEmpty" | "slitterFull" | "slitterInterlockClosed" | "slitterInterlockOpen" | "slitterJam" | "slitterLifeAlmostOver" | "slitterLifeOver" | "slitterMemoryExhausted" | "slitterMissing" | "slitterMotorFailure" | "slitterNearLimit" | "slitterOffline" | "slitterOpened" | "slitterOverTemperature" | "slitterPowerSaver" | "slitterRecoverableFailure" | "slitterRecoverableStorage" | "slitterRemoved" | "slitterResourceAdded" | "slitterResourceRemoved" | "slitterThermistorFailure" | "slitterTimingFailure" | "slitterTurnedOff" | "slitterTurnedOn" | "slitterUnderTemperature" | "slitterUnrecoverableFailure" | "slitterUnrecoverableStorageError" | "slitterWarmingUp" | "stackerAdded" | "stackerAlmostEmpty" | "stackerAlmostFull" | "stackerAtLimit" | "stackerClosed" | "stackerConfigurationChange" | "stackerCoverClosed" | "stackerCoverOpen" | "stackerEmpty" | "stackerFull" | "stackerInterlockClosed" | "stackerInterlockOpen" | "stackerJam" | "stackerLifeAlmostOver" | "stackerLifeOver" | "stackerMemoryExhausted" | "stackerMissing" | "stackerMotorFailure" | "stackerNearLimit" | "stackerOffline" | "stackerOpened" | "stackerOverTemperature" | "stackerPowerSaver" | "stackerRecoverableFailure" | "stackerRecoverableStorage" | "stackerRemoved" | "stackerResourceAdded" | "stackerResourceRemoved" | "stackerThermistorFailure" | "stackerTimingFailure" | "stackerTurnedOff" | "stackerTurnedOn" | "stackerUnderTemperature" | "stackerUnrecoverableFailure" | "stackerUnrecoverableStorageError" | "stackerWarmingUp" | "standby" | "staplerAdded" | "staplerAlmostEmpty" | "staplerAlmostFull" | "staplerAtLimit" | "staplerClosed" | "staplerConfigurationChange" | "staplerCoverClosed" | "staplerCoverOpen" | "staplerEmpty" | "staplerFull" | "staplerInterlockClosed" | "staplerInterlockOpen" | "staplerJam" | "staplerLifeAlmostOver" | "staplerLifeOver" | "staplerMemoryExhausted" | "staplerMissing" | "staplerMotorFailure" | "staplerNearLimit" | "staplerOffline" | "staplerOpened" | "staplerOverTemperature" | "staplerPowerSaver" | "staplerRecoverableFailure" | "staplerRecoverableStorage" | "staplerRemoved" | "staplerResourceAdded" | "staplerResourceRemoved" | "staplerThermistorFailure" | "staplerTimingFailure" | "staplerTurnedOff" | "staplerTurnedOn" | "staplerUnderTemperature" | "staplerUnrecoverableFailure" | "staplerUnrecoverableStorageError" | "staplerWarmingUp" | "stitcherAdded" | "stitcherAlmostEmpty" | "stitcherAlmostFull" | "stitcherAtLimit" | "stitcherClosed" | "stitcherConfigurationChange" | "stitcherCoverClosed" | "stitcherCoverOpen" | "stitcherEmpty" | "stitcherFull" | "stitcherInterlockClosed" | "stitcherInterlockOpen" | "stitcherJam" | "stitcherLifeAlmostOver" | "stitcherLifeOver" | "stitcherMemoryExhausted" | "stitcherMissing" | "stitcherMotorFailure" | "stitcherNearLimit" | "stitcherOffline" | "stitcherOpened" | "stitcherOverTemperature" | "stitcherPowerSaver" | "stitcherRecoverableFailure" | "stitcherRecoverableStorage" | "stitcherRemoved" | "stitcherResourceAdded" | "stitcherResourceRemoved" | "stitcherThermistorFailure" | "stitcherTimingFailure" | "stitcherTurnedOff" | "stitcherTurnedOn" | "stitcherUnderTemperature" | "stitcherUnrecoverableFailure" | "stitcherUnrecoverableStorageError" | "stitcherWarmingUp" | "subunitAdded" | "subunitAlmostEmpty" | "subunitAlmostFull" | "subunitAtLimit" | "subunitClosed" | "subunitCoolingDown" | "subunitEmpty" | "subunitFull" | "subunitLifeAlmostOver" | "subunitLifeOver" | "subunitMemoryExhausted" | "subunitMissing" | "subunitMotorFailure" | "subunitNearLimit" | "subunitOffline" | "subunitOpened" | "subunitOverTemperature" | "subunitPowerSaver" | "subunitRecoverableFailure" | "subunitRecoverableStorage" | "subunitRemoved" | "subunitResourceAdded" | "subunitResourceRemoved" | "subunitThermistorFailure" | "subunitTimingFailure" | "subunitTurnedOff" | "subunitTurnedOn" | "subunitUnderTemperature" | "subunitUnrecoverableFailure" | "subunitUnrecoverableStorage" | "subunitWarmingUp" | "suspend" | "testing" | "trimmerAdded" | "trimmerAlmostEmpty" | "trimmerAlmostFull" | "trimmerAtLimit" | "trimmerClosed" | "trimmerConfigurationChange" | "trimmerCoverClosed" | "trimmerCoverOpen" | "trimmerEmpty" | "trimmerFull" | "trimmerInterlockClosed" | "trimmerInterlockOpen" | "trimmerJam" | "trimmerLifeAlmostOver" | "trimmerLifeOver" | "trimmerMemoryExhausted" | "trimmerMissing" | "trimmerMotorFailure" | "trimmerNearLimit" | "trimmerOffline" | "trimmerOpened" | "trimmerOverTemperature" | "trimmerPowerSaver" | "trimmerRecoverableFailure" | "trimmerRecoverableStorage" | "trimmerRemoved" | "trimmerResourceAdded" | "trimmerResourceRemoved" | "trimmerThermistorFailure" | "trimmerTimingFailure" | "trimmerTurnedOff" | "trimmerTurnedOn" | "trimmerUnderTemperature" | "trimmerUnrecoverableFailure" | "trimmerUnrecoverableStorageError" | "trimmerWarmingUp" | "unknown" | "wrapperAdded" | "wrapperAlmostEmpty" | "wrapperAlmostFull" | "wrapperAtLimit" | "wrapperClosed" | "wrapperConfigurationChange" | "wrapperCoverClosed" | "wrapperCoverOpen" | "wrapperEmpty" | "wrapperFull" | "wrapperInterlockClosed" | "wrapperInterlockOpen" | "wrapperJam" | "wrapperLifeAlmostOver" | "wrapperLifeOver" | "wrapperMemoryExhausted" | "wrapperMissing" | "wrapperMotorFailure" | "wrapperNearLimit" | "wrapperOffline" | "wrapperOpened" | "wrapperOverTemperature" | "wrapperPowerSaver" | "wrapperRecoverableFailure" | "wrapperRecoverableStorage" | "wrapperRemoved" | "wrapperResourceAdded" | "wrapperResourceRemoved" | "wrapperThermistorFailure" | "wrapperTimingFailure" | "wrapperTurnedOff" | "wrapperTurnedOn" | "wrapperUnderTemperature" | "wrapperUnrecoverableFailure" | "wrapperUnrecoverableStorageError" | "wrapperWarmingUp"
export type MicrosoftGraphPrintEvent = "jobStarted" | "unknownFutureValue"
export type MicrosoftGraphPrintFinishing = "none" | "staple" | "punch" | "cover" | "bind" | "saddleStitch" | "stitchEdge" | "stapleTopLeft" | "stapleBottomLeft" | "stapleTopRight" | "stapleBottomRight" | "stitchLeftEdge" | "stitchTopEdge" | "stitchRightEdge" | "stitchBottomEdge" | "stapleDualLeft" | "stapleDualTop" | "stapleDualRight" | "stapleDualBottom" | "unknownFutureValue"
export type MicrosoftGraphPrintJobProcessingState = "unknown" | "pending" | "processing" | "paused" | "stopped" | "completed" | "canceled" | "aborted" | "unknownFutureValue"
export type MicrosoftGraphPrintJobStateDetail = "uploadPending" | "transforming" | "completedSuccessfully" | "completedWithWarnings" | "completedWithErrors" | "releaseWait" | "interpreting" | "unknownFutureValue"
export type MicrosoftGraphPrintMultipageLayout = "clockwiseFromTopLeft" | "counterclockwiseFromTopLeft" | "counterclockwiseFromTopRight" | "clockwiseFromTopRight" | "counterclockwiseFromBottomLeft" | "clockwiseFromBottomLeft" | "counterclockwiseFromBottomRight" | "clockwiseFromBottomRight" | "unknownFutureValue"
export type MicrosoftGraphPrintOperationProcessingState = "notStarted" | "running" | "succeeded" | "failed" | "unknownFutureValue"
export type MicrosoftGraphPrintOrientation = "portrait" | "landscape" | "reverseLandscape" | "reversePortrait" | "unknownFutureValue"
export type MicrosoftGraphPrintQuality = "low" | "medium" | "high" | "unknownFutureValue"
export type MicrosoftGraphPrintScaling = "auto" | "shrinkToFit" | "fill" | "fit" | "none" | "unknownFutureValue"
export type MicrosoftGraphPrintTaskProcessingState = "pending" | "processing" | "completed" | "aborted" | "unknownFutureValue"
export type MicrosoftGraphStatus = "active" | "updated" | "deleted" | "ignored" | "unknownFutureValue"
export type MicrosoftGraphDataPolicyOperationStatus = "notStarted" | "running" | "complete" | "failed" | "unknownFutureValue"
export type MicrosoftGraphPayloadDeliveryPlatform = "unknown" | "sms" | "email" | "teams" | "unknownFutureValue"
export type MicrosoftGraphSimulationAttackTechnique = "unknown" | "credentialHarvesting" | "attachmentMalware" | "driveByUrl" | "linkInAttachment" | "linkToMalwareFile" | "unknownFutureValue"
export type MicrosoftGraphSimulationAttackType = "unknown" | "social" | "cloud" | "endpoint" | "unknownFutureValue"
export type MicrosoftGraphSimulationAutomationRunStatus = "unknown" | "running" | "succeeded" | "failed" | "skipped" | "unknownFutureValue"
export type MicrosoftGraphSimulationAutomationStatus = "unknown" | "draft" | "notRunning" | "running" | "completed" | "unknownFutureValue"
export type MicrosoftGraphSimulationStatus = "unknown" | "draft" | "running" | "scheduled" | "succeeded" | "failed" | "cancelled" | "excluded" | "unknownFutureValue"
export type MicrosoftGraphTrainingStatus = "unknown" | "assigned" | "inProgress" | "completed" | "overdue" | "unknownFutureValue"
export type MicrosoftGraphAlertFeedback = "unknown" | "truePositive" | "falsePositive" | "benignPositive" | "unknownFutureValue"
export type MicrosoftGraphAlertSeverity = "unknown" | "informational" | "low" | "medium" | "high" | "unknownFutureValue"
export type MicrosoftGraphAlertStatus = "unknown" | "newAlert" | "inProgress" | "resolved" | "dismissed" | "unknownFutureValue"
export type MicrosoftGraphConnectionDirection = "unknown" | "inbound" | "outbound" | "unknownFutureValue"
export type MicrosoftGraphConnectionStatus = "unknown" | "attempted" | "succeeded" | "blocked" | "failed" | "unknownFutureValue"
export type MicrosoftGraphEmailRole = "unknown" | "sender" | "recipient" | "unknownFutureValue"
export type MicrosoftGraphFileHashType = "unknown" | "sha1" | "sha256" | "md5" | "authenticodeHash256" | "lsHash" | "ctph" | "unknownFutureValue"
export type MicrosoftGraphLogonType = "unknown" | "interactive" | "remoteInteractive" | "network" | "batch" | "service" | "unknownFutureValue"
export type MicrosoftGraphProcessIntegrityLevel = "unknown" | "untrusted" | "low" | "medium" | "high" | "system" | "unknownFutureValue"
export type MicrosoftGraphRegistryHive = "unknown" | "currentConfig" | "currentUser" | "localMachineSam" | "localMachineSecurity" | "localMachineSoftware" | "localMachineSystem" | "usersDefault" | "unknownFutureValue"
export type MicrosoftGraphRegistryOperation = "unknown" | "create" | "modify" | "delete" | "unknownFutureValue"
export type MicrosoftGraphRegistryValueType = "unknown" | "binary" | "dword" | "dwordLittleEndian" | "dwordBigEndian" | "expandSz" | "link" | "multiSz" | "none" | "qword" | "qwordlittleEndian" | "sz" | "unknownFutureValue"
export type MicrosoftGraphSecurityNetworkProtocol = "unknown" | "ip" | "icmp" | "igmp" | "ggp" | "ipv4" | "tcp" | "pup" | "udp" | "idp" | "ipv6" | "ipv6RoutingHeader" | "ipv6FragmentHeader" | "ipSecEncapsulatingSecurityPayload" | "ipSecAuthenticationHeader" | "icmpV6" | "ipv6NoNextHeader" | "ipv6DestinationOptions" | "nd" | "raw" | "ipx" | "spx" | "spxII" | "unknownFutureValue"
export type MicrosoftGraphSecurityResourceType = "unknown" | "attacked" | "related" | "unknownFutureValue"
export type MicrosoftGraphUserAccountSecurityType = "unknown" | "standard" | "power" | "administrator" | "unknownFutureValue"
export type MicrosoftGraphBroadcastMeetingAudience = "roleIsAttendee" | "organization" | "everyone" | "unknownFutureValue"
export type MicrosoftGraphCallDirection = "incoming" | "outgoing"
export type MicrosoftGraphCallState = "incoming" | "establishing" | "established" | "hold" | "transferring" | "transferAccepted" | "redirecting" | "terminating" | "terminated" | "unknownFutureValue"
export type MicrosoftGraphCallTranscriptionState = "notStarted" | "active" | "inactive" | "unknownFutureValue"
export type MicrosoftGraphChangeType = "created" | "updated" | "deleted"
export type MicrosoftGraphEndpointType = "default" | "voicemail" | "skypeForBusiness" | "skypeForBusinessVoipPhone" | "unknownFutureValue"
export type MicrosoftGraphLobbyBypassScope = "organizer" | "organization" | "organizationAndFederated" | "everyone" | "unknownFutureValue" | "invited" | "organizationExcludingGuests"
export type MicrosoftGraphMediaDirection = "inactive" | "sendOnly" | "receiveOnly" | "sendReceive"
export type MicrosoftGraphMediaState = "active" | "inactive" | "unknownFutureValue"
export type MicrosoftGraphMeetingChatMode = "enabled" | "disabled" | "limited" | "unknownFutureValue"
export type MicrosoftGraphModality = "audio" | "video" | "videoBasedScreenSharing" | "data" | "unknownFutureValue"
export type MicrosoftGraphOnlineMeetingPresenters = "everyone" | "organization" | "roleIsPresenter" | "organizer" | "unknownFutureValue"
export type MicrosoftGraphOnlineMeetingRole = "attendee" | "presenter" | "unknownFutureValue" | "producer"
export type MicrosoftGraphRecordingStatus = "unknown" | "notRecording" | "recording" | "failed" | "unknownFutureValue"
export type MicrosoftGraphRejectReason = "none" | "busy" | "forbidden" | "unknownFutureValue"
export type MicrosoftGraphRoutingMode = "oneToOne" | "multicast" | "unknownFutureValue"
export type MicrosoftGraphRoutingType = "forwarded" | "lookup" | "selfFork" | "unknownFutureValue"
export type MicrosoftGraphScreenSharingRole = "viewer" | "sharer"
export type MicrosoftGraphTone = "tone0" | "tone1" | "tone2" | "tone3" | "tone4" | "tone5" | "tone6" | "tone7" | "tone8" | "tone9" | "star" | "pound" | "a" | "b" | "c" | "d" | "flash"
export type MicrosoftGraphAttestationLevel = "attested" | "notAttested" | "unknownFutureValue"
export type MicrosoftGraphAuthenticationMethodKeyStrength = "normal" | "weak" | "unknown"
export type MicrosoftGraphAuthenticationMethodSignInState = "notSupported" | "notAllowedByPolicy" | "notEnabled" | "phoneNumberNotUnique" | "ready" | "notConfigured" | "unknownFutureValue"
export type MicrosoftGraphAuthenticationPhoneType = "mobile" | "alternateMobile" | "office" | "unknownFutureValue"
export type MicrosoftGraphLifecycleEventType = "missed" | "subscriptionRemoved" | "reauthorizationRequired"
export type MicrosoftGraphCallRecordingStatus = "success" | "failure" | "initial" | "chunkFinished" | "unknownFutureValue"
export type MicrosoftGraphChannelMembershipType = "standard" | "private" | "unknownFutureValue" | "shared"
export type MicrosoftGraphChatMessageImportance = "normal" | "high" | "urgent" | "unknownFutureValue"
export type MicrosoftGraphChatMessagePolicyViolationDlpActionTypes = "none" | "notifySender" | "blockAccess" | "blockAccessExternal"
export type MicrosoftGraphChatMessagePolicyViolationUserActionTypes = "none" | "override" | "reportFalsePositive"
export type MicrosoftGraphChatMessagePolicyViolationVerdictDetailsTypes = "none" | "allowFalsePositiveOverride" | "allowOverrideWithoutJustification" | "allowOverrideWithJustification"
export type MicrosoftGraphChatMessageType = "message" | "chatEvent" | "typing" | "unknownFutureValue" | "systemEventMessage"
export type MicrosoftGraphChatType = "oneOnOne" | "group" | "meeting" | "unknownFutureValue"
export type MicrosoftGraphClonableTeamParts = "apps" | "tabs" | "settings" | "channels" | "members"
export type MicrosoftGraphGiphyRatingType = "strict" | "moderate" | "unknownFutureValue"
export type MicrosoftGraphTeamsAppDistributionMethod = "store" | "organization" | "sideloaded" | "unknownFutureValue"
export type MicrosoftGraphTeamsAppPublishingState = "submitted" | "rejected" | "published" | "unknownFutureValue"
export type MicrosoftGraphTeamsAsyncOperationStatus = "invalid" | "notStarted" | "inProgress" | "succeeded" | "failed" | "unknownFutureValue"
export type MicrosoftGraphTeamsAsyncOperationType = "invalid" | "cloneTeam" | "archiveTeam" | "unarchiveTeam" | "createTeam" | "unknownFutureValue" | "teamifyGroup" | "createChannel"
export type MicrosoftGraphTeamSpecialization = "none" | "educationStandard" | "educationClass" | "educationProfessionalLearningCommunity" | "educationStaff" | "healthcareStandard" | "healthcareCareCoordination" | "unknownFutureValue"
export type MicrosoftGraphTeamVisibilityType = "private" | "public" | "hiddenMembership" | "unknownFutureValue"
export type MicrosoftGraphTeamworkActivityTopicSource = "entityUrl" | "text"
export type MicrosoftGraphTeamworkApplicationIdentityType = "aadApplication" | "bot" | "tenantBot" | "office365Connector" | "outgoingWebhook" | "unknownFutureValue"
export type MicrosoftGraphTeamworkCallEventType = "call" | "meeting" | "screenShare" | "unknownFutureValue"
export type MicrosoftGraphTeamworkConversationIdentityType = "team" | "channel" | "chat" | "unknownFutureValue"
export type MicrosoftGraphTeamworkTagType = "standard" | "unknownFutureValue"
export type MicrosoftGraphTeamworkUserIdentityType = "aadUser" | "onPremiseAadUser" | "anonymousGuest" | "federatedUser" | "personalMicrosoftAccountUser" | "skypeUser" | "phoneUser" | "unknownFutureValue" | "emailUser"
export type MicrosoftGraphScheduleChangeRequestActor = "sender" | "recipient" | "manager" | "system" | "unknownFutureValue"
export type MicrosoftGraphScheduleChangeState = "pending" | "approved" | "declined" | "unknownFutureValue"
export type MicrosoftGraphScheduleEntityTheme = "white" | "blue" | "green" | "purple" | "pink" | "yellow" | "gray" | "darkBlue" | "darkGreen" | "darkPurple" | "darkPink" | "darkYellow" | "unknownFutureValue"
export type MicrosoftGraphTimeOffReasonIconType = "none" | "car" | "calendar" | "running" | "plane" | "firstAid" | "doctor" | "notWorking" | "clock" | "juryDuty" | "globe" | "cup" | "phone" | "weather" | "umbrella" | "piggyBank" | "dog" | "cake" | "trafficCone" | "pin" | "sunny" | "unknownFutureValue"
export type MicrosoftGraphWorkforceIntegrationEncryptionProtocol = "sharedSecret" | "unknownFutureValue"
export type MicrosoftGraphWorkforceIntegrationSupportedEntities = "none" | "shift" | "swapRequest" | "userShiftPreferences" | "openShift" | "openShiftRequest" | "offerShiftRequest" | "unknownFutureValue"
export type MicrosoftGraphMailDestinationRoutingReason = "none" | "mailFlowRule" | "safeSender" | "blockedSender" | "advancedSpamFiltering" | "domainAllowList" | "domainBlockList" | "notInAddressBook" | "firstTimeSender" | "autoPurgeToInbox" | "autoPurgeToJunk" | "autoPurgeToDeleted" | "outbound" | "notJunk" | "junk" | "unknownFutureValue"
export type MicrosoftGraphThreatAssessmentContentType = "mail" | "url" | "file"
export type MicrosoftGraphThreatAssessmentRequestSource = "undefined" | "user" | "administrator"
export type MicrosoftGraphThreatAssessmentResultType = "checkPolicy" | "rescan" | "unknownFutureValue"
export type MicrosoftGraphThreatAssessmentStatus = "pending" | "completed"
export type MicrosoftGraphThreatCategory = "undefined" | "spam" | "phishing" | "malware" | "unknownFutureValue"
export type MicrosoftGraphThreatExpectedAssessment = "block" | "unblock"
export type MicrosoftGraphTaskStatus = "notStarted" | "inProgress" | "completed" | "waitingOnOthers" | "deferred"
export type MicrosoftGraphWellknownListName = "none" | "defaultList" | "flaggedEmails" | "unknownFutureValue"
export type MicrosoftGraphSecurityAdditionalDataOptions = "allVersions" | "linkedFiles" | "unknownFutureValue"
export type MicrosoftGraphSecurityCaseAction = "contentExport" | "applyTags" | "convertToPdf" | "index" | "estimateStatistics" | "addToReviewSet" | "holdUpdate" | "unknownFutureValue"
export type MicrosoftGraphSecurityCaseOperationStatus = "notStarted" | "submissionFailed" | "running" | "succeeded" | "partiallySucceeded" | "failed" | "unknownFutureValue"
export type MicrosoftGraphSecurityCaseStatus = "unknown" | "active" | "pendingDelete" | "closing" | "closed" | "closedWithError" | "unknownFutureValue"
export type MicrosoftGraphSecurityChildSelectability = "One" | "Many" | "unknownFutureValue"
export type MicrosoftGraphSecurityDataSourceContainerStatus = "active" | "released" | "unknownFutureValue"
export type MicrosoftGraphSecurityDataSourceHoldStatus = "notApplied" | "applied" | "applying" | "removing" | "partial" | "unknownFutureValue"
export type MicrosoftGraphSecurityDataSourceScopes = "none" | "allTenantMailboxes" | "allTenantSites" | "allCaseCustodians" | "allCaseNoncustodialDataSources" | "unknownFutureValue"
export type MicrosoftGraphSecuritySourceType = "mailbox" | "site" | "unknownFutureValue"
export type MicrosoftGraphTermStoreRelationType = "pin" | "reuse" | "unknownFutureValue"
export type MicrosoftGraphTermStoreTermGroupScope = "global" | "system" | "siteCollection" | "unknownFutureValue"
export type MicrosoftGraphCallRecordsAudioCodec = "unknown" | "invalid" | "cn" | "pcma" | "pcmu" | "amrWide" | "g722" | "g7221" | "g7221c" | "g729" | "multiChannelAudio" | "muchv2" | "opus" | "satin" | "satinFullband" | "rtAudio8" | "rtAudio16" | "silk" | "silkNarrow" | "silkWide" | "siren" | "xmsRta" | "unknownFutureValue"
export type MicrosoftGraphCallRecordsCallType = "unknown" | "groupCall" | "peerToPeer" | "unknownFutureValue"
export type MicrosoftGraphCallRecordsClientPlatform = "unknown" | "windows" | "macOS" | "iOS" | "android" | "web" | "ipPhone" | "roomSystem" | "surfaceHub" | "holoLens" | "unknownFutureValue"
export type MicrosoftGraphCallRecordsFailureStage = "unknown" | "callSetup" | "midcall" | "unknownFutureValue"
export type MicrosoftGraphCallRecordsMediaStreamDirection = "callerToCallee" | "calleeToCaller"
export type MicrosoftGraphCallRecordsModality = "audio" | "video" | "videoBasedScreenSharing" | "data" | "screenSharing" | "unknownFutureValue"
export type MicrosoftGraphCallRecordsNetworkConnectionType = "unknown" | "wired" | "wifi" | "mobile" | "tunnel" | "unknownFutureValue"
export type MicrosoftGraphCallRecordsNetworkTransportProtocol = "unknown" | "udp" | "tcp" | "unknownFutureValue"
export type MicrosoftGraphCallRecordsProductFamily = "unknown" | "teams" | "skypeForBusiness" | "lync" | "unknownFutureValue" | "azureCommunicationServices"
export type MicrosoftGraphCallRecordsPstnCallDurationSource = "microsoft" | "operator"
export type MicrosoftGraphCallRecordsServiceRole = "unknown" | "customBot" | "skypeForBusinessMicrosoftTeamsGateway" | "skypeForBusinessAudioVideoMcu" | "skypeForBusinessApplicationSharingMcu" | "skypeForBusinessCallQueues" | "skypeForBusinessAutoAttendant" | "mediationServer" | "mediationServerCloudConnectorEdition" | "exchangeUnifiedMessagingService" | "mediaController" | "conferencingAnnouncementService" | "conferencingAttendant" | "audioTeleconferencerController" | "skypeForBusinessUnifiedCommunicationApplicationPlatform" | "responseGroupServiceAnnouncementService" | "gateway" | "skypeTranslator" | "skypeForBusinessAttendant" | "responseGroupService" | "voicemail" | "unknownFutureValue"
export type MicrosoftGraphCallRecordsUserFeedbackRating = "notRated" | "bad" | "poor" | "fair" | "good" | "excellent" | "unknownFutureValue"
export type MicrosoftGraphCallRecordsVideoCodec = "unknown" | "invalid" | "av1" | "h263" | "h264" | "h264s" | "h264uc" | "h265" | "rtvc1" | "rtVideo" | "xrtvc1" | "unknownFutureValue"
export type MicrosoftGraphCallRecordsWifiBand = "unknown" | "frequency24GHz" | "frequency50GHz" | "frequency60GHz" | "unknownFutureValue"
export type MicrosoftGraphCallRecordsWifiRadioType = "unknown" | "wifi80211a" | "wifi80211b" | "wifi80211g" | "wifi80211n" | "wifi80211ac" | "wifi80211ax" | "unknownFutureValue"
export type MicrosoftGraphExternalConnectorsAccessType = "grant" | "deny" | "unknownFutureValue"
export type MicrosoftGraphExternalConnectorsAclType = "user" | "group" | "everyone" | "everyoneExceptGuests" | "externalGroup" | "unknownFutureValue"
export type MicrosoftGraphExternalConnectorsConnectionOperationStatus = "unspecified" | "inprogress" | "completed" | "failed" | "unknownFutureValue"
export type MicrosoftGraphExternalConnectorsConnectionState = "draft" | "ready" | "obsolete" | "limitExceeded" | "unknownFutureValue"
export type MicrosoftGraphExternalConnectorsExternalItemContentType = "text" | "html" | "unknownFutureValue"
export type MicrosoftGraphExternalConnectorsIdentityType = "user" | "group" | "externalGroup" | "unknownFutureValue"
export type MicrosoftGraphExternalConnectorsLabel = "title" | "url" | "createdBy" | "lastModifiedBy" | "authors" | "createdDateTime" | "lastModifiedDateTime" | "fileName" | "fileExtension" | "unknownFutureValue"
export type MicrosoftGraphExternalConnectorsPropertyType = "string" | "int64" | "double" | "dateTime" | "boolean" | "stringCollection" | "int64Collection" | "doubleCollection" | "dateTimeCollection" | "unknownFutureValue"
export type ODataCountResponse= number;
export type MicrosoftGraphDriveItemCollectionResponse= {value?: MicrosoftGraphDriveItem[],};
export type MicrosoftGraphInvitationCollectionResponse= {value?: MicrosoftGraphInvitation[],};
export type MicrosoftGraphUserCollectionResponse= {value?: MicrosoftGraphUser[],};
export type MicrosoftGraphApplicationTemplateCollectionResponse= {value?: MicrosoftGraphApplicationTemplate[],};
export type MicrosoftGraphAuthenticationMethodConfigurationCollectionResponse= {value?: MicrosoftGraphAuthenticationMethodConfiguration[],};
export type MicrosoftGraphIdentityProviderCollectionResponse= {value?: MicrosoftGraphIdentityProvider[],};
export type MicrosoftGraphApplicationCollectionResponse= {value?: MicrosoftGraphApplication[],};
export type MicrosoftGraphCertificateBasedAuthConfigurationCollectionResponse= {value?: MicrosoftGraphCertificateBasedAuthConfiguration[],};
export type MicrosoftGraphOrgContactCollectionResponse= {value?: MicrosoftGraphOrgContact[],};
export type MicrosoftGraphContractCollectionResponse= {value?: MicrosoftGraphContract[],};
export type MicrosoftGraphDeviceCollectionResponse= {value?: MicrosoftGraphDevice[],};
export type MicrosoftGraphDirectoryObjectCollectionResponse= {value?: MicrosoftGraphDirectoryObject[],};
export type MicrosoftGraphDirectoryRoleCollectionResponse= {value?: MicrosoftGraphDirectoryRole[],};
export type MicrosoftGraphDirectoryRoleTemplateCollectionResponse= {value?: MicrosoftGraphDirectoryRoleTemplate[],};
export type MicrosoftGraphDomainDnsRecordCollectionResponse= {value?: MicrosoftGraphDomainDnsRecord[],};
export type MicrosoftGraphDomainCollectionResponse= {value?: MicrosoftGraphDomain[],};
export type MicrosoftGraphGroupCollectionResponse= {value?: MicrosoftGraphGroup[],};
export type MicrosoftGraphGroupSettingCollectionResponse= {value?: MicrosoftGraphGroupSetting[],};
export type MicrosoftGraphGroupSettingTemplateCollectionResponse= {value?: MicrosoftGraphGroupSettingTemplate[],};
export type MicrosoftGraphOrganizationalBrandingLocalizationCollectionResponse= {value?: MicrosoftGraphOrganizationalBrandingLocalization[],};
export type MicrosoftGraphOAuth2PermissionGrantCollectionResponse= {value?: MicrosoftGraphOAuth2PermissionGrant[],};
export type MicrosoftGraphOrganizationCollectionResponse= {value?: MicrosoftGraphOrganization[],};
export type MicrosoftGraphResourceSpecificPermissionGrantCollectionResponse= {value?: MicrosoftGraphResourceSpecificPermissionGrant[],};
export type MicrosoftGraphScopedRoleMembershipCollectionResponse= {value?: MicrosoftGraphScopedRoleMembership[],};
export type MicrosoftGraphServicePrincipalCollectionResponse= {value?: MicrosoftGraphServicePrincipal[],};
export type MicrosoftGraphSubscribedSkuCollectionResponse= {value?: MicrosoftGraphSubscribedSku[],};
export type MicrosoftGraphPlaceCollectionResponse= {value?: MicrosoftGraphPlace[],};
export type MicrosoftGraphDriveCollectionResponse= {value?: MicrosoftGraphDrive[],};
export type MicrosoftGraphSharedDriveItemCollectionResponse= {value?: MicrosoftGraphSharedDriveItem[],};
export type MicrosoftGraphSiteCollectionResponse= {value?: MicrosoftGraphSite[],};
export type MicrosoftGraphSchemaExtensionCollectionResponse= {value?: MicrosoftGraphSchemaExtension[],};
export type MicrosoftGraphGroupLifecyclePolicyCollectionResponse= {value?: MicrosoftGraphGroupLifecyclePolicy[],};
export type MicrosoftGraphAgreementAcceptanceCollectionResponse= {value?: MicrosoftGraphAgreementAcceptance[],};
export type MicrosoftGraphAgreementCollectionResponse= {value?: MicrosoftGraphAgreement[],};
export type MicrosoftGraphDataPolicyOperationCollectionResponse= {value?: MicrosoftGraphDataPolicyOperation[],};
export type MicrosoftGraphSubscriptionCollectionResponse= {value?: MicrosoftGraphSubscription[],};
export type MicrosoftGraphExternalConnectorsExternalConnectionCollectionResponse= {value?: MicrosoftGraphExternalConnectorsExternalConnection[],};
export type MicrosoftGraphChatCollectionResponse= {value?: MicrosoftGraphChat[],};
export type MicrosoftGraphTeamCollectionResponse= {value?: MicrosoftGraphTeam[],};
export type MicrosoftGraphTeamsTemplateCollectionResponse= {value?: MicrosoftGraphTeamsTemplate[],};
export type MicrosoftGraphDirectoryAuditCollectionResponse= {value?: MicrosoftGraphDirectoryAudit[],};
export type MicrosoftGraphProvisioningObjectSummaryCollectionResponse= {value?: MicrosoftGraphProvisioningObjectSummary[],};
export type MicrosoftGraphSignInCollectionResponse= {value?: MicrosoftGraphSignIn[],};
export type MicrosoftGraphAppRoleAssignmentCollectionResponse= {value?: MicrosoftGraphAppRoleAssignment[],};
export type MicrosoftGraphLicenseDetailsCollectionResponse= {value?: MicrosoftGraphLicenseDetails[],};
export type MicrosoftGraphCalendarGroupCollectionResponse= {value?: MicrosoftGraphCalendarGroup[],};
export type MicrosoftGraphCalendarCollectionResponse= {value?: MicrosoftGraphCalendar[],};
export type MicrosoftGraphEventCollectionResponse= {value?: MicrosoftGraphEvent[],};
export type MicrosoftGraphContactFolderCollectionResponse= {value?: MicrosoftGraphContactFolder[],};
export type MicrosoftGraphContactCollectionResponse= {value?: MicrosoftGraphContact[],};
export type MicrosoftGraphMailFolderCollectionResponse= {value?: MicrosoftGraphMailFolder[],};
export type MicrosoftGraphMessageCollectionResponse= {value?: MicrosoftGraphMessage[],};
export type MicrosoftGraphPersonCollectionResponse= {value?: MicrosoftGraphPerson[],};
export type MicrosoftGraphExtensionCollectionResponse= {value?: MicrosoftGraphExtension[],};
export type MicrosoftGraphManagedDeviceCollectionResponse= {value?: MicrosoftGraphManagedDevice[],};
export type MicrosoftGraphManagedAppRegistrationCollectionResponse= {value?: MicrosoftGraphManagedAppRegistration[],};
export type MicrosoftGraphDeviceManagementTroubleshootingEventCollectionResponse= {value?: MicrosoftGraphDeviceManagementTroubleshootingEvent[],};
export type MicrosoftGraphProfilePhotoCollectionResponse= {value?: MicrosoftGraphProfilePhoto[],};
export type MicrosoftGraphUserActivityCollectionResponse= {value?: MicrosoftGraphUserActivity[],};
export type MicrosoftGraphOnlineMeetingCollectionResponse= {value?: MicrosoftGraphOnlineMeeting[],};
export type MicrosoftGraphCalendarPermissionCollectionResponse= {value?: MicrosoftGraphCalendarPermission[],};
export type MicrosoftGraphMultiValueLegacyExtendedPropertyCollectionResponse= {value?: MicrosoftGraphMultiValueLegacyExtendedProperty[],};
export type MicrosoftGraphSingleValueLegacyExtendedPropertyCollectionResponse= {value?: MicrosoftGraphSingleValueLegacyExtendedProperty[],};
export type MicrosoftGraphAttachmentCollectionResponse= {value?: MicrosoftGraphAttachment[],};
export type MicrosoftGraphInferenceClassificationOverrideCollectionResponse= {value?: MicrosoftGraphInferenceClassificationOverride[],};
export type MicrosoftGraphMessageRuleCollectionResponse= {value?: MicrosoftGraphMessageRule[],};
export type MicrosoftGraphOutlookCategoryCollectionResponse= {value?: MicrosoftGraphOutlookCategory[],};
export type MicrosoftGraphColumnDefinitionCollectionResponse= {value?: MicrosoftGraphColumnDefinition[],};
export type MicrosoftGraphContentTypeCollectionResponse= {value?: MicrosoftGraphContentType[],};
export type MicrosoftGraphBaseItemCollectionResponse= {value?: MicrosoftGraphBaseItem[],};
export type MicrosoftGraphListCollectionResponse= {value?: MicrosoftGraphList[],};
export type MicrosoftGraphRichLongRunningOperationCollectionResponse= {value?: MicrosoftGraphRichLongRunningOperation[],};
export type MicrosoftGraphPermissionCollectionResponse= {value?: MicrosoftGraphPermission[],};
export type MicrosoftGraphTermStoreStoreCollectionResponse= {value?: MicrosoftGraphTermStoreStore[],};
export type MicrosoftGraphDeviceCompliancePolicyStateCollectionResponse= {value?: MicrosoftGraphDeviceCompliancePolicyState[],};
export type MicrosoftGraphDeviceConfigurationStateCollectionResponse= {value?: MicrosoftGraphDeviceConfigurationState[],};
export type MicrosoftGraphManagedAppPolicyCollectionResponse= {value?: MicrosoftGraphManagedAppPolicy[],};
export type MicrosoftGraphManagedAppOperationCollectionResponse= {value?: MicrosoftGraphManagedAppOperation[],};
export type MicrosoftGraphPlannerPlanCollectionResponse= {value?: MicrosoftGraphPlannerPlan[],};
export type MicrosoftGraphPlannerTaskCollectionResponse= {value?: MicrosoftGraphPlannerTask[],};
export type MicrosoftGraphSharedInsightCollectionResponse= {value?: MicrosoftGraphSharedInsight[],};
export type MicrosoftGraphTrendingCollectionResponse= {value?: MicrosoftGraphTrending[],};
export type MicrosoftGraphUsedInsightCollectionResponse= {value?: MicrosoftGraphUsedInsight[],};
export type MicrosoftGraphNotebookCollectionResponse= {value?: MicrosoftGraphNotebook[],};
export type MicrosoftGraphOnenoteOperationCollectionResponse= {value?: MicrosoftGraphOnenoteOperation[],};
export type MicrosoftGraphOnenotePageCollectionResponse= {value?: MicrosoftGraphOnenotePage[],};
export type MicrosoftGraphOnenoteResourceCollectionResponse= {value?: MicrosoftGraphOnenoteResource[],};
export type MicrosoftGraphSectionGroupCollectionResponse= {value?: MicrosoftGraphSectionGroup[],};
export type MicrosoftGraphOnenoteSectionCollectionResponse= {value?: MicrosoftGraphOnenoteSection[],};
export type MicrosoftGraphActivityHistoryItemCollectionResponse= {value?: MicrosoftGraphActivityHistoryItem[],};
export type MicrosoftGraphMeetingAttendanceReportCollectionResponse= {value?: MicrosoftGraphMeetingAttendanceReport[],};
export type MicrosoftGraphEmailAuthenticationMethodCollectionResponse= {value?: MicrosoftGraphEmailAuthenticationMethod[],};
export type MicrosoftGraphFido2AuthenticationMethodCollectionResponse= {value?: MicrosoftGraphFido2AuthenticationMethod[],};
export type MicrosoftGraphAuthenticationMethodCollectionResponse= {value?: MicrosoftGraphAuthenticationMethod[],};
export type MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodCollectionResponse= {value?: MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethod[],};
export type MicrosoftGraphLongRunningOperationCollectionResponse= {value?: MicrosoftGraphLongRunningOperation[],};
export type MicrosoftGraphPasswordAuthenticationMethodCollectionResponse= {value?: MicrosoftGraphPasswordAuthenticationMethod[],};
export type MicrosoftGraphPhoneAuthenticationMethodCollectionResponse= {value?: MicrosoftGraphPhoneAuthenticationMethod[],};
export type MicrosoftGraphSoftwareOathAuthenticationMethodCollectionResponse= {value?: MicrosoftGraphSoftwareOathAuthenticationMethod[],};
export type MicrosoftGraphTemporaryAccessPassAuthenticationMethodCollectionResponse= {value?: MicrosoftGraphTemporaryAccessPassAuthenticationMethod[],};
export type MicrosoftGraphWindowsHelloForBusinessAuthenticationMethodCollectionResponse= {value?: MicrosoftGraphWindowsHelloForBusinessAuthenticationMethod[],};
export type MicrosoftGraphTeamsAppInstallationCollectionResponse= {value?: MicrosoftGraphTeamsAppInstallation[],};
export type MicrosoftGraphConversationMemberCollectionResponse= {value?: MicrosoftGraphConversationMember[],};
export type MicrosoftGraphChatMessageCollectionResponse= {value?: MicrosoftGraphChatMessage[],};
export type MicrosoftGraphPinnedChatMessageInfoCollectionResponse= {value?: MicrosoftGraphPinnedChatMessageInfo[],};
export type MicrosoftGraphTeamsTabCollectionResponse= {value?: MicrosoftGraphTeamsTab[],};
export type MicrosoftGraphChannelCollectionResponse= {value?: MicrosoftGraphChannel[],};
export type MicrosoftGraphTeamsAsyncOperationCollectionResponse= {value?: MicrosoftGraphTeamsAsyncOperation[],};
export type MicrosoftGraphTeamworkTagCollectionResponse= {value?: MicrosoftGraphTeamworkTag[],};
export type MicrosoftGraphAssociatedTeamInfoCollectionResponse= {value?: MicrosoftGraphAssociatedTeamInfo[],};
export type MicrosoftGraphUserScopeTeamsAppInstallationCollectionResponse= {value?: MicrosoftGraphUserScopeTeamsAppInstallation[],};
export type MicrosoftGraphTodoTaskListCollectionResponse= {value?: MicrosoftGraphTodoTaskList[],};
export type MicrosoftGraphExtensionPropertyCollectionResponse= {value?: MicrosoftGraphExtensionProperty[],};
export type MicrosoftGraphFederatedIdentityCredentialCollectionResponse= {value?: MicrosoftGraphFederatedIdentityCredential[],};
export type MicrosoftGraphHomeRealmDiscoveryPolicyCollectionResponse= {value?: MicrosoftGraphHomeRealmDiscoveryPolicy[],};
export type MicrosoftGraphTokenIssuancePolicyCollectionResponse= {value?: MicrosoftGraphTokenIssuancePolicy[],};
export type MicrosoftGraphTokenLifetimePolicyCollectionResponse= {value?: MicrosoftGraphTokenLifetimePolicy[],};
export type MicrosoftGraphClaimsMappingPolicyCollectionResponse= {value?: MicrosoftGraphClaimsMappingPolicy[],};
export type MicrosoftGraphDelegatedPermissionClassificationCollectionResponse= {value?: MicrosoftGraphDelegatedPermissionClassification[],};
export type MicrosoftGraphEndpointCollectionResponse= {value?: MicrosoftGraphEndpoint[],};
export type MicrosoftGraphAuthenticationMethodTargetCollectionResponse= {value?: MicrosoftGraphAuthenticationMethodTarget[],};
export type MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodTargetCollectionResponse= {value?: MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodTarget[],};
export type MicrosoftGraphActivityBasedTimeoutPolicyCollectionResponse= {value?: MicrosoftGraphActivityBasedTimeoutPolicy[],};
export type MicrosoftGraphPermissionGrantPolicyCollectionResponse= {value?: MicrosoftGraphPermissionGrantPolicy[],};
export type MicrosoftGraphFeatureRolloutPolicyCollectionResponse= {value?: MicrosoftGraphFeatureRolloutPolicy[],};
export type MicrosoftGraphConditionalAccessPolicyCollectionResponse= {value?: MicrosoftGraphConditionalAccessPolicy[],};
export type MicrosoftGraphUnifiedRoleManagementPolicyCollectionResponse= {value?: MicrosoftGraphUnifiedRoleManagementPolicy[],};
export type MicrosoftGraphUnifiedRoleManagementPolicyAssignmentCollectionResponse= {value?: MicrosoftGraphUnifiedRoleManagementPolicyAssignment[],};
export type MicrosoftGraphCrossTenantAccessPolicyConfigurationPartnerCollectionResponse= {value?: {b2bCollaborationInbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting,b2bCollaborationOutbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting,b2bDirectConnectInbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting,b2bDirectConnectOutbound?: MicrosoftGraphCrossTenantAccessPolicyB2BSetting,inboundTrust?: MicrosoftGraphCrossTenantAccessPolicyInboundTrust,isServiceProvider?: boolean,tenantId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphPermissionGrantConditionSetCollectionResponse= {value?: MicrosoftGraphPermissionGrantConditionSet[],};
export type MicrosoftGraphUnifiedRoleManagementPolicyRuleCollectionResponse= {value?: MicrosoftGraphUnifiedRoleManagementPolicyRule[],};
export type MicrosoftGraphBitlockerRecoveryKeyCollectionResponse= {value?: MicrosoftGraphBitlockerRecoveryKey[],};
export type MicrosoftGraphThreatAssessmentRequestCollectionResponse= {value?: MicrosoftGraphThreatAssessmentRequest[],};
export type MicrosoftGraphThreatAssessmentResultCollectionResponse= {value?: MicrosoftGraphThreatAssessmentResult[],};
export type MicrosoftGraphBookingAppointmentCollectionResponse= {value?: MicrosoftGraphBookingAppointment[],};
export type MicrosoftGraphBookingCustomerBaseCollectionResponse= {value?: MicrosoftGraphBookingCustomerBase[],};
export type MicrosoftGraphBookingCustomQuestionCollectionResponse= {value?: MicrosoftGraphBookingCustomQuestion[],};
export type MicrosoftGraphBookingServiceCollectionResponse= {value?: MicrosoftGraphBookingService[],};
export type MicrosoftGraphBookingStaffMemberBaseCollectionResponse= {value?: MicrosoftGraphBookingStaffMemberBase[],};
export type MicrosoftGraphBookingBusinessCollectionResponse= {value?: MicrosoftGraphBookingBusiness[],};
export type MicrosoftGraphBookingCurrencyCollectionResponse= {value?: MicrosoftGraphBookingCurrency[],};
export type MicrosoftGraphSubjectRightsRequestCollectionResponse= {value?: MicrosoftGraphSubjectRightsRequest[],};
export type MicrosoftGraphAuthoredNoteCollectionResponse= {value?: MicrosoftGraphAuthoredNote[],};
export type MicrosoftGraphSharedWithChannelTeamInfoCollectionResponse= {value?: MicrosoftGraphSharedWithChannelTeamInfo[],};
export type MicrosoftGraphConversationCollectionResponse= {value?: MicrosoftGraphConversation[],};
export type MicrosoftGraphConversationThreadCollectionResponse= {value?: MicrosoftGraphConversationThread[],};
export type MicrosoftGraphTeamworkTagMemberCollectionResponse= {value?: MicrosoftGraphTeamworkTagMember[],};
export type MicrosoftGraphOfferShiftRequestCollectionResponse= {value?: MicrosoftGraphOfferShiftRequest[],};
export type MicrosoftGraphOpenShiftChangeRequestCollectionResponse= {value?: MicrosoftGraphOpenShiftChangeRequest[],};
export type MicrosoftGraphOpenShiftCollectionResponse= {value?: MicrosoftGraphOpenShift[],};
export type MicrosoftGraphSchedulingGroupCollectionResponse= {value?: MicrosoftGraphSchedulingGroup[],};
export type MicrosoftGraphShiftCollectionResponse= {value?: MicrosoftGraphShift[],};
export type MicrosoftGraphSwapShiftsChangeRequestCollectionResponse= {value?: MicrosoftGraphSwapShiftsChangeRequest[],};
export type MicrosoftGraphTimeOffReasonCollectionResponse= {value?: MicrosoftGraphTimeOffReason[],};
export type MicrosoftGraphTimeOffRequestCollectionResponse= {value?: MicrosoftGraphTimeOffRequest[],};
export type MicrosoftGraphTimeOffCollectionResponse= {value?: MicrosoftGraphTimeOff[],};
export type MicrosoftGraphPostCollectionResponse= {value?: MicrosoftGraphPost[],};
export type MicrosoftGraphAlertCollectionResponse= {value?: MicrosoftGraphAlert[],};
export type MicrosoftGraphSecureScoreControlProfileCollectionResponse= {value?: MicrosoftGraphSecureScoreControlProfile[],};
export type MicrosoftGraphSecureScoreCollectionResponse= {value?: MicrosoftGraphSecureScore[],};
export type MicrosoftGraphSimulationAutomationCollectionResponse= {value?: MicrosoftGraphSimulationAutomation[],};
export type MicrosoftGraphSimulationCollectionResponse= {value?: MicrosoftGraphSimulation[],};
export type MicrosoftGraphItemActivityStatCollectionResponse= {value?: MicrosoftGraphItemActivityStat[],};
export type MicrosoftGraphColumnLinkCollectionResponse= {value?: MicrosoftGraphColumnLink[],};
export type MicrosoftGraphListItemCollectionResponse= {value?: MicrosoftGraphListItem[],};
export type MicrosoftGraphUserFlowLanguageConfigurationCollectionResponse= {value?: MicrosoftGraphUserFlowLanguageConfiguration[],};
export type MicrosoftGraphIdentityUserFlowAttributeAssignmentCollectionResponse= {value?: MicrosoftGraphIdentityUserFlowAttributeAssignment[],};
export type MicrosoftGraphIdentityProviderBaseCollectionResponse= {value?: MicrosoftGraphIdentityProviderBase[],};
export type MicrosoftGraphUserFlowLanguagePageCollectionResponse= {value?: MicrosoftGraphUserFlowLanguagePage[],};
export type MicrosoftGraphIdentityApiConnectorCollectionResponse= {value?: MicrosoftGraphIdentityApiConnector[],};
export type MicrosoftGraphB2xIdentityUserFlowCollectionResponse= {value?: MicrosoftGraphB2xIdentityUserFlow[],};
export type MicrosoftGraphIdentityUserFlowAttributeCollectionResponse= {value?: MicrosoftGraphIdentityUserFlowAttribute[],};
export type MicrosoftGraphAuthenticationContextClassReferenceCollectionResponse= {value?: MicrosoftGraphAuthenticationContextClassReference[],};
export type MicrosoftGraphNamedLocationCollectionResponse= {value?: MicrosoftGraphNamedLocation[],};
export type MicrosoftGraphConditionalAccessTemplateCollectionResponse= {value?: MicrosoftGraphConditionalAccessTemplate[],};
export type MicrosoftGraphAdministrativeUnitCollectionResponse= {value?: MicrosoftGraphAdministrativeUnit[],};
export type MicrosoftGraphInternalDomainFederationCollectionResponse= {value?: MicrosoftGraphInternalDomainFederation[],};
export type MicrosoftGraphUnifiedRoleAssignmentCollectionResponse= {value?: MicrosoftGraphUnifiedRoleAssignment[],};
export type MicrosoftGraphUnifiedRoleDefinitionCollectionResponse= {value?: MicrosoftGraphUnifiedRoleDefinition[],};
export type MicrosoftGraphUnifiedRoleAssignmentScheduleInstanceCollectionResponse= {value?: MicrosoftGraphUnifiedRoleAssignmentScheduleInstance[],};
export type MicrosoftGraphUnifiedRoleAssignmentScheduleRequestCollectionResponse= {value?: MicrosoftGraphUnifiedRoleAssignmentScheduleRequest[],};
export type MicrosoftGraphUnifiedRoleAssignmentScheduleCollectionResponse= {value?: MicrosoftGraphUnifiedRoleAssignmentSchedule[],};
export type MicrosoftGraphUnifiedRoleEligibilityScheduleInstanceCollectionResponse= {value?: MicrosoftGraphUnifiedRoleEligibilityScheduleInstance[],};
export type MicrosoftGraphUnifiedRoleEligibilityScheduleRequestCollectionResponse= {value?: MicrosoftGraphUnifiedRoleEligibilityScheduleRequest[],};
export type MicrosoftGraphUnifiedRoleEligibilityScheduleCollectionResponse= {value?: MicrosoftGraphUnifiedRoleEligibilitySchedule[],};
export type MicrosoftGraphExternalDomainNameCollectionResponse= {value?: MicrosoftGraphExternalDomainName[],};
export type MicrosoftGraphEducationCategoryCollectionResponse= {value?: MicrosoftGraphEducationCategory[],};
export type MicrosoftGraphEducationAssignmentResourceCollectionResponse= {value?: MicrosoftGraphEducationAssignmentResource[],};
export type MicrosoftGraphEducationSubmissionCollectionResponse= {value?: MicrosoftGraphEducationSubmission[],};
export type MicrosoftGraphEducationOutcomeCollectionResponse= {value?: MicrosoftGraphEducationOutcome[],};
export type MicrosoftGraphEducationSubmissionResourceCollectionResponse= {value?: MicrosoftGraphEducationSubmissionResource[],};
export type MicrosoftGraphEducationAssignmentCollectionResponse= {value?: MicrosoftGraphEducationAssignment[],};
export type MicrosoftGraphEducationUserCollectionResponse= {value?: MicrosoftGraphEducationUser[],};
export type MicrosoftGraphEducationSchoolCollectionResponse= {value?: MicrosoftGraphEducationSchool[],};
export type MicrosoftGraphEducationRubricCollectionResponse= {value?: MicrosoftGraphEducationRubric[],};
export type MicrosoftGraphEducationClassCollectionResponse= {value?: MicrosoftGraphEducationClass[],};
export type MicrosoftGraphThumbnailSetCollectionResponse= {value?: MicrosoftGraphThumbnailSet[],};
export type MicrosoftGraphDriveItemVersionCollectionResponse= {value?: MicrosoftGraphDriveItemVersion[],};
export type MicrosoftGraphWorkbookCommentCollectionResponse= {value?: MicrosoftGraphWorkbookComment[],};
export type MicrosoftGraphWorkbookNamedItemCollectionResponse= {value?: MicrosoftGraphWorkbookNamedItem[],};
export type MicrosoftGraphWorkbookOperationCollectionResponse= {value?: MicrosoftGraphWorkbookOperation[],};
export type MicrosoftGraphWorkbookTableCollectionResponse= {value?: MicrosoftGraphWorkbookTable[],};
export type MicrosoftGraphWorkbookWorksheetCollectionResponse= {value?: MicrosoftGraphWorkbookWorksheet[],};
export type MicrosoftGraphDocumentSetVersionCollectionResponse= {value?: MicrosoftGraphDocumentSetVersion[],};
export type MicrosoftGraphListItemVersionCollectionResponse= {value?: MicrosoftGraphListItemVersion[],};
export type MicrosoftGraphWorkbookCommentReplyCollectionResponse= {value?: MicrosoftGraphWorkbookCommentReply[],};
export type MicrosoftGraphWorkbookTableColumnCollectionResponse= {value?: MicrosoftGraphWorkbookTableColumn[],};
export type MicrosoftGraphWorkbookTableRowCollectionResponse= {value?: MicrosoftGraphWorkbookTableRow[],};
export type MicrosoftGraphWorkbookChartCollectionResponse= {value?: MicrosoftGraphWorkbookChart[],};
export type MicrosoftGraphWorkbookPivotTableCollectionResponse= {value?: MicrosoftGraphWorkbookPivotTable[],};
export type MicrosoftGraphWorkbookChartSeriesCollectionResponse= {value?: MicrosoftGraphWorkbookChartSeries[],};
export type MicrosoftGraphWorkbookChartPointCollectionResponse= {value?: MicrosoftGraphWorkbookChartPoint[],};
export type MicrosoftGraphWorkbookRangeBorderCollectionResponse= {value?: MicrosoftGraphWorkbookRangeBorder[],};
export type MicrosoftGraphWorkbookRangeViewCollectionResponse= {value?: MicrosoftGraphWorkbookRangeView[],};
export type MicrosoftGraphRoomCollectionResponse= {value?: MicrosoftGraphRoom[],};
export type MicrosoftGraphItemActivityCollectionResponse= {value?: MicrosoftGraphItemActivity[],};
export type MicrosoftGraphCallCollectionResponse= {value?: MicrosoftGraphCall[],};
export type MicrosoftGraphCallRecordsCallRecordCollectionResponse= {value?: MicrosoftGraphCallRecordsCallRecord[],};
export type MicrosoftGraphPresenceCollectionResponse= {value?: MicrosoftGraphPresence[],};
export type MicrosoftGraphAudioRoutingGroupCollectionResponse= {value?: MicrosoftGraphAudioRoutingGroup[],};
export type MicrosoftGraphContentSharingSessionCollectionResponse= {value?: MicrosoftGraphContentSharingSession[],};
export type MicrosoftGraphCommsOperationCollectionResponse= {value?: MicrosoftGraphCommsOperation[],};
export type MicrosoftGraphParticipantCollectionResponse= {value?: MicrosoftGraphParticipant[],};
export type MicrosoftGraphAccessReviewHistoryInstanceCollectionResponse= {value?: MicrosoftGraphAccessReviewHistoryInstance[],};
export type MicrosoftGraphAccessReviewReviewerCollectionResponse= {value?: MicrosoftGraphAccessReviewReviewer[],};
export type MicrosoftGraphAccessReviewInstanceDecisionItemCollectionResponse= {value?: MicrosoftGraphAccessReviewInstanceDecisionItem[],};
export type MicrosoftGraphAccessReviewStageCollectionResponse= {value?: MicrosoftGraphAccessReviewStage[],};
export type MicrosoftGraphAccessReviewInstanceCollectionResponse= {value?: MicrosoftGraphAccessReviewInstance[],};
export type MicrosoftGraphAccessReviewScheduleDefinitionCollectionResponse= {value?: MicrosoftGraphAccessReviewScheduleDefinition[],};
export type MicrosoftGraphAccessReviewHistoryDefinitionCollectionResponse= {value?: MicrosoftGraphAccessReviewHistoryDefinition[],};
export type MicrosoftGraphAppConsentRequestCollectionResponse= {value?: MicrosoftGraphAppConsentRequest[],};
export type MicrosoftGraphUserConsentRequestCollectionResponse= {value?: MicrosoftGraphUserConsentRequest[],};
export type MicrosoftGraphApprovalStageCollectionResponse= {value?: MicrosoftGraphApprovalStage[],};
export type MicrosoftGraphApprovalCollectionResponse= {value?: MicrosoftGraphApproval[],};
export type MicrosoftGraphAccessPackageCollectionResponse= {value?: MicrosoftGraphAccessPackage[],};
export type MicrosoftGraphAccessPackageAssignmentPolicyCollectionResponse= {value?: MicrosoftGraphAccessPackageAssignmentPolicy[],};
export type MicrosoftGraphAccessPackageAssignmentRequestCollectionResponse= {value?: MicrosoftGraphAccessPackageAssignmentRequest[],};
export type MicrosoftGraphAccessPackageAssignmentCollectionResponse= {value?: MicrosoftGraphAccessPackageAssignment[],};
export type MicrosoftGraphAccessPackageCatalogCollectionResponse= {value?: MicrosoftGraphAccessPackageCatalog[],};
export type MicrosoftGraphConnectedOrganizationCollectionResponse= {value?: MicrosoftGraphConnectedOrganization[],};
export type MicrosoftGraphAgreementFileLocalizationCollectionResponse= {value?: MicrosoftGraphAgreementFileLocalization[],};
export type MicrosoftGraphAgreementFileVersionCollectionResponse= {value?: MicrosoftGraphAgreementFileVersion[],};
export type MicrosoftGraphRiskDetectionCollectionResponse= {value?: MicrosoftGraphRiskDetection[],};
export type MicrosoftGraphRiskyUserCollectionResponse= {value?: MicrosoftGraphRiskyUser[],};
export type MicrosoftGraphRiskyUserHistoryItemCollectionResponse= {value?: MicrosoftGraphRiskyUserHistoryItem[],};
export type MicrosoftGraphMobileAppAssignmentCollectionResponse= {value?: MicrosoftGraphMobileAppAssignment[],};
export type MicrosoftGraphMobileAppCategoryCollectionResponse= {value?: MicrosoftGraphMobileAppCategory[],};
export type MicrosoftGraphMobileAppContentCollectionResponse= {value?: MicrosoftGraphMobileAppContent[],};
export type MicrosoftGraphManagedEBookCollectionResponse= {value?: MicrosoftGraphManagedEBook[],};
export type MicrosoftGraphManagedDeviceMobileAppConfigurationCollectionResponse= {value?: MicrosoftGraphManagedDeviceMobileAppConfiguration[],};
export type MicrosoftGraphMobileAppCollectionResponse= {value?: MicrosoftGraphMobileApp[],};
export type MicrosoftGraphVppTokenCollectionResponse= {value?: MicrosoftGraphVppToken[],};
export type MicrosoftGraphAndroidManagedAppProtectionCollectionResponse= {value?: MicrosoftGraphAndroidManagedAppProtection[],};
export type MicrosoftGraphDefaultManagedAppProtectionCollectionResponse= {value?: MicrosoftGraphDefaultManagedAppProtection[],};
export type MicrosoftGraphIosManagedAppProtectionCollectionResponse= {value?: MicrosoftGraphIosManagedAppProtection[],};
export type MicrosoftGraphManagedAppStatusCollectionResponse= {value?: MicrosoftGraphManagedAppStatus[],};
export type MicrosoftGraphMdmWindowsInformationProtectionPolicyCollectionResponse= {value?: MicrosoftGraphMdmWindowsInformationProtectionPolicy[],};
export type MicrosoftGraphTargetedManagedAppConfigurationCollectionResponse= {value?: MicrosoftGraphTargetedManagedAppConfiguration[],};
export type MicrosoftGraphWindowsInformationProtectionPolicyCollectionResponse= {value?: MicrosoftGraphWindowsInformationProtectionPolicy[],};
export type MicrosoftGraphManagedEBookAssignmentCollectionResponse= {value?: MicrosoftGraphManagedEBookAssignment[],};
export type MicrosoftGraphDeviceInstallStateCollectionResponse= {value?: MicrosoftGraphDeviceInstallState[],};
export type MicrosoftGraphUserInstallStateSummaryCollectionResponse= {value?: MicrosoftGraphUserInstallStateSummary[],};
export type MicrosoftGraphManagedDeviceMobileAppConfigurationAssignmentCollectionResponse= {value?: MicrosoftGraphManagedDeviceMobileAppConfigurationAssignment[],};
export type MicrosoftGraphManagedDeviceMobileAppConfigurationDeviceStatusCollectionResponse= {value?: MicrosoftGraphManagedDeviceMobileAppConfigurationDeviceStatus[],};
export type MicrosoftGraphManagedDeviceMobileAppConfigurationUserStatusCollectionResponse= {value?: MicrosoftGraphManagedDeviceMobileAppConfigurationUserStatus[],};
export type MicrosoftGraphTargetedManagedAppPolicyAssignmentCollectionResponse= {value?: MicrosoftGraphTargetedManagedAppPolicyAssignment[],};
export type MicrosoftGraphManagedMobileAppCollectionResponse= {value?: MicrosoftGraphManagedMobileApp[],};
export type MicrosoftGraphWindowsInformationProtectionAppLockerFileCollectionResponse= {value?: MicrosoftGraphWindowsInformationProtectionAppLockerFile[],};
export type MicrosoftGraphMobileAppContentFileCollectionResponse= {value?: MicrosoftGraphMobileAppContentFile[],};
export type MicrosoftGraphTermsAndConditionsCollectionResponse= {value?: MicrosoftGraphTermsAndConditions[],};
export type MicrosoftGraphDeviceCompliancePolicyCollectionResponse= {value?: MicrosoftGraphDeviceCompliancePolicy[],};
export type MicrosoftGraphDeviceCompliancePolicySettingStateSummaryCollectionResponse= {value?: MicrosoftGraphDeviceCompliancePolicySettingStateSummary[],};
export type MicrosoftGraphDeviceConfigurationCollectionResponse= {value?: MicrosoftGraphDeviceConfiguration[],};
export type MicrosoftGraphIosUpdateDeviceStatusCollectionResponse= {value?: MicrosoftGraphIosUpdateDeviceStatus[],};
export type MicrosoftGraphComplianceManagementPartnerCollectionResponse= {value?: MicrosoftGraphComplianceManagementPartner[],};
export type MicrosoftGraphDeviceCategoryCollectionResponse= {value?: MicrosoftGraphDeviceCategory[],};
export type MicrosoftGraphDeviceEnrollmentConfigurationCollectionResponse= {value?: MicrosoftGraphDeviceEnrollmentConfiguration[],};
export type MicrosoftGraphDeviceManagementPartnerCollectionResponse= {value?: MicrosoftGraphDeviceManagementPartner[],};
export type MicrosoftGraphDeviceManagementExchangeConnectorCollectionResponse= {value?: MicrosoftGraphDeviceManagementExchangeConnector[],};
export type MicrosoftGraphMobileThreatDefenseConnectorCollectionResponse= {value?: MicrosoftGraphMobileThreatDefenseConnector[],};
export type MicrosoftGraphDetectedAppCollectionResponse= {value?: MicrosoftGraphDetectedApp[],};
export type MicrosoftGraphImportedWindowsAutopilotDeviceIdentityCollectionResponse= {value?: MicrosoftGraphImportedWindowsAutopilotDeviceIdentity[],};
export type MicrosoftGraphWindowsAutopilotDeviceIdentityCollectionResponse= {value?: MicrosoftGraphWindowsAutopilotDeviceIdentity[],};
export type MicrosoftGraphNotificationMessageTemplateCollectionResponse= {value?: MicrosoftGraphNotificationMessageTemplate[],};
export type MicrosoftGraphResourceOperationCollectionResponse= {value?: MicrosoftGraphResourceOperation[],};
export type MicrosoftGraphDeviceAndAppManagementRoleAssignmentCollectionResponse= {value?: MicrosoftGraphDeviceAndAppManagementRoleAssignment[],};
export type MicrosoftGraphRoleDefinitionCollectionResponse= {value?: MicrosoftGraphRoleDefinition[],};
export type MicrosoftGraphRemoteAssistancePartnerCollectionResponse= {value?: MicrosoftGraphRemoteAssistancePartner[],};
export type MicrosoftGraphTelecomExpenseManagementPartnerCollectionResponse= {value?: MicrosoftGraphTelecomExpenseManagementPartner[],};
export type MicrosoftGraphWindowsInformationProtectionAppLearningSummaryCollectionResponse= {value?: MicrosoftGraphWindowsInformationProtectionAppLearningSummary[],};
export type MicrosoftGraphWindowsInformationProtectionNetworkLearningSummaryCollectionResponse= {value?: MicrosoftGraphWindowsInformationProtectionNetworkLearningSummary[],};
export type MicrosoftGraphTermsAndConditionsAcceptanceStatusCollectionResponse= {value?: MicrosoftGraphTermsAndConditionsAcceptanceStatus[],};
export type MicrosoftGraphTermsAndConditionsAssignmentCollectionResponse= {value?: MicrosoftGraphTermsAndConditionsAssignment[],};
export type MicrosoftGraphDeviceCompliancePolicyAssignmentCollectionResponse= {value?: MicrosoftGraphDeviceCompliancePolicyAssignment[],};
export type MicrosoftGraphSettingStateDeviceSummaryCollectionResponse= {value?: MicrosoftGraphSettingStateDeviceSummary[],};
export type MicrosoftGraphDeviceComplianceDeviceStatusCollectionResponse= {value?: MicrosoftGraphDeviceComplianceDeviceStatus[],};
export type MicrosoftGraphDeviceComplianceScheduledActionForRuleCollectionResponse= {value?: MicrosoftGraphDeviceComplianceScheduledActionForRule[],};
export type MicrosoftGraphDeviceComplianceUserStatusCollectionResponse= {value?: MicrosoftGraphDeviceComplianceUserStatus[],};
export type MicrosoftGraphDeviceComplianceSettingStateCollectionResponse= {value?: MicrosoftGraphDeviceComplianceSettingState[],};
export type MicrosoftGraphDeviceConfigurationAssignmentCollectionResponse= {value?: MicrosoftGraphDeviceConfigurationAssignment[],};
export type MicrosoftGraphDeviceConfigurationDeviceStatusCollectionResponse= {value?: MicrosoftGraphDeviceConfigurationDeviceStatus[],};
export type MicrosoftGraphDeviceConfigurationUserStatusCollectionResponse= {value?: MicrosoftGraphDeviceConfigurationUserStatus[],};
export type MicrosoftGraphEnrollmentConfigurationAssignmentCollectionResponse= {value?: MicrosoftGraphEnrollmentConfigurationAssignment[],};
export type MicrosoftGraphLocalizedNotificationMessageCollectionResponse= {value?: MicrosoftGraphLocalizedNotificationMessage[],};
export type MicrosoftGraphRoleAssignmentCollectionResponse= {value?: MicrosoftGraphRoleAssignment[],};
export type MicrosoftGraphDeviceManagementExportJobCollectionResponse= {value?: MicrosoftGraphDeviceManagementExportJob[],};
export type MicrosoftGraphDeviceComplianceActionItemCollectionResponse= {value?: MicrosoftGraphDeviceComplianceActionItem[],};
export type MicrosoftGraphPrintUsageByPrinterCollectionResponse= {value?: MicrosoftGraphPrintUsageByPrinter[],};
export type MicrosoftGraphPrintUsageByUserCollectionResponse= {value?: MicrosoftGraphPrintUsageByUser[],};
export type MicrosoftGraphServiceHealthCollectionResponse= {value?: MicrosoftGraphServiceHealth[],};
export type MicrosoftGraphServiceHealthIssueCollectionResponse= {value?: MicrosoftGraphServiceHealthIssue[],};
export type MicrosoftGraphServiceUpdateMessageCollectionResponse= {value?: MicrosoftGraphServiceUpdateMessage[],};
export type MicrosoftGraphServiceAnnouncementAttachmentCollectionResponse= {value?: MicrosoftGraphServiceAnnouncementAttachment[],};
export type MicrosoftGraphPlannerBucketCollectionResponse= {value?: MicrosoftGraphPlannerBucket[],};
export type MicrosoftGraphPrintConnectorCollectionResponse= {value?: MicrosoftGraphPrintConnector[],};
export type MicrosoftGraphPrintOperationCollectionResponse= {value?: MicrosoftGraphPrintOperation[],};
export type MicrosoftGraphPrinterCollectionResponse= {value?: MicrosoftGraphPrinter[],};
export type MicrosoftGraphPrintServiceCollectionResponse= {value?: MicrosoftGraphPrintService[],};
export type MicrosoftGraphPrinterShareCollectionResponse= {value?: MicrosoftGraphPrinterShare[],};
export type MicrosoftGraphPrintTaskDefinitionCollectionResponse= {value?: MicrosoftGraphPrintTaskDefinition[],};
export type MicrosoftGraphPrintJobCollectionResponse= {value?: MicrosoftGraphPrintJob[],};
export type MicrosoftGraphPrintTaskTriggerCollectionResponse= {value?: MicrosoftGraphPrintTaskTrigger[],};
export type MicrosoftGraphPrintServiceEndpointCollectionResponse= {value?: MicrosoftGraphPrintServiceEndpoint[],};
export type MicrosoftGraphPrintTaskCollectionResponse= {value?: MicrosoftGraphPrintTask[],};
export type MicrosoftGraphPrintDocumentCollectionResponse= {value?: MicrosoftGraphPrintDocument[],};
export type MicrosoftGraphSimulationAutomationRunCollectionResponse= {value?: MicrosoftGraphSimulationAutomationRun[],};
export type MicrosoftGraphAttendanceRecordCollectionResponse= {value?: MicrosoftGraphAttendanceRecord[],};
export type MicrosoftGraphTeamsAppCollectionResponse= {value?: MicrosoftGraphTeamsApp[],};
export type MicrosoftGraphTeamsAppDefinitionCollectionResponse= {value?: MicrosoftGraphTeamsAppDefinition[],};
export type MicrosoftGraphChatMessageHostedContentCollectionResponse= {value?: MicrosoftGraphChatMessageHostedContent[],};
export type MicrosoftGraphWorkforceIntegrationCollectionResponse= {value?: MicrosoftGraphWorkforceIntegration[],};
export type MicrosoftGraphTodoTaskCollectionResponse= {value?: MicrosoftGraphTodoTask[],};
export type MicrosoftGraphAttachmentBaseCollectionResponse= {value?: MicrosoftGraphAttachmentBase[],};
export type MicrosoftGraphAttachmentSessionCollectionResponse= {value?: MicrosoftGraphAttachmentSession[],};
export type MicrosoftGraphChecklistItemCollectionResponse= {value?: MicrosoftGraphChecklistItem[],};
export type MicrosoftGraphLinkedResourceCollectionResponse= {value?: MicrosoftGraphLinkedResource[],};
export type MicrosoftGraphSecurityEdiscoveryCaseCollectionResponse= {value?: MicrosoftGraphSecurityEdiscoveryCase[],};
export type MicrosoftGraphSecurityEdiscoveryCustodianCollectionResponse= {value?: MicrosoftGraphSecurityEdiscoveryCustodian[],};
export type MicrosoftGraphSecurityEdiscoveryNoncustodialDataSourceCollectionResponse= {value?: MicrosoftGraphSecurityEdiscoveryNoncustodialDataSource[],};
export type MicrosoftGraphSecurityCaseOperationCollectionResponse= {value?: MicrosoftGraphSecurityCaseOperation[],};
export type MicrosoftGraphSecurityEdiscoveryReviewSetCollectionResponse= {value?: MicrosoftGraphSecurityEdiscoveryReviewSet[],};
export type MicrosoftGraphSecurityEdiscoverySearchCollectionResponse= {value?: MicrosoftGraphSecurityEdiscoverySearch[],};
export type MicrosoftGraphSecurityEdiscoveryReviewTagCollectionResponse= {value?: MicrosoftGraphSecurityEdiscoveryReviewTag[],};
export type MicrosoftGraphSecurityEdiscoveryReviewSetQueryCollectionResponse= {value?: MicrosoftGraphSecurityEdiscoveryReviewSetQuery[],};
export type MicrosoftGraphSecurityDataSourceCollectionResponse= {value?: MicrosoftGraphSecurityDataSource[],};
export type MicrosoftGraphSecuritySiteSourceCollectionResponse= {value?: MicrosoftGraphSecuritySiteSource[],};
export type MicrosoftGraphSecurityUnifiedGroupSourceCollectionResponse= {value?: MicrosoftGraphSecurityUnifiedGroupSource[],};
export type MicrosoftGraphSecurityUserSourceCollectionResponse= {value?: MicrosoftGraphSecurityUserSource[],};
export type MicrosoftGraphTermStoreGroupCollectionResponse= {value?: MicrosoftGraphTermStoreGroup[],};
export type MicrosoftGraphTermStoreSetCollectionResponse= {value?: MicrosoftGraphTermStoreSet[],};
export type MicrosoftGraphTermStoreTermCollectionResponse= {value?: MicrosoftGraphTermStoreTerm[],};
export type MicrosoftGraphTermStoreRelationCollectionResponse= {value?: MicrosoftGraphTermStoreRelation[],};
export type MicrosoftGraphCallRecordsSessionCollectionResponse= {value?: MicrosoftGraphCallRecordsSession[],};
export type MicrosoftGraphCallRecordsSegmentCollectionResponse= {value?: MicrosoftGraphCallRecordsSegment[],};
export type MicrosoftGraphExternalConnectorsExternalGroupCollectionResponse= {value?: MicrosoftGraphExternalConnectorsExternalGroup[],};
export type MicrosoftGraphExternalConnectorsExternalItemCollectionResponse= {value?: MicrosoftGraphExternalConnectorsExternalItem[],};
export type MicrosoftGraphExternalConnectorsConnectionOperationCollectionResponse= {value?: MicrosoftGraphExternalConnectorsConnectionOperation[],};
export type MicrosoftGraphExternalConnectorsIdentityCollectionResponse= {value?: MicrosoftGraphExternalConnectorsIdentity[],};
export type MicrosoftGraphEmailAuthenticationMethodConfigurationCollectionResponse= {value?: MicrosoftGraphEmailAuthenticationMethodConfiguration[],};
export type MicrosoftGraphFido2AuthenticationMethodConfigurationCollectionResponse= {value?: MicrosoftGraphFido2AuthenticationMethodConfiguration[],};
export type MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse= {value?: MicrosoftGraphMicrosoftAuthenticatorAuthenticationMethodConfiguration[],};
export type MicrosoftGraphTemporaryAccessPassAuthenticationMethodConfigurationCollectionResponse= {value?: MicrosoftGraphTemporaryAccessPassAuthenticationMethodConfiguration[],};
export type MicrosoftGraphX509CertificateAuthenticationMethodConfigurationCollectionResponse= {value?: MicrosoftGraphX509CertificateAuthenticationMethodConfiguration[],};
export type MicrosoftGraphPolicyBaseCollectionResponse= {value?: MicrosoftGraphPolicyBase[],};
export type MicrosoftGraphStsPolicyCollectionResponse= {value?: MicrosoftGraphStsPolicy[],};
export type MicrosoftGraphAuthorizationPolicyCollectionResponse= {value?: MicrosoftGraphAuthorizationPolicy[],};
export type MicrosoftGraphCrossTenantAccessPolicyCollectionResponse= {value?: MicrosoftGraphCrossTenantAccessPolicy[],};
export type MicrosoftGraphIdentitySecurityDefaultsEnforcementPolicyCollectionResponse= {value?: MicrosoftGraphIdentitySecurityDefaultsEnforcementPolicy[],};
export type MicrosoftGraphDirectoryObjectPartnerReferenceCollectionResponse= {value?: MicrosoftGraphDirectoryObjectPartnerReference[],};
export type MicrosoftGraphDomainDnsCnameRecordCollectionResponse= {value?: MicrosoftGraphDomainDnsCnameRecord[],};
export type MicrosoftGraphDomainDnsMxRecordCollectionResponse= {value?: MicrosoftGraphDomainDnsMxRecord[],};
export type MicrosoftGraphDomainDnsSrvRecordCollectionResponse= {value?: MicrosoftGraphDomainDnsSrvRecord[],};
export type MicrosoftGraphDomainDnsTxtRecordCollectionResponse= {value?: MicrosoftGraphDomainDnsTxtRecord[],};
export type MicrosoftGraphDomainDnsUnavailableRecordCollectionResponse= {value?: MicrosoftGraphDomainDnsUnavailableRecord[],};
export type MicrosoftGraphRoomListCollectionResponse= {value?: MicrosoftGraphRoomList[],};
export type MicrosoftGraphMailSearchFolderCollectionResponse= {value?: MicrosoftGraphMailSearchFolder[],};
export type MicrosoftGraphCalendarSharingMessageCollectionResponse= {value?: MicrosoftGraphCalendarSharingMessage[],};
export type MicrosoftGraphEventMessageCollectionResponse= {value?: MicrosoftGraphEventMessage[],};
export type MicrosoftGraphEventMessageRequestCollectionResponse= {value?: MicrosoftGraphEventMessageRequest[],};
export type MicrosoftGraphEventMessageResponseCollectionResponse= {value?: MicrosoftGraphEventMessageResponse[],};
export type MicrosoftGraphOpenTypeExtensionCollectionResponse= {value?: MicrosoftGraphOpenTypeExtension[],};
export type MicrosoftGraphAndroidManagedAppRegistrationCollectionResponse= {value?: MicrosoftGraphAndroidManagedAppRegistration[],};
export type MicrosoftGraphIosManagedAppRegistrationCollectionResponse= {value?: MicrosoftGraphIosManagedAppRegistration[],};
export type MicrosoftGraphEnrollmentTroubleshootingEventCollectionResponse= {value?: MicrosoftGraphEnrollmentTroubleshootingEvent[],};
export type MicrosoftGraphFileAttachmentCollectionResponse= {value?: MicrosoftGraphFileAttachment[],};
export type MicrosoftGraphItemAttachmentCollectionResponse= {value?: MicrosoftGraphItemAttachment[],};
export type MicrosoftGraphReferenceAttachmentCollectionResponse= {value?: MicrosoftGraphReferenceAttachment[],};
export type MicrosoftGraphManagedAppProtectionCollectionResponse= {value?: MicrosoftGraphManagedAppProtection[],};
export type MicrosoftGraphTargetedManagedAppProtectionCollectionResponse= {value?: MicrosoftGraphTargetedManagedAppProtection[],};
export type MicrosoftGraphWindowsInformationProtectionCollectionResponse= {value?: MicrosoftGraphWindowsInformationProtection[],};
export type MicrosoftGraphManagedAppConfigurationCollectionResponse= {value?: MicrosoftGraphManagedAppConfiguration[],};
export type MicrosoftGraphAadUserConversationMemberCollectionResponse= {value?: MicrosoftGraphAadUserConversationMember[],};
export type MicrosoftGraphUnifiedRoleManagementPolicyApprovalRuleCollectionResponse= {value?: MicrosoftGraphUnifiedRoleManagementPolicyApprovalRule[],};
export type MicrosoftGraphUnifiedRoleManagementPolicyAuthenticationContextRuleCollectionResponse= {value?: MicrosoftGraphUnifiedRoleManagementPolicyAuthenticationContextRule[],};
export type MicrosoftGraphUnifiedRoleManagementPolicyEnablementRuleCollectionResponse= {value?: MicrosoftGraphUnifiedRoleManagementPolicyEnablementRule[],};
export type MicrosoftGraphUnifiedRoleManagementPolicyExpirationRuleCollectionResponse= {value?: MicrosoftGraphUnifiedRoleManagementPolicyExpirationRule[],};
export type MicrosoftGraphUnifiedRoleManagementPolicyNotificationRuleCollectionResponse= {value?: MicrosoftGraphUnifiedRoleManagementPolicyNotificationRule[],};
export type MicrosoftGraphEmailFileAssessmentRequestCollectionResponse= {value?: MicrosoftGraphEmailFileAssessmentRequest[],};
export type MicrosoftGraphFileAssessmentRequestCollectionResponse= {value?: MicrosoftGraphFileAssessmentRequest[],};
export type MicrosoftGraphMailAssessmentRequestCollectionResponse= {value?: MicrosoftGraphMailAssessmentRequest[],};
export type MicrosoftGraphUrlAssessmentRequestCollectionResponse= {value?: MicrosoftGraphUrlAssessmentRequest[],};
export type MicrosoftGraphBookingCustomerCollectionResponse= {value?: MicrosoftGraphBookingCustomer[],};
export type MicrosoftGraphBookingStaffMemberCollectionResponse= {value?: MicrosoftGraphBookingStaffMember[],};
export type MicrosoftGraphAppleManagedIdentityProviderCollectionResponse= {value?: MicrosoftGraphAppleManagedIdentityProvider[],};
export type MicrosoftGraphBuiltInIdentityProviderCollectionResponse= {value?: MicrosoftGraphBuiltInIdentityProvider[],};
export type MicrosoftGraphSocialIdentityProviderCollectionResponse= {value?: MicrosoftGraphSocialIdentityProvider[],};
export type MicrosoftGraphSamlOrWsFedProviderCollectionResponse= {value?: MicrosoftGraphSamlOrWsFedProvider[],};
export type MicrosoftGraphSamlOrWsFedExternalDomainFederationCollectionResponse= {value?: MicrosoftGraphSamlOrWsFedExternalDomainFederation[],};
export type MicrosoftGraphIdentityBuiltInUserFlowAttributeCollectionResponse= {value?: MicrosoftGraphIdentityBuiltInUserFlowAttribute[],};
export type MicrosoftGraphIdentityCustomUserFlowAttributeCollectionResponse= {value?: MicrosoftGraphIdentityCustomUserFlowAttribute[],};
export type MicrosoftGraphCountryNamedLocationCollectionResponse= {value?: MicrosoftGraphCountryNamedLocation[],};
export type MicrosoftGraphIpNamedLocationCollectionResponse= {value?: MicrosoftGraphIpNamedLocation[],};
export type MicrosoftGraphEducationFeedbackOutcomeCollectionResponse= {value?: MicrosoftGraphEducationFeedbackOutcome[],};
export type MicrosoftGraphEducationPointsOutcomeCollectionResponse= {value?: MicrosoftGraphEducationPointsOutcome[],};
export type MicrosoftGraphEducationRubricOutcomeCollectionResponse= {value?: MicrosoftGraphEducationRubricOutcome[],};
export type MicrosoftGraphAddLargeGalleryViewOperationCollectionResponse= {value?: MicrosoftGraphAddLargeGalleryViewOperation[],};
export type MicrosoftGraphCancelMediaProcessingOperationCollectionResponse= {value?: MicrosoftGraphCancelMediaProcessingOperation[],};
export type MicrosoftGraphInviteParticipantsOperationCollectionResponse= {value?: MicrosoftGraphInviteParticipantsOperation[],};
export type MicrosoftGraphMuteParticipantOperationCollectionResponse= {value?: MicrosoftGraphMuteParticipantOperation[],};
export type MicrosoftGraphPlayPromptOperationCollectionResponse= {value?: MicrosoftGraphPlayPromptOperation[],};
export type MicrosoftGraphRecordOperationCollectionResponse= {value?: MicrosoftGraphRecordOperation[],};
export type MicrosoftGraphStartHoldMusicOperationCollectionResponse= {value?: MicrosoftGraphStartHoldMusicOperation[],};
export type MicrosoftGraphStopHoldMusicOperationCollectionResponse= {value?: MicrosoftGraphStopHoldMusicOperation[],};
export type MicrosoftGraphSubscribeToToneOperationCollectionResponse= {value?: MicrosoftGraphSubscribeToToneOperation[],};
export type MicrosoftGraphUnmuteParticipantOperationCollectionResponse= {value?: MicrosoftGraphUnmuteParticipantOperation[],};
export type MicrosoftGraphUpdateRecordingStatusOperationCollectionResponse= {value?: MicrosoftGraphUpdateRecordingStatusOperation[],};
export type MicrosoftGraphIosVppEBookCollectionResponse= {value?: MicrosoftGraphIosVppEBook[],};
export type MicrosoftGraphIosMobileAppConfigurationCollectionResponse= {value?: MicrosoftGraphIosMobileAppConfiguration[],};
export type MicrosoftGraphMobileLobAppCollectionResponse= {value?: MicrosoftGraphMobileLobApp[],};
export type MicrosoftGraphAndroidLobAppCollectionResponse= {value?: MicrosoftGraphAndroidLobApp[],};
export type MicrosoftGraphIosLobAppCollectionResponse= {value?: MicrosoftGraphIosLobApp[],};
export type MicrosoftGraphWin32LobAppCollectionResponse= {value?: MicrosoftGraphWin32LobApp[],};
export type MicrosoftGraphWindowsMobileMSICollectionResponse= {value?: MicrosoftGraphWindowsMobileMSI[],};
export type MicrosoftGraphWindowsUniversalAppXCollectionResponse= {value?: MicrosoftGraphWindowsUniversalAppX[],};
export type MicrosoftGraphAndroidStoreAppCollectionResponse= {value?: MicrosoftGraphAndroidStoreApp[],};
export type MicrosoftGraphIosStoreAppCollectionResponse= {value?: MicrosoftGraphIosStoreApp[],};
export type MicrosoftGraphIosVppAppCollectionResponse= {value?: MicrosoftGraphIosVppApp[],};
export type MicrosoftGraphMacOSOfficeSuiteAppCollectionResponse= {value?: MicrosoftGraphMacOSOfficeSuiteApp[],};
export type MicrosoftGraphManagedAppCollectionResponse= {value?: MicrosoftGraphManagedApp[],};
export type MicrosoftGraphManagedMobileLobAppCollectionResponse= {value?: MicrosoftGraphManagedMobileLobApp[],};
export type MicrosoftGraphManagedAndroidLobAppCollectionResponse= {value?: MicrosoftGraphManagedAndroidLobApp[],};
export type MicrosoftGraphManagedIOSLobAppCollectionResponse= {value?: MicrosoftGraphManagedIOSLobApp[],};
export type MicrosoftGraphManagedAndroidStoreAppCollectionResponse= {value?: MicrosoftGraphManagedAndroidStoreApp[],};
export type MicrosoftGraphManagedIOSStoreAppCollectionResponse= {value?: MicrosoftGraphManagedIOSStoreApp[],};
export type MicrosoftGraphMicrosoftStoreForBusinessAppCollectionResponse= {value?: MicrosoftGraphMicrosoftStoreForBusinessApp[],};
export type MicrosoftGraphWebAppCollectionResponse= {value?: MicrosoftGraphWebApp[],};
export type MicrosoftGraphManagedAppStatusRawCollectionResponse= {value?: MicrosoftGraphManagedAppStatusRaw[],};
export type MicrosoftGraphIosVppEBookAssignmentCollectionResponse= {value?: MicrosoftGraphIosVppEBookAssignment[],};
export type MicrosoftGraphAndroidCompliancePolicyCollectionResponse= {value?: MicrosoftGraphAndroidCompliancePolicy[],};
export type MicrosoftGraphAndroidWorkProfileCompliancePolicyCollectionResponse= {value?: MicrosoftGraphAndroidWorkProfileCompliancePolicy[],};
export type MicrosoftGraphIosCompliancePolicyCollectionResponse= {value?: MicrosoftGraphIosCompliancePolicy[],};
export type MicrosoftGraphMacOSCompliancePolicyCollectionResponse= {value?: MicrosoftGraphMacOSCompliancePolicy[],};
export type MicrosoftGraphWindows10CompliancePolicyCollectionResponse= {value?: MicrosoftGraphWindows10CompliancePolicy[],};
export type MicrosoftGraphWindows10MobileCompliancePolicyCollectionResponse= {value?: MicrosoftGraphWindows10MobileCompliancePolicy[],};
export type MicrosoftGraphWindows81CompliancePolicyCollectionResponse= {value?: MicrosoftGraphWindows81CompliancePolicy[],};
export type MicrosoftGraphWindowsPhone81CompliancePolicyCollectionResponse= {value?: MicrosoftGraphWindowsPhone81CompliancePolicy[],};
export type MicrosoftGraphAndroidCustomConfigurationCollectionResponse= {value?: MicrosoftGraphAndroidCustomConfiguration[],};
export type MicrosoftGraphAndroidGeneralDeviceConfigurationCollectionResponse= {value?: MicrosoftGraphAndroidGeneralDeviceConfiguration[],};
export type MicrosoftGraphAndroidWorkProfileCustomConfigurationCollectionResponse= {value?: MicrosoftGraphAndroidWorkProfileCustomConfiguration[],};
export type MicrosoftGraphAndroidWorkProfileGeneralDeviceConfigurationCollectionResponse= {value?: MicrosoftGraphAndroidWorkProfileGeneralDeviceConfiguration[],};
export type MicrosoftGraphAppleDeviceFeaturesConfigurationBaseCollectionResponse= {value?: MicrosoftGraphAppleDeviceFeaturesConfigurationBase[],};
export type MicrosoftGraphIosDeviceFeaturesConfigurationCollectionResponse= {value?: MicrosoftGraphIosDeviceFeaturesConfiguration[],};
export type MicrosoftGraphMacOSDeviceFeaturesConfigurationCollectionResponse= {value?: MicrosoftGraphMacOSDeviceFeaturesConfiguration[],};
export type MicrosoftGraphEditionUpgradeConfigurationCollectionResponse= {value?: MicrosoftGraphEditionUpgradeConfiguration[],};
export type MicrosoftGraphIosCertificateProfileCollectionResponse= {value?: MicrosoftGraphIosCertificateProfile[],};
export type MicrosoftGraphIosCustomConfigurationCollectionResponse= {value?: MicrosoftGraphIosCustomConfiguration[],};
export type MicrosoftGraphIosGeneralDeviceConfigurationCollectionResponse= {value?: MicrosoftGraphIosGeneralDeviceConfiguration[],};
export type MicrosoftGraphIosUpdateConfigurationCollectionResponse= {value?: MicrosoftGraphIosUpdateConfiguration[],};
export type MicrosoftGraphMacOSCustomConfigurationCollectionResponse= {value?: MicrosoftGraphMacOSCustomConfiguration[],};
export type MicrosoftGraphMacOSGeneralDeviceConfigurationCollectionResponse= {value?: MicrosoftGraphMacOSGeneralDeviceConfiguration[],};
export type MicrosoftGraphSharedPCConfigurationCollectionResponse= {value?: MicrosoftGraphSharedPCConfiguration[],};
export type MicrosoftGraphWindows10CustomConfigurationCollectionResponse= {value?: MicrosoftGraphWindows10CustomConfiguration[],};
export type MicrosoftGraphWindows10EndpointProtectionConfigurationCollectionResponse= {value?: MicrosoftGraphWindows10EndpointProtectionConfiguration[],};
export type MicrosoftGraphWindows10EnterpriseModernAppManagementConfigurationCollectionResponse= {value?: MicrosoftGraphWindows10EnterpriseModernAppManagementConfiguration[],};
export type MicrosoftGraphWindows10GeneralConfigurationCollectionResponse= {value?: MicrosoftGraphWindows10GeneralConfiguration[],};
export type MicrosoftGraphWindows10SecureAssessmentConfigurationCollectionResponse= {value?: MicrosoftGraphWindows10SecureAssessmentConfiguration[],};
export type MicrosoftGraphWindows10TeamGeneralConfigurationCollectionResponse= {value?: MicrosoftGraphWindows10TeamGeneralConfiguration[],};
export type MicrosoftGraphWindows81GeneralConfigurationCollectionResponse= {value?: MicrosoftGraphWindows81GeneralConfiguration[],};
export type MicrosoftGraphWindowsDefenderAdvancedThreatProtectionConfigurationCollectionResponse= {value?: MicrosoftGraphWindowsDefenderAdvancedThreatProtectionConfiguration[],};
export type MicrosoftGraphWindowsPhone81CustomConfigurationCollectionResponse= {value?: MicrosoftGraphWindowsPhone81CustomConfiguration[],};
export type MicrosoftGraphWindowsPhone81GeneralConfigurationCollectionResponse= {value?: MicrosoftGraphWindowsPhone81GeneralConfiguration[],};
export type MicrosoftGraphWindowsUpdateForBusinessConfigurationCollectionResponse= {value?: MicrosoftGraphWindowsUpdateForBusinessConfiguration[],};
export type MicrosoftGraphDeviceEnrollmentLimitConfigurationCollectionResponse= {value?: MicrosoftGraphDeviceEnrollmentLimitConfiguration[],};
export type MicrosoftGraphDeviceEnrollmentPlatformRestrictionsConfigurationCollectionResponse= {value?: MicrosoftGraphDeviceEnrollmentPlatformRestrictionsConfiguration[],};
export type MicrosoftGraphDeviceEnrollmentWindowsHelloForBusinessConfigurationCollectionResponse= {value?: MicrosoftGraphDeviceEnrollmentWindowsHelloForBusinessConfiguration[],};
export type MicrosoftGraphDeviceAndAppManagementRoleDefinitionCollectionResponse= {value?: MicrosoftGraphDeviceAndAppManagementRoleDefinition[],};
export type MicrosoftGraphPrinterCreateOperationCollectionResponse= {value?: MicrosoftGraphPrinterCreateOperation[],};
export type MicrosoftGraphTaskFileAttachmentCollectionResponse= {value?: MicrosoftGraphTaskFileAttachment[],};
export type MicrosoftGraphSecurityEdiscoveryAddToReviewSetOperationCollectionResponse= {value?: MicrosoftGraphSecurityEdiscoveryAddToReviewSetOperation[],};
export type MicrosoftGraphSecurityEdiscoveryIndexOperationCollectionResponse= {value?: MicrosoftGraphSecurityEdiscoveryIndexOperation[],};
export type MicrosoftGraphSecurityEdiscoveryEstimateOperationCollectionResponse= {value?: MicrosoftGraphSecurityEdiscoveryEstimateOperation[],};
export type MicrosoftGraphSecurityEdiscoveryHoldOperationCollectionResponse= {value?: MicrosoftGraphSecurityEdiscoveryHoldOperation[],};
export type MicrosoftGraphSecurityEdiscoveryTagOperationCollectionResponse= {value?: MicrosoftGraphSecurityEdiscoveryTagOperation[],};
export type MicrosoftGraphKeyValueCollectionResponse= {value?: {key?: string,value?: string,"@odata.type"?: string,},};
export type MicrosoftGraphTargetResourceCollectionResponse= {value?: {displayName?: string,groupType?: MicrosoftGraphGroupType,id?: string,modifiedProperties?: MicrosoftGraphModifiedProperty[],type?: string,userPrincipalName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphModifiedPropertyCollectionResponse= {value?: {displayName?: string,newValue?: string,oldValue?: string,"@odata.type"?: string,},};
export type MicrosoftGraphProvisioningStepCollectionResponse= {value?: {description?: string,details?: MicrosoftGraphDetailsInfo,name?: string,provisioningStepType?: MicrosoftGraphProvisioningStepType,status?: MicrosoftGraphProvisioningResult,"@odata.type"?: string,},};
export type MicrosoftGraphAppliedConditionalAccessPolicyCollectionResponse= {value?: {displayName?: string,enforcedGrantControls?: string[],enforcedSessionControls?: string[],id?: string,result?: MicrosoftGraphAppliedConditionalAccessPolicyResult,"@odata.type"?: string,},};
export type MicrosoftGraphAssignedLicenseCollectionResponse= {value?: {disabledPlans?: string[],skuId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAssignedPlanCollectionResponse= {value?: {assignedDateTime?: string,capabilityStatus?: string,service?: string,servicePlanId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphObjectIdentityCollectionResponse= {value?: {issuer?: string,issuerAssignedId?: string,signInType?: string,"@odata.type"?: string,},};
export type MicrosoftGraphLicenseAssignmentStateCollectionResponse= {value?: {assignedByGroup?: string,disabledPlans?: string[],error?: string,lastUpdatedDateTime?: string,skuId?: string,state?: string,"@odata.type"?: string,},};
export type MicrosoftGraphOnPremisesProvisioningErrorCollectionResponse= {value?: {category?: string,occurredDateTime?: string,propertyCausingError?: string,value?: string,"@odata.type"?: string,},};
export type MicrosoftGraphProvisionedPlanCollectionResponse= {value?: {capabilityStatus?: string,provisioningStatus?: string,service?: string,"@odata.type"?: string,},};
export type MicrosoftGraphServicePlanInfoCollectionResponse= {value?: {appliesTo?: string,provisioningStatus?: string,servicePlanId?: string,servicePlanName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAttendeeCollectionResponse= {value?: MicrosoftGraphAttendee[],};
export type MicrosoftGraphLocationCollectionResponse= {value?: {address?: MicrosoftGraphPhysicalAddress,coordinates?: MicrosoftGraphOutlookGeoCoordinates,displayName?: string,locationEmailAddress?: string,locationType?: MicrosoftGraphLocationType,locationUri?: string,uniqueId?: string,uniqueIdType?: MicrosoftGraphLocationUniqueIdType,"@odata.type"?: string,},};
export type MicrosoftGraphEmailAddressCollectionResponse= {value?: {address?: string,name?: string,"@odata.type"?: string,},};
export type MicrosoftGraphRecipientCollectionResponse= {value?: {emailAddress?: MicrosoftGraphEmailAddress,"@odata.type"?: string,},};
export type MicrosoftGraphInternetMessageHeaderCollectionResponse= {value?: {name?: string,value?: string,"@odata.type"?: string,},};
export type MicrosoftGraphPhoneCollectionResponse= {value?: {language?: string,number?: string,region?: string,type?: MicrosoftGraphPhoneType,"@odata.type"?: string,},};
export type MicrosoftGraphScoredEmailAddressCollectionResponse= {value?: {address?: string,itemId?: string,relevanceScore?: unknown,selectionLikelihood?: MicrosoftGraphSelectionLikelihoodInfo,"@odata.type"?: string,},};
export type MicrosoftGraphWebsiteCollectionResponse= {value?: {address?: string,displayName?: string,type?: MicrosoftGraphWebsiteType,"@odata.type"?: string,},};
export type MicrosoftGraphDeviceActionResultCollectionResponse= {value?: {actionName?: string,actionState?: string,lastUpdatedDateTime?: string,startDateTime?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAddInCollectionResponse= {value?: {id?: string,properties?: {key?: string,value?: string,"@odata.type"?: string,},type?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAppRoleCollectionResponse= {value?: {allowedMemberTypes?: string[],description?: string,displayName?: string,id?: string,isEnabled?: boolean,origin?: string,value?: string,"@odata.type"?: string,},};
export type MicrosoftGraphKeyCredentialCollectionResponse= {value?: {customKeyIdentifier?: string,displayName?: string,endDateTime?: string,key?: string,keyId?: string,startDateTime?: string,type?: string,usage?: string,"@odata.type"?: string,},};
export type MicrosoftGraphPasswordCredentialCollectionResponse= {value?: {customKeyIdentifier?: string,displayName?: string,endDateTime?: string,hint?: string,keyId?: string,secretText?: string,startDateTime?: string,"@odata.type"?: string,},};
export type MicrosoftGraphRequiredResourceAccessCollectionResponse= {value?: {resourceAccess?: {id?: string,type?: string,"@odata.type"?: string,},resourceAppId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphPermissionScopeCollectionResponse= {value?: {adminConsentDescription?: string,adminConsentDisplayName?: string,id?: string,isEnabled?: boolean,origin?: string,type?: string,userConsentDescription?: string,userConsentDisplayName?: string,value?: string,"@odata.type"?: string,},};
export type MicrosoftGraphResourceSpecificPermissionCollectionResponse= {value?: {description?: string,displayName?: string,id?: string,isEnabled?: boolean,value?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAccessReviewReviewerScopeCollectionResponse= {value?: {query?: string,queryRoot?: string,queryType?: string,"@odata.type"?: string,},};
export type MicrosoftGraphX509CertificateUserBindingCollectionResponse= {value?: {priority?: number,userProperty?: string,x509CertificateField?: string,"@odata.type"?: string,},};
export type MicrosoftGraphBookingCustomerInformationBaseCollectionResponse= {value?: {"@odata.type"?: string,},};
export type MicrosoftGraphBookingReminderCollectionResponse= {value?: {message?: string,offset?: string,recipients?: string,"@odata.type"?: string,},};
export type MicrosoftGraphBookingWorkHoursCollectionResponse= {value?: {day?: string,timeSlots?: MicrosoftGraphBookingWorkTimeSlot[],"@odata.type"?: string,},};
export type MicrosoftGraphBookingQuestionAssignmentCollectionResponse= {value?: {isRequired?: boolean,questionId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphPhysicalAddressCollectionResponse= {value?: {city?: string,countryOrRegion?: string,postalCode?: string,state?: string,street?: string,"@odata.type"?: string,},};
export type MicrosoftGraphSubjectRightsRequestHistoryCollectionResponse= {value?: {changedBy?: MicrosoftGraphIdentitySet,eventDateTime?: string,stage?: MicrosoftGraphSubjectRightsRequestStage,stageStatus?: MicrosoftGraphSubjectRightsRequestStageStatus,type?: string,"@odata.type"?: string,},};
export type MicrosoftGraphSubjectRightsRequestStageDetailCollectionResponse= {value?: {error?: MicrosoftGraphPublicError,stage?: MicrosoftGraphSubjectRightsRequestStage,status?: MicrosoftGraphSubjectRightsRequestStageStatus,"@odata.type"?: string,},};
export type MicrosoftGraphAssignedLabelCollectionResponse= {value?: {displayName?: string,labelId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphSettingValueCollectionResponse= {value?: {name?: string,value?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAlertDetectionCollectionResponse= {value?: {detectionType?: string,method?: string,name?: string,"@odata.type"?: string,},};
export type MicrosoftGraphCloudAppSecurityStateCollectionResponse= {value?: {destinationServiceIp?: string,destinationServiceName?: string,riskScore?: string,"@odata.type"?: string,},};
export type MicrosoftGraphFileSecurityStateCollectionResponse= {value?: {fileHash?: MicrosoftGraphFileHash,name?: string,path?: string,riskScore?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAlertHistoryStateCollectionResponse= {value?: {appId?: string,assignedTo?: string,comments?: string[],feedback?: MicrosoftGraphAlertFeedback,status?: MicrosoftGraphAlertStatus,updatedDateTime?: string,user?: string,"@odata.type"?: string,},};
export type MicrosoftGraphHostSecurityStateCollectionResponse= {value?: {fqdn?: string,isAzureAdJoined?: boolean,isAzureAdRegistered?: boolean,isHybridAzureDomainJoined?: boolean,netBiosName?: string,os?: string,privateIpAddress?: string,publicIpAddress?: string,riskScore?: string,"@odata.type"?: string,},};
export type MicrosoftGraphInvestigationSecurityStateCollectionResponse= {value?: {name?: string,status?: string,"@odata.type"?: string,},};
export type MicrosoftGraphMalwareStateCollectionResponse= {value?: {category?: string,family?: string,name?: string,severity?: string,wasRunning?: boolean,"@odata.type"?: string,},};
export type MicrosoftGraphMessageSecurityStateCollectionResponse= {value?: {connectingIP?: string,deliveryAction?: string,deliveryLocation?: string,directionality?: string,internetMessageId?: string,messageFingerprint?: string,messageReceivedDateTime?: string,messageSubject?: string,networkMessageId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphNetworkConnectionCollectionResponse= {value?: {applicationName?: string,destinationAddress?: string,destinationDomain?: string,destinationLocation?: string,destinationPort?: string,destinationUrl?: string,direction?: MicrosoftGraphConnectionDirection,domainRegisteredDateTime?: string,localDnsName?: string,natDestinationAddress?: string,natDestinationPort?: string,natSourceAddress?: string,natSourcePort?: string,protocol?: MicrosoftGraphSecurityNetworkProtocol,riskScore?: string,sourceAddress?: string,sourceLocation?: string,sourcePort?: string,status?: MicrosoftGraphConnectionStatus,urlParameters?: string,"@odata.type"?: string,},};
export type MicrosoftGraphProcessCollectionResponse= {value?: {accountName?: string,commandLine?: string,createdDateTime?: string,fileHash?: MicrosoftGraphFileHash,integrityLevel?: MicrosoftGraphProcessIntegrityLevel,isElevated?: boolean,name?: string,parentProcessCreatedDateTime?: string,parentProcessId?: number,parentProcessName?: string,path?: string,processId?: number,"@odata.type"?: string,},};
export type MicrosoftGraphRegistryKeyStateCollectionResponse= {value?: {hive?: MicrosoftGraphRegistryHive,key?: string,oldKey?: string,oldValueData?: string,oldValueName?: string,operation?: MicrosoftGraphRegistryOperation,processId?: number,valueData?: string,valueName?: string,valueType?: MicrosoftGraphRegistryValueType,"@odata.type"?: string,},};
export type MicrosoftGraphSecurityResourceCollectionResponse= {value?: {resource?: string,resourceType?: MicrosoftGraphSecurityResourceType,"@odata.type"?: string,},};
export type MicrosoftGraphAlertTriggerCollectionResponse= {value?: {name?: string,type?: string,value?: string,"@odata.type"?: string,},};
export type MicrosoftGraphUriClickSecurityStateCollectionResponse= {value?: {clickAction?: string,clickDateTime?: string,id?: string,sourceId?: string,uriDomain?: string,verdict?: string,"@odata.type"?: string,},};
export type MicrosoftGraphUserSecurityStateCollectionResponse= {value?: {aadUserId?: string,accountName?: string,domainName?: string,emailRole?: MicrosoftGraphEmailRole,isVpn?: boolean,logonDateTime?: string,logonId?: string,logonIp?: string,logonLocation?: string,logonType?: MicrosoftGraphLogonType,onPremisesSecurityIdentifier?: string,riskScore?: string,userAccountType?: MicrosoftGraphUserAccountSecurityType,userPrincipalName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphVulnerabilityStateCollectionResponse= {value?: {cve?: string,severity?: string,wasRunning?: boolean,"@odata.type"?: string,},};
export type MicrosoftGraphComplianceInformationCollectionResponse= {value?: {certificationControls?: MicrosoftGraphCertificationControl[],certificationName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphSecureScoreControlStateUpdateCollectionResponse= {value?: {assignedTo?: string,comment?: string,state?: string,updatedBy?: string,updatedDateTime?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAverageComparativeScoreCollectionResponse= {value?: {averageScore?: unknown,basis?: string,"@odata.type"?: string,},};
export type MicrosoftGraphControlScoreCollectionResponse= {value?: {controlCategory?: string,controlName?: string,description?: string,score?: unknown,"@odata.type"?: string,},};
export type MicrosoftGraphIdentitySetCollectionResponse= {value?: {application?: MicrosoftGraphIdentity,device?: MicrosoftGraphIdentity,user?: MicrosoftGraphIdentity,"@odata.type"?: string,},};
export type MicrosoftGraphSharePointIdentitySetCollectionResponse= {value?: MicrosoftGraphSharePointIdentitySet[],};
export type MicrosoftGraphUserAttributeValuesItemCollectionResponse= {value?: {isDefault?: boolean,name?: string,value?: string,"@odata.type"?: string,},};
export type MicrosoftGraphCertificateAuthorityCollectionResponse= {value?: {certificate?: string,certificateRevocationListUrl?: string,deltaCertificateRevocationListUrl?: string,isRootAuthority?: boolean,issuer?: string,issuerSki?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAlternativeSecurityIdCollectionResponse= {value?: {identityProvider?: string,key?: string,type?: number,"@odata.type"?: string,},};
export type MicrosoftGraphSettingTemplateValueCollectionResponse= {value?: {defaultValue?: string,description?: string,name?: string,type?: string,"@odata.type"?: string,},};
export type MicrosoftGraphVerifiedDomainCollectionResponse= {value?: {capabilities?: string,isDefault?: boolean,isInitial?: boolean,name?: string,type?: string,"@odata.type"?: string,},};
export type MicrosoftGraphPhysicalOfficeAddressCollectionResponse= {value?: {city?: string,countryOrRegion?: string,officeLocation?: string,postalCode?: string,state?: string,street?: string,"@odata.type"?: string,},};
export type MicrosoftGraphUnifiedRolePermissionCollectionResponse= {value?: {allowedResourceActions?: string[],condition?: string,excludedResourceActions?: string[],"@odata.type"?: string,},};
export type MicrosoftGraphRubricLevelCollectionResponse= {value?: {description?: MicrosoftGraphEducationItemBody,displayName?: string,grading?: MicrosoftGraphEducationAssignmentGradeType,levelId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphRubricQualityCollectionResponse= {value?: {criteria?: MicrosoftGraphRubricCriterion[],description?: MicrosoftGraphEducationItemBody,displayName?: string,qualityId?: string,weight?: unknown,"@odata.type"?: string,},};
export type MicrosoftGraphRelatedContactCollectionResponse= {value?: {accessConsent?: boolean,displayName?: string,emailAddress?: string,mobilePhone?: string,relationship?: string,"@odata.type"?: string,},};
export type MicrosoftGraphRubricQualityFeedbackModelCollectionResponse= {value?: {feedback?: MicrosoftGraphEducationItemBody,qualityId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphRubricQualitySelectedColumnModelCollectionResponse= {value?: {columnId?: string,qualityId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphWorkbookSortFieldCollectionResponse= {value?: {ascending?: boolean,color?: string,dataOption?: string,icon?: MicrosoftGraphWorkbookIcon,key?: number,sortOn?: string,"@odata.type"?: string,},};
export type MicrosoftGraphCalendarSharingMessageActionCollectionResponse= {value?: {action?: MicrosoftGraphCalendarSharingAction,actionType?: MicrosoftGraphCalendarSharingActionType,importance?: MicrosoftGraphCalendarSharingActionImportance,"@odata.type"?: string,},};
export type MicrosoftGraphDocumentSetVersionItemCollectionResponse= {value?: {itemId?: string,title?: string,versionId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphExtensionSchemaPropertyCollectionResponse= {value?: {name?: string,type?: string,"@odata.type"?: string,},};
export type MicrosoftGraphCallRouteCollectionResponse= {value?: {final?: {application?: MicrosoftGraphIdentity,device?: MicrosoftGraphIdentity,user?: MicrosoftGraphIdentity,"@odata.type"?: string,},original?: {application?: MicrosoftGraphIdentity,device?: MicrosoftGraphIdentity,user?: MicrosoftGraphIdentity,"@odata.type"?: string,},routingType?: string,"@odata.type"?: string,},};
export type MicrosoftGraphInvitationParticipantInfoCollectionResponse= {value?: {hidden?: boolean,identity?: {application?: MicrosoftGraphIdentity,device?: MicrosoftGraphIdentity,user?: MicrosoftGraphIdentity,"@odata.type"?: string,},participantId?: string,removeFromDefaultAudioRoutingGroup?: boolean,replacesCallId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAccessReviewScopeCollectionResponse= {value?: {"@odata.type"?: string,},};
export type MicrosoftGraphAccessReviewNotificationRecipientItemCollectionResponse= {value?: {notificationRecipientScope?: MicrosoftGraphAccessReviewNotificationRecipientScope,notificationTemplateType?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAccessReviewStageSettingsCollectionResponse= {value?: {decisionsThatWillMoveToNextStage?: string[],dependsOn?: string[],durationInDays?: number,fallbackReviewers?: MicrosoftGraphAccessReviewReviewerScope[],recommendationsEnabled?: boolean,reviewers?: MicrosoftGraphAccessReviewReviewerScope[],stageId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAppConsentRequestScopeCollectionResponse= {value?: {displayName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphSubjectSetCollectionResponse= {value?: {"@odata.type"?: string,},};
export type MicrosoftGraphIdentitySourceCollectionResponse= {value?: {"@odata.type"?: string,},};
export type MicrosoftGraphIpRangeCollectionResponse= {value?: {"@odata.type"?: string,},};
export type MicrosoftGraphKeyValuePairCollectionResponse= {value?: {name?: string,value?: string,"@odata.type"?: string,},};
export type MicrosoftGraphWindowsInformationProtectionResourceCollectionCollectionResponse= {value?: {displayName?: string,resources?: string[],"@odata.type"?: string,},};
export type MicrosoftGraphWindowsInformationProtectionIPRangeCollectionCollectionResponse= {value?: {displayName?: string,ranges?: {"@odata.type"?: string,},"@odata.type"?: string,},};
export type MicrosoftGraphWindowsInformationProtectionProxiedDomainCollectionCollectionResponse= {value?: {displayName?: string,proxiedDomains?: {ipAddressOrFQDN?: string,proxy?: string,"@odata.type"?: string,},"@odata.type"?: string,},};
export type MicrosoftGraphWindowsInformationProtectionAppCollectionResponse= {value?: {denied?: boolean,description?: string,displayName?: string,productName?: string,publisherName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAppConfigurationSettingItemCollectionResponse= {value?: {appConfigKey?: string,appConfigKeyType?: string,appConfigKeyValue?: string,"@odata.type"?: string,},};
export type MicrosoftGraphWin32LobAppReturnCodeCollectionResponse= {value?: {returnCode?: number,type?: string,"@odata.type"?: string,},};
export type MicrosoftGraphWin32LobAppRuleCollectionResponse= {value?: {ruleType?: string,"@odata.type"?: string,},};
export type MicrosoftGraphComplianceManagementPartnerAssignmentCollectionResponse= {value?: {target?: MicrosoftGraphDeviceAndAppManagementAssignmentTarget,"@odata.type"?: string,},};
export type MicrosoftGraphRolePermissionCollectionResponse= {value?: {resourceActions?: MicrosoftGraphResourceAction[],"@odata.type"?: string,},};
export type MicrosoftGraphOmaSettingCollectionResponse= {value?: {description?: string,displayName?: string,omaUri?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAppListItemCollectionResponse= {value?: {appId?: string,appStoreUrl?: string,name?: string,publisher?: string,"@odata.type"?: string,},};
export type MicrosoftGraphDeviceCompliancePolicySettingStateCollectionResponse= {value?: {currentValue?: string,errorCode?: number,errorDescription?: string,instanceDisplayName?: string,setting?: string,settingName?: string,sources?: MicrosoftGraphSettingSource[],state?: string,userEmail?: string,userId?: string,userName?: string,userPrincipalName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphDeviceConfigurationSettingStateCollectionResponse= {value?: {currentValue?: string,errorCode?: number,errorDescription?: string,instanceDisplayName?: string,setting?: string,settingName?: string,sources?: MicrosoftGraphSettingSource[],state?: string,userEmail?: string,userId?: string,userName?: string,userPrincipalName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphIosHomeScreenItemCollectionResponse= {value?: {displayName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphIosHomeScreenPageCollectionResponse= {value?: {displayName?: string,icons?: {displayName?: string,"@odata.type"?: string,},"@odata.type"?: string,},};
export type MicrosoftGraphIosNotificationSettingsCollectionResponse= {value?: {alertType?: string,appName?: string,badgesEnabled?: boolean,bundleID?: string,enabled?: boolean,publisher?: string,showInNotificationCenter?: boolean,showOnLockScreen?: boolean,soundsEnabled?: boolean,"@odata.type"?: string,},};
export type MicrosoftGraphIosNetworkUsageRuleCollectionResponse= {value?: {cellularDataBlocked?: boolean,cellularDataBlockWhenRoaming?: boolean,managedApps?: MicrosoftGraphAppListItem[],"@odata.type"?: string,},};
export type MicrosoftGraphManagedAppPolicyDeploymentSummaryPerAppCollectionResponse= {value?: {configurationAppliedUserCount?: number,mobileAppIdentifier?: MicrosoftGraphMobileAppIdentifier,"@odata.type"?: string,},};
export type MicrosoftGraphServiceHealthIssuePostCollectionResponse= {value?: {createdDateTime?: string,description?: MicrosoftGraphItemBody,postType?: MicrosoftGraphPostType,"@odata.type"?: string,},};
export type MicrosoftGraphSharingDetailCollectionResponse= {value?: {sharedBy?: MicrosoftGraphInsightIdentity,sharedDateTime?: string,sharingReference?: MicrosoftGraphResourceReference,sharingSubject?: string,sharingType?: string,"@odata.type"?: string,},};
export type MicrosoftGraphShiftAvailabilityCollectionResponse= {value?: {recurrence?: MicrosoftGraphPatternedRecurrence,timeSlots?: MicrosoftGraphTimeRange[],timeZone?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAttendanceIntervalCollectionResponse= {value?: {durationInSeconds?: number,joinDateTime?: string,leaveDateTime?: string,"@odata.type"?: string,},};
export type MicrosoftGraphMediaStreamCollectionResponse= {value?: {direction?: string,label?: string,mediaType?: string,serverMuted?: boolean,sourceId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphChatMessageAttachmentCollectionResponse= {value?: {content?: string,contentType?: string,contentUrl?: string,id?: string,name?: string,thumbnailUrl?: string,"@odata.type"?: string,},};
export type MicrosoftGraphChatMessageMentionCollectionResponse= {value?: {id?: number,mentioned?: MicrosoftGraphChatMessageMentionedIdentitySet,mentionText?: string,"@odata.type"?: string,},};
export type MicrosoftGraphChatMessageReactionCollectionResponse= {value?: {createdDateTime?: string,reactionType?: string,user?: MicrosoftGraphChatMessageReactionIdentitySet,"@odata.type"?: string,},};
export type MicrosoftGraphPreAuthorizedApplicationCollectionResponse= {value?: {appId?: string,delegatedPermissionIds?: string[],"@odata.type"?: string,},};
export type MicrosoftGraphOptionalClaimCollectionResponse= {value?: {additionalProperties?: string[],essential?: boolean,name?: string,source?: string,"@odata.type"?: string,},};
export type MicrosoftGraphResourceAccessCollectionResponse= {value?: {id?: string,type?: string,"@odata.type"?: string,},};
export type MicrosoftGraphRedirectUriSettingsCollectionResponse= {value?: {index?: number,uri?: string,"@odata.type"?: string,},};
export type MicrosoftGraphExcludeTargetCollectionResponse= {value?: {id?: string,targetType?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAuthenticationMethodsRegistrationCampaignIncludeTargetCollectionResponse= {value?: {id?: string,targetedAuthenticationMethod?: string,targetType?: string,"@odata.type"?: string,},};
export type MicrosoftGraphX509CertificateRuleCollectionResponse= {value?: {identifier?: string,x509CertificateAuthenticationMode?: MicrosoftGraphX509CertificateAuthenticationMode,x509CertificateRuleType?: MicrosoftGraphX509CertificateRuleType,"@odata.type"?: string,},};
export type MicrosoftGraphBookingQuestionAnswerCollectionResponse= {value?: {answer?: string,answerInputType?: MicrosoftGraphAnswerInputType,answerOptions?: string[],isRequired?: boolean,question?: string,questionId?: string,selectedOptions?: string[],"@odata.type"?: string,},};
export type MicrosoftGraphBookingWorkTimeSlotCollectionResponse= {value?: {endTime?: string,startTime?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAvailabilityItemCollectionResponse= {value?: {endDateTime?: {dateTime?: string,timeZone?: string,"@odata.type"?: string,},serviceId?: string,startDateTime?: {dateTime?: string,timeZone?: string,"@odata.type"?: string,},status?: MicrosoftGraphBookingsAvailabilityStatus,"@odata.type"?: string,},};
export type MicrosoftGraphPublicErrorDetailCollectionResponse= {value?: {code?: string,message?: string,target?: string,"@odata.type"?: string,},};
export type MicrosoftGraphPkcs12CertificateInformationCollectionResponse= {value?: {isActive?: boolean,notAfter?: number,notBefore?: number,thumbprint?: string,"@odata.type"?: string,},};
export type MicrosoftGraphCrossTenantAccessPolicyTargetCollectionResponse= {value?: {target?: string,targetType?: MicrosoftGraphCrossTenantAccessPolicyTargetType,"@odata.type"?: string,},};
export type MicrosoftGraphResourcePermissionCollectionResponse= {value?: {type?: string,value?: string,"@odata.type"?: string,},};
export type MicrosoftGraphRubricCriterionCollectionResponse= {value?: {description?: MicrosoftGraphEducationItemBody,"@odata.type"?: string,},};
export type MicrosoftGraphLocationConstraintItemCollectionResponse= {value?: MicrosoftGraphLocationConstraintItem[],};
export type MicrosoftGraphAttendeeAvailabilityCollectionResponse= {value?: {attendee?: MicrosoftGraphAttendeeBase,availability?: MicrosoftGraphFreeBusyStatus,"@odata.type"?: string,},};
export type MicrosoftGraphMeetingTimeSuggestionCollectionResponse= {value?: {attendeeAvailability?: MicrosoftGraphAttendeeAvailability[],confidence?: unknown,locations?: MicrosoftGraphLocation[],meetingTimeSlot?: MicrosoftGraphTimeSlot,order?: number,organizerAvailability?: MicrosoftGraphFreeBusyStatus,suggestionReason?: string,"@odata.type"?: string,},};
export type MicrosoftGraphTimeSlotCollectionResponse= {value?: {end?: {dateTime?: string,timeZone?: string,"@odata.type"?: string,},start?: {dateTime?: string,timeZone?: string,"@odata.type"?: string,},"@odata.type"?: string,},};
export type MicrosoftGraphScheduleItemCollectionResponse= {value?: {end?: MicrosoftGraphDateTimeTimeZone,isPrivate?: boolean,location?: string,start?: MicrosoftGraphDateTimeTimeZone,status?: MicrosoftGraphFreeBusyStatus,subject?: string,"@odata.type"?: string,},};
export type MicrosoftGraphDisplayNameLocalizationCollectionResponse= {value?: {displayName?: string,languageTag?: string,"@odata.type"?: string,},};
export type MicrosoftGraphContentTypeInfoCollectionResponse= {value?: {id?: string,name?: string,"@odata.type"?: string,},};
export type MicrosoftGraphDocumentSetContentCollectionResponse= {value?: {contentType?: MicrosoftGraphContentTypeInfo,fileName?: string,folderName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAccessReviewApplyActionCollectionResponse= {value?: {"@odata.type"?: string,},};
export type MicrosoftGraphAccessPackageApprovalStageCollectionResponse= {value?: {durationBeforeAutomaticDenial?: string,durationBeforeEscalation?: string,escalationApprovers?: MicrosoftGraphSubjectSet[],fallbackEscalationApprovers?: MicrosoftGraphSubjectSet[],fallbackPrimaryApprovers?: MicrosoftGraphSubjectSet[],isApproverJustificationRequired?: boolean,isEscalationEnabled?: boolean,primaryApprovers?: MicrosoftGraphSubjectSet[],"@odata.type"?: string,},};
export type MicrosoftGraphSettingSourceCollectionResponse= {value?: {displayName?: string,id?: string,sourceType?: string,"@odata.type"?: string,},};
export type MicrosoftGraphIosHomeScreenFolderPageCollectionResponse= {value?: {apps?: MicrosoftGraphIosHomeScreenApp[],displayName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphIosHomeScreenAppCollectionResponse= {value?: MicrosoftGraphIosHomeScreenApp[],};
export type MicrosoftGraphProxiedDomainCollectionResponse= {value?: {ipAddressOrFQDN?: string,proxy?: string,"@odata.type"?: string,},};
export type MicrosoftGraphResourceActionCollectionResponse= {value?: {allowedResourceActions?: string[],notAllowedResourceActions?: string[],"@odata.type"?: string,},};
export type MicrosoftGraphBucketAggregationRangeCollectionResponse= {value?: {from?: string,to?: string,"@odata.type"?: string,},};
export type MicrosoftGraphAlteredQueryTokenCollectionResponse= {value?: {length?: number,offset?: number,suggestion?: string,"@odata.type"?: string,},};
export type MicrosoftGraphSearchBucketCollectionResponse= {value?: {aggregationFilterToken?: string,count?: number,key?: string,"@odata.type"?: string,},};
export type MicrosoftGraphSearchAggregationCollectionResponse= {value?: {buckets?: MicrosoftGraphSearchBucket[],field?: string,"@odata.type"?: string,},};
export type MicrosoftGraphSearchHitCollectionResponse= {value?: {contentSource?: string,hitId?: string,rank?: number,resultTemplateId?: string,summary?: string,resource?: MicrosoftGraphEntity,"@odata.type"?: string,},};
export type MicrosoftGraphAggregationOptionCollectionResponse= {value?: {bucketDefinition?: {isDescending?: boolean,minimumCount?: number,prefixFilter?: string,ranges?: MicrosoftGraphBucketAggregationRange[],sortBy?: string,"@odata.type"?: string,},field?: string,size?: number,"@odata.type"?: string,},};
export type MicrosoftGraphSortPropertyCollectionResponse= {value?: {isDescending?: boolean,name?: string,"@odata.type"?: string,},};
export type MicrosoftGraphSearchHitsContainerCollectionResponse= {value?: {aggregations?: MicrosoftGraphSearchAggregation[],hits?: MicrosoftGraphSearchHit[],moreResultsAvailable?: boolean,total?: number,"@odata.type"?: string,},};
export type MicrosoftGraphUnifiedApprovalStageCollectionResponse= {value?: {approvalStageTimeOutInDays?: number,escalationApprovers?: MicrosoftGraphSubjectSet[],escalationTimeInMinutes?: number,isApproverJustificationRequired?: boolean,isEscalationEnabled?: boolean,primaryApprovers?: MicrosoftGraphSubjectSet[],"@odata.type"?: string,},};
export type MicrosoftGraphIntegerRangeCollectionResponse= {value?: {end?: number,start?: number,"@odata.type"?: string,},};
export type MicrosoftGraphUserTrainingStatusInfoCollectionResponse= {value?: {assignedDateTime?: string,completionDateTime?: string,displayName?: string,trainingStatus?: MicrosoftGraphTrainingStatus,"@odata.type"?: string,},};
export type MicrosoftGraphSimulationEventCollectionResponse= {value?: {count?: number,eventName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphUserSimulationDetailsCollectionResponse= {value?: {assignedTrainingsCount?: number,completedTrainingsCount?: number,compromisedDateTime?: string,inProgressTrainingsCount?: number,isCompromised?: boolean,reportedPhishDateTime?: string,simulationEvents?: MicrosoftGraphUserSimulationEventInfo[],simulationUser?: MicrosoftGraphAttackSimulationUser,trainingEvents?: MicrosoftGraphUserTrainingEventInfo[],"@odata.type"?: string,},};
export type MicrosoftGraphRecommendedActionCollectionResponse= {value?: {actionWebUrl?: string,potentialScoreImpact?: unknown,title?: string,"@odata.type"?: string,},};
export type MicrosoftGraphUserSimulationEventInfoCollectionResponse= {value?: {browser?: string,eventDateTime?: string,eventName?: string,ipAddress?: string,osPlatformDeviceDetails?: string,"@odata.type"?: string,},};
export type MicrosoftGraphUserTrainingEventInfoCollectionResponse= {value?: {displayName?: string,latestTrainingStatus?: MicrosoftGraphTrainingStatus,trainingAssignedProperties?: MicrosoftGraphUserTrainingContentEventInfo,trainingCompletedProperties?: MicrosoftGraphUserTrainingContentEventInfo,trainingUpdatedProperties?: MicrosoftGraphUserTrainingContentEventInfo,"@odata.type"?: string,},};
export type MicrosoftGraphAssignedTrainingInfoCollectionResponse= {value?: {assignedUserCount?: number,completedUserCount?: number,displayName?: string,"@odata.type"?: string,},};
export type MicrosoftGraphCertificationControlCollectionResponse= {value?: {name?: string,url?: string,"@odata.type"?: string,},};
export type MicrosoftGraphCommsNotificationCollectionResponse= {value?: {changeType?: string,resourceUrl?: string,"@odata.type"?: string,},};
export type MicrosoftGraphMeetingParticipantInfoCollectionResponse= {value?: {identity?: MicrosoftGraphIdentitySet,role?: MicrosoftGraphOnlineMeetingRole,upn?: string,"@odata.type"?: string,},};
export type MicrosoftGraphMediaInfoCollectionResponse= {value?: {resourceId?: string,uri?: string,"@odata.type"?: string,},};
export type MicrosoftGraphTeleconferenceDeviceMediaQualityCollectionResponse= {value?: {averageInboundJitter?: string,averageInboundPacketLossRateInPercentage?: unknown,averageInboundRoundTripDelay?: string,averageOutboundJitter?: string,averageOutboundPacketLossRateInPercentage?: unknown,averageOutboundRoundTripDelay?: string,channelIndex?: number,inboundPackets?: number,localIPAddress?: string,localPort?: number,maximumInboundJitter?: string,maximumInboundPacketLossRateInPercentage?: unknown,maximumInboundRoundTripDelay?: string,maximumOutboundJitter?: string,maximumOutboundPacketLossRateInPercentage?: unknown,maximumOutboundRoundTripDelay?: string,mediaDuration?: string,networkLinkSpeedInBytes?: number,outboundPackets?: number,remoteIPAddress?: string,remotePort?: number,"@odata.type"?: string,},};
export type MicrosoftGraphChangeNotificationCollectionResponse= {value?: {changeType?: string,clientState?: string,encryptedContent?: MicrosoftGraphChangeNotificationEncryptedContent,id?: string,lifecycleEvent?: MicrosoftGraphLifecycleEventType,resource?: string,resourceData?: MicrosoftGraphResourceData,subscriptionExpirationDateTime?: string,subscriptionId?: string,tenantId?: string,"@odata.type"?: string,},};
export type MicrosoftGraphCallParticipantInfoCollectionResponse= {value?: {participant?: MicrosoftGraphIdentitySet,"@odata.type"?: string,},};
export type MicrosoftGraphTeamworkUserIdentityCollectionResponse= {value?: MicrosoftGraphTeamworkUserIdentity[],};
export type MicrosoftGraphShiftActivityCollectionResponse= {value?: {code?: string,displayName?: string,endDateTime?: string,isPaid?: boolean,startDateTime?: string,theme?: string,"@odata.type"?: string,},};
export type MicrosoftGraphTimeRangeCollectionResponse= {value?: {endTime?: string,startTime?: string,"@odata.type"?: string,},};
export type MicrosoftGraphTermStoreLocalizedNameCollectionResponse= {value?: {languageTag?: string,name?: string,"@odata.type"?: string,},};
export type MicrosoftGraphTermStoreLocalizedDescriptionCollectionResponse= {value?: {description?: string,languageTag?: string,"@odata.type"?: string,},};
export type MicrosoftGraphTermStoreLocalizedLabelCollectionResponse= {value?: {isDefault?: boolean,languageTag?: string,name?: string,"@odata.type"?: string,},};
export type MicrosoftGraphCallRecordsMediaCollectionResponse= {value?: {calleeDevice?: MicrosoftGraphCallRecordsDeviceInfo,calleeNetwork?: MicrosoftGraphCallRecordsNetworkInfo,callerDevice?: MicrosoftGraphCallRecordsDeviceInfo,callerNetwork?: MicrosoftGraphCallRecordsNetworkInfo,label?: string,streams?: MicrosoftGraphCallRecordsMediaStream[],"@odata.type"?: string,},};
export type MicrosoftGraphCallRecordsMediaStreamCollectionResponse= {value?: {audioCodec?: MicrosoftGraphCallRecordsAudioCodec,averageAudioDegradation?: unknown,averageAudioNetworkJitter?: string,averageBandwidthEstimate?: number,averageJitter?: string,averagePacketLossRate?: unknown,averageRatioOfConcealedSamples?: unknown,averageReceivedFrameRate?: unknown,averageRoundTripTime?: string,averageVideoFrameLossPercentage?: unknown,averageVideoFrameRate?: unknown,averageVideoPacketLossRate?: unknown,endDateTime?: string,lowFrameRateRatio?: unknown,lowVideoProcessingCapabilityRatio?: unknown,maxAudioNetworkJitter?: string,maxJitter?: string,maxPacketLossRate?: unknown,maxRatioOfConcealedSamples?: unknown,maxRoundTripTime?: string,packetUtilization?: number,postForwardErrorCorrectionPacketLossRate?: unknown,startDateTime?: string,streamDirection?: string,streamId?: string,videoCodec?: MicrosoftGraphCallRecordsVideoCodec,wasMediaBypassed?: boolean,"@odata.type"?: string,},};
export type MicrosoftGraphCallRecordsTraceRouteHopCollectionResponse= {value?: {hopCount?: number,ipAddress?: string,roundTripTime?: string,"@odata.type"?: string,},};
export type MicrosoftGraphExternalConnectorsAclCollectionResponse= {value?: {accessType?: string,type?: string,value?: string,"@odata.type"?: string,},};
export type MicrosoftGraphExternalConnectorsPropertyCollectionResponse= {value?: {aliases?: string[],isQueryable?: boolean,isRefinable?: boolean,isRetrievable?: boolean,isSearchable?: boolean,labels?: MicrosoftGraphExternalConnectorsLabel[],name?: string,type?: string,"@odata.type"?: string,},};
export type StringCollectionResponse= {value?: string[],};
export type ReferenceNumeric = "INF" | "INF"
