import React from 'react';
import RecoveryPasswordModal from './RecoveryPasswordModal';

const story = {
  title: 'Example/RecoveryPasswordModal',
  component: RecoveryPasswordModal,
};

export const Main = () => {
	const [open, setOpen] = React.useState(false);
	const [emailSent, setEmailSent] = React.useState(false);
	return (
		<div>
			<button onClick={() => setOpen(true)}>Open Modal</button>
			<RecoveryPasswordModal
				open={open}
				onClose={() => setOpen(false)}
				title="Claim for myst"
				recoveryLabel="Send recovery link"
				language="en"
				onSubmit={() => setEmailSent(true)}
				emailSent={emailSent}
				sentMessage="A confirmation has been sent to your email."
				returnLoginLabel="Return to Login"
				logo={
					<svg width="216" height="50" viewBox="0 0 216 50" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M59.6846 15.6811L49.7964 0.455078H33V27.4856H44.92V10.6628L56.1627 27.4856H62.3936L73.7041 10.6628V27.4856H85.8273V0.455078H69.6405L59.6846 15.6811Z" fill="white"/>
						<path d="M102.352 9.46526L99.7106 0.455078H90.5674L97.2724 17.563V27.4856H107.093V17.7341L113.391 0.455078H104.926L102.352 9.46526Z" fill="white"/>
						<path d="M143.192 9.97963L137.096 9.86558C131.678 9.75153 130.527 9.06721 130.527 8.04073V7.98371C130.527 7.01426 131.204 6.27291 136.216 6.27291H136.419C141.837 6.27291 142.447 7.81263 142.582 8.78208H158.972V8.55397C158.972 4.04888 155.112 0 138.451 0H133.71C118.471 0 114.204 3.47861 114.204 8.21181V8.55397C114.204 12.831 117.184 16.6517 130.052 16.9369L136.419 17.1079C142.514 17.279 143.124 18.1344 143.124 19.2749V19.332C143.124 20.4725 142.108 21.499 136.893 21.499H136.69C131.068 21.499 130.391 19.446 130.256 18.1914H113.595V18.5336C113.595 22.0122 115.423 28 134.116 28H138.992C156.602 28 159.988 23.3809 159.988 18.7047V18.1914C160.123 12.6599 155.586 10.2648 143.192 9.97963Z" fill="white"/>
						<path d="M163.239 0.455078V6.61394H168.319V27.4856H176.92V6.61394H182V0.455078H163.239Z" fill="white"/>
						<path opacity="0.5" d="M57.4694 39.776C57.4694 39.3333 57.5601 38.9413 57.7414 38.6C57.9281 38.2587 58.1787 37.9947 58.4934 37.808C58.8134 37.616 59.1654 37.52 59.5494 37.52C59.8961 37.52 60.1974 37.5893 60.4534 37.728C60.7147 37.8613 60.9227 38.0293 61.0774 38.232V37.592H61.9974V42H61.0774V41.344C60.9227 41.552 60.7121 41.7253 60.4454 41.864C60.1787 42.0027 59.8747 42.072 59.5334 42.072C59.1547 42.072 58.8081 41.976 58.4934 41.784C58.1787 41.5867 57.9281 41.3147 57.7414 40.968C57.5601 40.616 57.4694 40.2187 57.4694 39.776ZM61.0774 39.792C61.0774 39.488 61.0134 39.224 60.8854 39C60.7627 38.776 60.6001 38.6053 60.3974 38.488C60.1947 38.3707 59.9761 38.312 59.7414 38.312C59.5067 38.312 59.2881 38.3707 59.0854 38.488C58.8827 38.6 58.7174 38.768 58.5894 38.992C58.4667 39.2107 58.4054 39.472 58.4054 39.776C58.4054 40.08 58.4667 40.3467 58.5894 40.576C58.7174 40.8053 58.8827 40.9813 59.0854 41.104C59.2934 41.2213 59.5121 41.28 59.7414 41.28C59.9761 41.28 60.1947 41.2213 60.3974 41.104C60.6001 40.9867 60.7627 40.816 60.8854 40.592C61.0134 40.3627 61.0774 40.096 61.0774 39.792ZM68.8654 36.44V37.184H67.3854V42H66.4734V37.184H64.9854V36.44H68.8654ZM70.701 38.232C70.8343 38.008 71.0103 37.8347 71.229 37.712C71.453 37.584 71.717 37.52 72.021 37.52V38.464H71.789C71.4317 38.464 71.1597 38.5547 70.973 38.736C70.7917 38.9173 70.701 39.232 70.701 39.68V42H69.789V37.592H70.701V38.232ZM73.3233 37.008C73.158 37.008 73.0193 36.952 72.9073 36.84C72.7953 36.728 72.7393 36.5893 72.7393 36.424C72.7393 36.2587 72.7953 36.12 72.9073 36.008C73.0193 35.896 73.158 35.84 73.3233 35.84C73.4833 35.84 73.6193 35.896 73.7313 36.008C73.8433 36.12 73.8993 36.2587 73.8993 36.424C73.8993 36.5893 73.8433 36.728 73.7313 36.84C73.6193 36.952 73.4833 37.008 73.3233 37.008ZM73.7713 37.592V42H72.8593V37.592H73.7713ZM75.8807 38.248C76.0354 38.0347 76.246 37.8613 76.5127 37.728C76.7847 37.5893 77.086 37.52 77.4167 37.52C77.806 37.52 78.158 37.6133 78.4727 37.8C78.7874 37.9867 79.0354 38.2533 79.2167 38.6C79.398 38.9413 79.4887 39.3333 79.4887 39.776C79.4887 40.2187 79.398 40.616 79.2167 40.968C79.0354 41.3147 78.7847 41.5867 78.4647 41.784C78.15 41.976 77.8007 42.072 77.4167 42.072C77.0754 42.072 76.7714 42.0053 76.5047 41.872C76.2434 41.7387 76.0354 41.568 75.8807 41.36V42H74.9687V36.08H75.8807V38.248ZM78.5607 39.776C78.5607 39.472 78.4967 39.2107 78.3687 38.992C78.246 38.768 78.0807 38.6 77.8727 38.488C77.67 38.3707 77.4514 38.312 77.2167 38.312C76.9874 38.312 76.7687 38.3707 76.5607 38.488C76.358 38.6053 76.1927 38.776 76.0647 39C75.942 39.224 75.8807 39.488 75.8807 39.792C75.8807 40.096 75.942 40.3627 76.0647 40.592C76.1927 40.816 76.358 40.9867 76.5607 41.104C76.7687 41.2213 76.9874 41.28 77.2167 41.28C77.4514 41.28 77.67 41.2213 77.8727 41.104C78.0807 40.9813 78.246 40.8053 78.3687 40.576C78.4967 40.3467 78.5607 40.08 78.5607 39.776ZM84.4306 39.688C84.4306 39.8533 84.4199 40.0027 84.3986 40.136H81.0306C81.0572 40.488 81.1879 40.7707 81.4226 40.984C81.6572 41.1973 81.9452 41.304 82.2866 41.304C82.7772 41.304 83.1239 41.0987 83.3266 40.688H84.3106C84.1772 41.0933 83.9346 41.4267 83.5826 41.688C83.2359 41.944 82.8039 42.072 82.2866 42.072C81.8652 42.072 81.4866 41.9787 81.1506 41.792C80.8199 41.6 80.5586 41.3333 80.3666 40.992C80.1799 40.6453 80.0866 40.2453 80.0866 39.792C80.0866 39.3387 80.1772 38.9413 80.3586 38.6C80.5452 38.2533 80.8039 37.9867 81.1346 37.8C81.4706 37.6133 81.8546 37.52 82.2866 37.52C82.7026 37.52 83.0732 37.6107 83.3986 37.792C83.7239 37.9733 83.9772 38.2293 84.1586 38.56C84.3399 38.8853 84.4306 39.2613 84.4306 39.688ZM83.4786 39.4C83.4732 39.064 83.3532 38.7947 83.1186 38.592C82.8839 38.3893 82.5932 38.288 82.2466 38.288C81.9319 38.288 81.6626 38.3893 81.4386 38.592C81.2146 38.7893 81.0812 39.0587 81.0386 39.4H83.4786ZM86.9281 42.072C86.5814 42.072 86.2694 42.0107 85.9921 41.888C85.7201 41.76 85.5041 41.5893 85.3441 41.376C85.1841 41.1573 85.0987 40.9147 85.0881 40.648H86.0321C86.0481 40.8347 86.1361 40.992 86.2961 41.12C86.4614 41.2427 86.6667 41.304 86.9121 41.304C87.1681 41.304 87.3654 41.256 87.5041 41.16C87.6481 41.0587 87.7201 40.9307 87.7201 40.776C87.7201 40.6107 87.6401 40.488 87.4801 40.408C87.3254 40.328 87.0774 40.24 86.7361 40.144C86.4054 40.0533 86.1361 39.9653 85.9281 39.88C85.7201 39.7947 85.5387 39.664 85.3841 39.488C85.2347 39.312 85.1601 39.08 85.1601 38.792C85.1601 38.5573 85.2294 38.344 85.3681 38.152C85.5067 37.9547 85.7041 37.8 85.9601 37.688C86.2214 37.576 86.5201 37.52 86.8561 37.52C87.3574 37.52 87.7601 37.648 88.0641 37.904C88.3734 38.1547 88.5387 38.4987 88.5601 38.936H87.6481C87.6321 38.7387 87.5521 38.5813 87.4081 38.464C87.2641 38.3467 87.0694 38.288 86.8241 38.288C86.5841 38.288 86.4001 38.3333 86.2721 38.424C86.1441 38.5147 86.0801 38.6347 86.0801 38.784C86.0801 38.9013 86.1227 39 86.2081 39.08C86.2934 39.16 86.3974 39.224 86.5201 39.272C86.6427 39.3147 86.8241 39.3707 87.0641 39.44C87.3841 39.5253 87.6454 39.6133 87.8481 39.704C88.0561 39.7893 88.2347 39.9173 88.3841 40.088C88.5334 40.2587 88.6107 40.4853 88.6161 40.768C88.6161 41.0187 88.5467 41.2427 88.4081 41.44C88.2694 41.6373 88.0721 41.792 87.8161 41.904C87.5654 42.016 87.2694 42.072 86.9281 42.072ZM97.5356 36.44V42H96.6236V38.192L94.9276 42H94.2956L92.5916 38.192V42H91.6796V36.44H92.6636L94.6156 40.8L96.5596 36.44H97.5356ZM102.774 39.688C102.774 39.8533 102.764 40.0027 102.742 40.136H99.3743C99.401 40.488 99.5317 40.7707 99.7663 40.984C100.001 41.1973 100.289 41.304 100.63 41.304C101.121 41.304 101.468 41.0987 101.67 40.688H102.654C102.521 41.0933 102.278 41.4267 101.926 41.688C101.58 41.944 101.148 42.072 100.63 42.072C100.209 42.072 99.8303 41.9787 99.4943 41.792C99.1637 41.6 98.9023 41.3333 98.7103 40.992C98.5237 40.6453 98.4303 40.2453 98.4303 39.792C98.4303 39.3387 98.521 38.9413 98.7023 38.6C98.889 38.2533 99.1477 37.9867 99.4783 37.8C99.8143 37.6133 100.198 37.52 100.63 37.52C101.046 37.52 101.417 37.6107 101.742 37.792C102.068 37.9733 102.321 38.2293 102.502 38.56C102.684 38.8853 102.774 39.2613 102.774 39.688ZM101.822 39.4C101.817 39.064 101.697 38.7947 101.462 38.592C101.228 38.3893 100.937 38.288 100.59 38.288C100.276 38.288 100.006 38.3893 99.7823 38.592C99.5583 38.7893 99.425 39.0587 99.3823 39.4H101.822ZM103.368 39.776C103.368 39.3333 103.458 38.9413 103.64 38.6C103.826 38.2587 104.077 37.9947 104.392 37.808C104.712 37.616 105.066 37.52 105.456 37.52C105.744 37.52 106.026 37.584 106.304 37.712C106.586 37.8347 106.81 38 106.976 38.208V36.08H107.896V42H106.976V41.336C106.826 41.5493 106.618 41.7253 106.352 41.864C106.09 42.0027 105.789 42.072 105.448 42.072C105.064 42.072 104.712 41.976 104.392 41.784C104.077 41.5867 103.826 41.3147 103.64 40.968C103.458 40.616 103.368 40.2187 103.368 39.776ZM106.976 39.792C106.976 39.488 106.912 39.224 106.784 39C106.661 38.776 106.498 38.6053 106.296 38.488C106.093 38.3707 105.874 38.312 105.64 38.312C105.405 38.312 105.186 38.3707 104.984 38.488C104.781 38.6 104.616 38.768 104.488 38.992C104.365 39.2107 104.304 39.472 104.304 39.776C104.304 40.08 104.365 40.3467 104.488 40.576C104.616 40.8053 104.781 40.9813 104.984 41.104C105.192 41.2213 105.41 41.28 105.64 41.28C105.874 41.28 106.093 41.2213 106.296 41.104C106.498 40.9867 106.661 40.816 106.784 40.592C106.912 40.3627 106.976 40.096 106.976 39.792ZM109.558 37.008C109.392 37.008 109.254 36.952 109.142 36.84C109.03 36.728 108.974 36.5893 108.974 36.424C108.974 36.2587 109.03 36.12 109.142 36.008C109.254 35.896 109.392 35.84 109.558 35.84C109.718 35.84 109.854 35.896 109.966 36.008C110.078 36.12 110.134 36.2587 110.134 36.424C110.134 36.5893 110.078 36.728 109.966 36.84C109.854 36.952 109.718 37.008 109.558 37.008ZM110.006 37.592V42H109.094V37.592H110.006ZM110.899 39.776C110.899 39.3333 110.99 38.9413 111.171 38.6C111.358 38.2587 111.608 37.9947 111.923 37.808C112.243 37.616 112.595 37.52 112.979 37.52C113.326 37.52 113.627 37.5893 113.883 37.728C114.144 37.8613 114.352 38.0293 114.507 38.232V37.592H115.427V42H114.507V41.344C114.352 41.552 114.142 41.7253 113.875 41.864C113.608 42.0027 113.304 42.072 112.963 42.072C112.584 42.072 112.238 41.976 111.923 41.784C111.608 41.5867 111.358 41.3147 111.171 40.968C110.99 40.616 110.899 40.2187 110.899 39.776ZM114.507 39.792C114.507 39.488 114.443 39.224 114.315 39C114.192 38.776 114.03 38.6053 113.827 38.488C113.624 38.3707 113.406 38.312 113.171 38.312C112.936 38.312 112.718 38.3707 112.515 38.488C112.312 38.6 112.147 38.768 112.019 38.992C111.896 39.2107 111.835 39.472 111.835 39.776C111.835 40.08 111.896 40.3467 112.019 40.576C112.147 40.8053 112.312 40.9813 112.515 41.104C112.723 41.2213 112.942 41.28 113.171 41.28C113.406 41.28 113.624 41.2213 113.827 41.104C114.03 40.9867 114.192 40.816 114.315 40.592C114.443 40.3627 114.507 40.096 114.507 39.792ZM118.399 39.208C118.399 38.664 118.524 38.176 118.775 37.744C119.031 37.312 119.375 36.976 119.807 36.736C120.244 36.4907 120.722 36.368 121.239 36.368C121.831 36.368 122.356 36.5147 122.815 36.808C123.279 37.096 123.615 37.5067 123.823 38.04H122.727C122.583 37.7467 122.383 37.528 122.127 37.384C121.871 37.24 121.575 37.168 121.239 37.168C120.871 37.168 120.543 37.2507 120.255 37.416C119.967 37.5813 119.74 37.8187 119.575 38.128C119.415 38.4373 119.335 38.7973 119.335 39.208C119.335 39.6187 119.415 39.9787 119.575 40.288C119.74 40.5973 119.967 40.8373 120.255 41.008C120.543 41.1733 120.871 41.256 121.239 41.256C121.575 41.256 121.871 41.184 122.127 41.04C122.383 40.896 122.583 40.6773 122.727 40.384H123.823C123.615 40.9173 123.279 41.328 122.815 41.616C122.356 41.904 121.831 42.048 121.239 42.048C120.716 42.048 120.239 41.928 119.807 41.688C119.375 41.4427 119.031 41.104 118.775 40.672C118.524 40.24 118.399 39.752 118.399 39.208ZM126.803 42.072C126.387 42.072 126.011 41.9787 125.675 41.792C125.339 41.6 125.075 41.3333 124.883 40.992C124.691 40.6453 124.595 40.2453 124.595 39.792C124.595 39.344 124.693 38.9467 124.891 38.6C125.088 38.2533 125.357 37.9867 125.699 37.8C126.04 37.6133 126.421 37.52 126.843 37.52C127.264 37.52 127.645 37.6133 127.987 37.8C128.328 37.9867 128.597 38.2533 128.795 38.6C128.992 38.9467 129.091 39.344 129.091 39.792C129.091 40.24 128.989 40.6373 128.787 40.984C128.584 41.3307 128.307 41.6 127.955 41.792C127.608 41.9787 127.224 42.072 126.803 42.072ZM126.803 41.28C127.037 41.28 127.256 41.224 127.459 41.112C127.667 41 127.835 40.832 127.963 40.608C128.091 40.384 128.155 40.112 128.155 39.792C128.155 39.472 128.093 39.2027 127.971 38.984C127.848 38.76 127.685 38.592 127.483 38.48C127.28 38.368 127.061 38.312 126.827 38.312C126.592 38.312 126.373 38.368 126.171 38.48C125.973 38.592 125.816 38.76 125.699 38.984C125.581 39.2027 125.523 39.472 125.523 39.792C125.523 40.2667 125.643 40.6347 125.883 40.896C126.128 41.152 126.435 41.28 126.803 41.28ZM135.328 37.52C135.675 37.52 135.984 37.592 136.256 37.736C136.533 37.88 136.749 38.0933 136.904 38.376C137.064 38.6587 137.144 39 137.144 39.4V42H136.24V39.536C136.24 39.1413 136.141 38.84 135.944 38.632C135.747 38.4187 135.477 38.312 135.136 38.312C134.795 38.312 134.523 38.4187 134.32 38.632C134.123 38.84 134.024 39.1413 134.024 39.536V42H133.12V39.536C133.12 39.1413 133.021 38.84 132.824 38.632C132.627 38.4187 132.357 38.312 132.016 38.312C131.675 38.312 131.403 38.4187 131.2 38.632C131.003 38.84 130.904 39.1413 130.904 39.536V42H129.992V37.592H130.904V38.096C131.053 37.9147 131.243 37.7733 131.472 37.672C131.701 37.5707 131.947 37.52 132.208 37.52C132.56 37.52 132.875 37.5947 133.152 37.744C133.429 37.8933 133.643 38.1093 133.792 38.392C133.925 38.1253 134.133 37.9147 134.416 37.76C134.699 37.6 135.003 37.52 135.328 37.52ZM139.217 38.24C139.371 38.0373 139.582 37.8667 139.849 37.728C140.115 37.5893 140.417 37.52 140.753 37.52C141.137 37.52 141.486 37.616 141.801 37.808C142.121 37.9947 142.371 38.2587 142.553 38.6C142.734 38.9413 142.825 39.3333 142.825 39.776C142.825 40.2187 142.734 40.616 142.553 40.968C142.371 41.3147 142.121 41.5867 141.801 41.784C141.486 41.976 141.137 42.072 140.753 42.072C140.417 42.072 140.118 42.0053 139.857 41.872C139.595 41.7333 139.382 41.5627 139.217 41.36V44.096H138.305V37.592H139.217V38.24ZM141.897 39.776C141.897 39.472 141.833 39.2107 141.705 38.992C141.582 38.768 141.417 38.6 141.209 38.488C141.006 38.3707 140.787 38.312 140.553 38.312C140.323 38.312 140.105 38.3707 139.897 38.488C139.694 38.6053 139.529 38.776 139.401 39C139.278 39.224 139.217 39.488 139.217 39.792C139.217 40.096 139.278 40.3627 139.401 40.592C139.529 40.816 139.694 40.9867 139.897 41.104C140.105 41.2213 140.323 41.28 140.553 41.28C140.787 41.28 141.006 41.2213 141.209 41.104C141.417 40.9813 141.582 40.8053 141.705 40.576C141.833 40.3467 141.897 40.08 141.897 39.776ZM143.423 39.776C143.423 39.3333 143.513 38.9413 143.695 38.6C143.881 38.2587 144.132 37.9947 144.447 37.808C144.767 37.616 145.119 37.52 145.503 37.52C145.849 37.52 146.151 37.5893 146.407 37.728C146.668 37.8613 146.876 38.0293 147.031 38.232V37.592H147.951V42H147.031V41.344C146.876 41.552 146.665 41.7253 146.399 41.864C146.132 42.0027 145.828 42.072 145.487 42.072C145.108 42.072 144.761 41.976 144.447 41.784C144.132 41.5867 143.881 41.3147 143.695 40.968C143.513 40.616 143.423 40.2187 143.423 39.776ZM147.031 39.792C147.031 39.488 146.967 39.224 146.839 39C146.716 38.776 146.553 38.6053 146.351 38.488C146.148 38.3707 145.929 38.312 145.695 38.312C145.46 38.312 145.241 38.3707 145.039 38.488C144.836 38.6 144.671 38.768 144.543 38.992C144.42 39.2107 144.359 39.472 144.359 39.776C144.359 40.08 144.42 40.3467 144.543 40.576C144.671 40.8053 144.836 40.9813 145.039 41.104C145.247 41.2213 145.465 41.28 145.695 41.28C145.929 41.28 146.148 41.2213 146.351 41.104C146.553 40.9867 146.716 40.816 146.839 40.592C146.967 40.3627 147.031 40.096 147.031 39.792ZM151.372 37.52C151.719 37.52 152.028 37.592 152.3 37.736C152.578 37.88 152.794 38.0933 152.948 38.376C153.103 38.6587 153.18 39 153.18 39.4V42H152.276V39.536C152.276 39.1413 152.178 38.84 151.98 38.632C151.783 38.4187 151.514 38.312 151.172 38.312C150.831 38.312 150.559 38.4187 150.356 38.632C150.159 38.84 150.06 39.1413 150.06 39.536V42H149.148V37.592H150.06V38.096C150.21 37.9147 150.399 37.7733 150.628 37.672C150.863 37.5707 151.111 37.52 151.372 37.52ZM158.312 37.592L155.608 44.072H154.664L155.56 41.928L153.824 37.592H154.84L156.08 40.952L157.368 37.592H158.312Z" fill="white"/>
					</svg>
				}
			/>
		</div>
	)
}

export default story;