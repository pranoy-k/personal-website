"use client";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}

const ContactInfo = ({ icon, title, content }: ContactInfoProps) => {
  return (
    <div className="flex items-start">
      <div className="text-blue-400 mr-3">
        {icon}
      </div>
      <div>
        <h4 className="font-bold">{title}</h4>
        {typeof content === 'string' ? (
          <p className="text-slate-300">{content}</p>
        ) : (
          content
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
