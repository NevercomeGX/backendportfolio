function verifyEmail(otp: string) {
  const html = `
    <!DOCTYPE html>
<html
  lang="en"
  xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
>
  <head>
    <meta charset="utf-8" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="format-detection"
      content="telephone=no, date=no, address=no, email=no"
    />
    <title>Nevercomex</title>
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700"
      rel="stylesheet"
      media="screen"
    />
    <style>
      .hover-underline:hover {
        text-decoration: underline !important;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes ping {
        75%,
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }

      @keyframes pulse {
        50% {
          opacity: 0.5;
        }
      }

      @keyframes bounce {
        0%,
        100% {
          transform: translateY(-25%);
          animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }

        50% {
          transform: none;
          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      }

      @media (max-width: 600px) {
        .sm-px-24 {
          padding-left: 24px !important;
          padding-right: 24px !important;
        }

        .sm-py-32 {
          padding-top: 32px !important;
          padding-bottom: 32px !important;
        }

        .sm-w-full {
          width: 100% !important;
        }
      }
    </style>
  </head>

  <body
    style="
      width: 100%;
      margin: 0;
      padding: 0;
      width: 100%;
      word-break: break-word;
      -webkit-font-smoothing: antialiased;
      --bg-opacity: 1;
      background-color: #161616;
    "
  >
    <div style="display: none">
      A request to create your node-typescript-boilerplate account was received.
      Use this link to confirm your account and log in
    </div>
    <div
      role="article"
      aria-roledescription="email"
      aria-label="Reset your Password"
      lang="en"
      style="display: flex"
    >
      <table
        style="
          font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;
          width: 100%;
        "
        width="100%"
        cellpadding="0"
        cellspacing="0"
        role="presentation"
      >
        <tr>
          <td
            align="center"
            style="
              --bg-opacity: 1;
              background-color: #eceff1;
              font-family: Montserrat, -apple-system, 'Segoe UI', sans-serif;
            "
          >
            <table
              class="sm-w-full"
              style="font-family: 'Montserrat', Arial, sans-serif; width: 600px"
              width="600"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
            >
              <tr>
                <td
                  class="sm-py-32 sm-px-24"
                  style="
                    font-family: Montserrat, -apple-system, 'Segoe UI',
                      sans-serif;
                    padding: 48px;
                    text-align: center;
                  "
                  align="center"
                >
                  <a
                    href=""
                    style="
                      border: 0;
                      max-width: 100%;
                      line-height: 100%;
                      vertical-align: middle;
                    "
                  >
                  </a>
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  class="sm-px-24"
                  style="font-family: 'Montserrat', Arial, sans-serif"
                >
                  <table
                    style="
                      font-family: 'Montserrat', Arial, sans-serif;
                      width: 100%;
                    "
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    role="presentation"
                  >
                    <tr>
                      <td
                        class="sm-px-24"
                        style="
                          --bg-opacity: 1;
                          background-color: #212121;
                          border-radius: 4px;
                          font-family: Montserrat, -apple-system, 'Segoe UI',
                            sans-serif;
                          font-size: 14px;
                          line-height: 24px;
                          padding: 48px;
                          text-align: left;
                          --text-opacity: 1;
                          color: #fff;
                        "
                        align="left"
                      >
                        <div
                          id="header"
                          align="center"
                          height="6px"
                          width="5px"
                        >
                          <a href="https://nevercomex.com">
                            <img
                              src="https://user-images.githubusercontent.com/22091437/218925120-46903ac8-9f2f-479b-9bd7-cc5024fda75c.png"
                              width="200"
                            />
                          </a>
                        </div>
                        <p
                          style="
                            font-weight: 600;
                            font-size: 18px;
                            margin-bottom: 0;
                          "
                        >
                          Dear ${otp},
                          <br>
                          <br>
                          Hey there,
                          <br>
                        </p>

                        <p style="margin: 10px 0 24px">
                          I am writing to confirm the receipt of your email and the information you have provided. Thank you for taking the time to reach out to me.
                        </p>

                        <p style="margin: 10px 0 24px">
                          I will be in touch shortly to address your concerns and offer you the appropriate solution for your needs. Your patience is appreciated as we review your request.
                        </p>

                        
                        <p style="margin: 10px 0 24px">
                          Thank you for your trust, and I look forward to serving you soon.
                        </p>

                        <p style="margin: -10p 0 24px">
                          Best regards,
                        </p>

                        <lable
                          style="
                            display: block;
                            font-size: 24px;
                            line-height: 100%;
                            margin-bottom: 24px;
                            justify-items: center;
                            align-items: center;
                            --text-opacity: 1;
                            color: #fff;
                            text-decoration: none;
                          "
                      
                        >
                        <table
                          style="font-family: 'Montserrat', Arial, sans-serif"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                        >
                          <tr>
                            <td
                              style="
                                mso-padding-alt: 16px 24px;
                                --bg-opacity: 1;
                                background-color: #7367f0;
                                border-radius: 4px;
                                font-family: Montserrat, -apple-system,
                                  'Segoe UI', sans-serif;
                              "
                            ></td>
                          </tr>
                        </table>

                        <table
                          style="
                            font-family: 'Montserrat', Arial, sans-serif;
                            width: 100%;
                          "
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                        >
                          <tr>
                            <td
                              style="
                                font-family: 'Montserrat', Arial, sans-serif;
                                padding-top: 32px;
                                padding-bottom: 32px;
                              "
                            >
                              <div
                                style="
                                  --bg-opacity: 1;
                                  background-color: #eceff1;
                                  height: 1px;
                                  line-height: 1px;
                                "
                              >
                                &zwnj;
                              </div>
                            </td>
                          </tr>
                        </table>
                        <p style="margin: -10px 0 16px; font-size: 15px ">
                          Needing some additional support? Please contact us at
                          <a
                            href="mailto:nevercomex@gmail.com"
                            class="hover-underline"
                            style="
                              --text-opacity: 1;
                              color: #7367f0;
                              text-decoration: none;
                            "
                            >nevercomex@gmail.com</a
                          >.
                        </p>
                        <p style="margin: -10px 0 16px; font-size: 15px ">
                        <br />Nevercomex Support Team
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: 'Montserrat', Arial, sans-serif;
                          height: 20px;
                        "
                        height="20"
                      ></td>
                    </tr>
                    <tr>
                      <td
                        style="
                          font-family: 'Montserrat', Arial, sans-serif;
                          height: 16px;
                        "
                        height="16"
                      ></td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;
  const text = `
        Verify Email, A request to create your node-typescript-boilerplate account was received.
        Use this OTP to confirm your account and log in`;
  return {
    html,
    text,
  };
}

export default verifyEmail;
