import Layout from "../../components/Layout";
import Card from "../../components/Card";

export default function AdminDashboard() {
    return (
        <Layout role="admin">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card title="Students" value="1200" />
                <Card title="Teachers" value="80" />
                <Card title="Revenue" value="$5000" />
            </div>
        </Layout>
    );
}