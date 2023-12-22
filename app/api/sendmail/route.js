export async function POST(request) {
    const { name, email, subject, message } = request.body;
    // E-posta seçeneklerini ayarlayın
    const mailOptions = {
        from: email,
        to: "test@test.com",
        subject: `${subject} - ${name}`,
        text: message,
    };

    // E-postayı gönderin ve sonucu döndürün
    try {
        const result = mailOptions;
        return Response.json({ success: true, data: result }, { status: 200 });
    } catch (error) {
        return Response.json({ success: false, message: "E-posta gönderilemedi." }, { status: 500 });
    }
}